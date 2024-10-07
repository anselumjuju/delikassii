import { Logo } from '@/public';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='flex flex-col items-center gap-6'>
        <Image src={Logo} alt='' />
        <h1 className='text-5xl'>Normal</h1>
        <h1 className='font-openSans text-5xl'>Open Sans</h1>
        <h1 className='font-raleway text-5xl'>Raleway</h1>
        <h1 className='font-dancingScript text-5xl'>Dancing Scripts</h1>
      </div>
    </div>
  );
}
