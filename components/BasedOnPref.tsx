'use client';

import { useUserContext } from '@/utils/UserContextProvider';
import { useEffect, useState } from 'react';

const BasedOnPref = () => {
  const { pref } = useUserContext();
  const [userPref, setUserPref] = useState(pref);

  useEffect(() => {
    setUserPref(pref);
  }, [pref]);

  useEffect(() => {
    console.log('UserPref:', userPref);
  }, [userPref]);

  return (
    <div>
      <h1>BasedOnPref</h1>
    </div>
  );
};

export default BasedOnPref;
