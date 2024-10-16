import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <div className='flex items-end justify-start gap-1 cursor-pointer'>
        <Image src={'/assets/Logo.svg'} alt='Logo' width={24} height={24} className='w-9 md:w-10' />
        <p className='text-2xl md:text-3xl font-bold font-dancingScript tracking-wide'>Delikassii</p>
      </div>
    </Link>
  );
};

export default Logo;
