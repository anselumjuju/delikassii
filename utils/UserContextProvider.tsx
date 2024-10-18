'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface UserPref {
  name: string;
  photoUrl: string;
  pref: string[];
  updateStorage: (newDetails: Partial<UserPref>) => void;
}

const defaultUserPref: UserPref = {
  name: 'Chriz',
  photoUrl: '',
  pref: [],
  updateStorage: () => {},
};

const UserContext = createContext<UserPref>(defaultUserPref);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userPref, setUserPref] = useState<UserPref>(defaultUserPref);

  useEffect(() => {
    const storedPref = localStorage.getItem('userPreferences');
    if (storedPref) {
      try {
        const parsedPref: Partial<UserPref> = JSON.parse(storedPref);
        const updatedPref: UserPref = {
          name: parsedPref.name || 'Chriz',
          photoUrl: parsedPref.photoUrl || 'https://i.pravatar.cc/150?img=11',
          pref: parsedPref.pref || [],
          updateStorage: userPref.updateStorage,
        };
        setUserPref(updatedPref);
      } catch (error) {
        console.error('Error parsing user preferences:', error);
      }
    }
  }, []);

  const updateStorage = ({ name, photoUrl, pref }: Partial<UserPref>) => {
    const updatedDetails = { name, photoUrl, pref };
    setUserPref(updatedDetails as UserPref);
    localStorage.setItem('userPreferences', JSON.stringify(updatedDetails));
  };

  return <UserContext.Provider value={{ ...userPref, updateStorage }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
