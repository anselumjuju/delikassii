import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-end justify-start gap-2 cursor-pointer'>
        <Image src={'/assets/Logo.svg'} alt='Logo' width={32} height={32} className='w-10' />
        <p className='text-2xl font-bold font-dancingScript hidden md:block'>Delikassii</p>
      </div>
    </Link>
  );
};

export default Logo;
