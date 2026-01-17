import { aiBurgerImage, CurvedLogo } from '@/public';
import Image from 'next/image';

const SplashScreen = () => {
  return (
    <div className='w-full h-full py-5 px-2 flex items-stretch justify-center relative'>
      <div className='w-full h-full hidden lg:block rounded-lg overflow-hidden'>
        <Image src={aiBurgerImage} alt='Burger' className='w-full h-full object-cover' />
      </div>

      <div className='lg:hidden overflow-hidden absolute inset-0 -z-10'>
        <div className='w-full h-full absolute bg-linear-to-t from-black to-transparent from-30% md:from-45%' />
        <Image src={aiBurgerImage} alt='Burger' className='w-screen h-full object-cover' />
      </div>

      <div className='w-full flex items-center'>
        <div className='w-full max-w-[500px] h-full lg:max-h-[1100px] mx-auto py-16 flex flex-col items-center justify-between lg:justify-evenly gap-5'>
          <Image src={CurvedLogo} alt='Logo' className='w-[35%] max-w-[160px] mx-auto lg:invert' />
          <div className='w-full space-y-10 text-secondary-900 lg:text-primary-900'>
            <h1 className='w-[80%] text-5xl text-center mx-auto font-bold leading-tight'>Explore the food recipes more easier!</h1>
            <p className='w-[80%] mx-auto text-center text-base'>
              Delight in our crispy, golden fries served with savory dips for the ultimate snacking experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
