'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface UserPref {
  name: string;
  photoUrl: string;
  pref: object[];
  updatePreferences: (newPref: object[]) => void;
  updateUserDetails: (name: string, photoUrl: string) => void;
}

const defaultUserPref: UserPref = {
  name: '',
  photoUrl: '',
  pref: [],
  updatePreferences: () => {},
  updateUserDetails: () => {},
};

const UserContext = createContext<UserPref>(defaultUserPref);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userPref, setUserPref] = useState<UserPref>(defaultUserPref);

  useEffect(() => {
    const storedPref = localStorage.getItem('userPreferences');
    if (storedPref) {
      const parsedPref: UserPref = JSON.parse(storedPref);
      setUserPref(parsedPref);
    }
  }, []);

  const updatePreferences = (newPref: object[]) => {
    const updatedPref = { ...userPref, pref: newPref };
    setUserPref(updatedPref);
    localStorage.setItem('userPreferences', JSON.stringify(updatedPref));
  };

  const updateUserDetails = (name: string, photoUrl: string) => {
    const updatedDetails = { ...userPref, name, photoUrl };
    setUserPref(updatedDetails);
    localStorage.setItem('userPreferences', JSON.stringify(updatedDetails));
  };

  return <UserContext.Provider value={{ ...userPref, updatePreferences, updateUserDetails }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
