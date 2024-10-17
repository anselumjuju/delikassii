import { aiBurgerImage, burgerImage, CurvedLogo } from '@/public';
import Image from 'next/image';

const SplashScreen = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className='w-full h-screen py-5 px-2 flex items-stretch justify-center'>
      <div className='w-full h-full hidden lg:block rounded-lg overflow-hidden'>
        <Image src={aiBurgerImage} alt='Burger' className='w-full h-full object-cover' />
      </div>

      <div className='w-full h-full flex items-center'>
        <div className='w-full max-w-[500px] h-full max-h-[1100px] mx-auto flex flex-col items-center justify-around lg:justify-evenly gap-5'>
          <Image src={CurvedLogo} alt='Logo' className='w-[35%] max-w-[160px] mx-auto' />
          <div className='w-full relative lg:hidden'>
            <Image src={burgerImage} alt='Burger' className='w-full max-w-[450px] mx-auto' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-secondary-500 from-20% to-transparent' />
          </div>
          <div className='w-full space-y-10'>
            <h1 className='w-[15ch] text-4xl md:text-5xl lg:text-center lg:mx-auto font-bold self-start leading-tight lg:leading-snug'>
              Explore the <span className=' border-b-4 border-accent-900'>food</span> recipes more easier!
            </h1>
            <p className='w-[80%] mx-auto hidden lg:block text-center text-base text-primary-500'>
              Delight in our crispy, golden fries served with savory dips for the ultimate snacking experience.
            </p>
          </div>
          <button className='w-full rounded-md px-4 py-3 bg-accent-900 text-secondary-500 text-base font-semibold cursor-pointer' onClick={onClick}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
