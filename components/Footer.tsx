import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full p-2 py-6 pt-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-4 relative'>
      <div className='w-full h-[1px] bg-primary-500 absolute top-[10%] left-1/2 -translate-x-1/2' />
      <div className='space-y-2 text-center lg:text-left'>
        <Link href='/'>
          <p className='text-4xl font-bold font-dancingScript'>Delikassii</p>
        </Link>
        <p>
          Find and explore delicious recipes
          <br /> now with <span className='font-semibold italic font-raleway'>Delikassii</span>
        </p>
      </div>
      <p className='text-sm text-primary-500 lg:text-sm'>copyright &copy; delikassii.vercel.app 2024</p>
    </div>
  );
};

export default Footer;
