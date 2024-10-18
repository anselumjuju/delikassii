'use client';

import { Preferences, SplashScreen } from '@/components';
import { useEffect, useState } from 'react';

const OnBoarding = () => {
  const [isPrefPage, setIsPrefPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPrefPage(true);
    }, 1000);
  }, []);

  return <div className='w-full h-screen overflow-hidden flex items-center justify-center'>{isPrefPage ? <Preferences /> : <SplashScreen />}</div>;
};

export default OnBoarding;
