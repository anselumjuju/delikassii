import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex items-end justify-start gap-2 cursor-pointer'>
      <Image src={'/assets/Logo.svg'} alt='Logo' width={32} height={32} className='w-10' />
      <p className='text-2xl font-bold font-dancingScript hidden md:block'>Delicio</p>
    </div>
  );
};

export default Logo;
