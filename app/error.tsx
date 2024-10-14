'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='w-full min-h-[90vh] flex flex-col items-center justify-center'>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className='px-4 py-1.5 bg-primary-900 text-secondary-500 rounded-md'>
        Try again
      </button>
    </div>
  );
}
