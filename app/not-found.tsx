import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center gap-y-5'>
      <h2>Not Found</h2>
      <Link href='/'>
        <button className='px-4 py-1.5 bg-primary-900 text-secondary-500 rounded-md'>Return Home</button>
      </Link>
    </div>
  );
}
