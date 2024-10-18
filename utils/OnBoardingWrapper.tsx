'use client';

import OnBoarding from '@/containers/OnBoarding';
import { useUserContext } from './UserContextProvider';

export const OnBoardingWrapper = ({ children }: { children: React.ReactNode }) => {
  const { pref } = useUserContext();
  return pref.length > 0 ? (
    <div className='px-2 py-3 lg:px-5 space-y-4'>{children}</div>
  ) : (
    <>
      <OnBoarding />
    </>
  );
};
