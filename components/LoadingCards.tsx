import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function LoadingCards() {
  const cardCount = 6;

  return (
    <SkeletonTheme baseColor='#c7c7c7' highlightColor='#d8d8d8'>
      <div className='space-y-6'>
        <div className='w-[80%] md:w-[60%] h-7'>
          <Skeleton className='w-full h-full' />
        </div>
        <div className='flex items-center justify-normal gap-4 overflow-auto no-scroll-bar'>
          {Array.from({ length: cardCount }, (_, index) => (
            <div key={index} className='min-w-[300px] bg-[#e1e2e5] rounded-lg p-2 py-1'>
              <Skeleton height={150} />
              <div className='space-y-3 py-3'>
                <Skeleton width='60%' />
                <Skeleton width='80%' />
                <Skeleton width='40%' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}
