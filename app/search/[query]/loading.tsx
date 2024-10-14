import { LoadingCards } from '@/components';

export default function Loading() {
  return (
    <div className='w-full space-y-5'>
      {Array.from({ length: 3 }, (_, idx) => {
        return (
          <div key={idx}>
            <LoadingCards />
          </div>
        );
      })}
    </div>
  );
}
