'use client';

import { Preferences, SplashScreen } from '@/components';
import { useState } from 'react';

const OnBoarding = () => {
  const [isPrefPage, setIsPrefPage] = useState(false);

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      {isPrefPage ? <Preferences /> : <SplashScreen onClick={() => setIsPrefPage(true)} />}
    </div>
  );
};

export default OnBoarding;
