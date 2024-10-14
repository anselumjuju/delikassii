import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-4 p-2 py-6 border-t border-primary-500'>
      <div className='space-y-2 text-center lg:text-left'>
        <Link href='/'>
          <p className='text-3xl font-bold font-dancingScript'>Delicio</p>
        </Link>
        <p>
          Get the food recipe more easier <br /> now with <span className='font-bold'>Delicio</span>
        </p>
      </div>
      <p className='text-xs text-primary-500 lg:text-sm'>copyright&copy;delicioo.vercel.app 2024</p>
    </div>
  );
};

export default Footer;
