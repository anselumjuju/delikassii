import { Logo } from '@/public';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='flex flex-col items-center gap-6'>
        <Image src={Logo} alt='' />
        <h1 className='font-dancingScript text-5xl'>Delicio</h1>
      </div>
    </div>
  );
}
