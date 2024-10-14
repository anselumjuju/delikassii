import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Loading() {
  return (
    <SkeletonTheme baseColor='#c7c7c7' highlightColor='#d8d8d8'>
      <div className='w-full'>
        <div className='w-full aspect-video h-full max-h-[70vh]'>
          <Skeleton className='w-full h-full' />
        </div>
        <Skeleton className='w-full h-16 mt-3 mb-2' />

        <div className='w-full flex items-stretch justify-between gap-x-10'>
          <div className='flex-1'>
            <Skeleton className='w-full h-14 my-1' />
            <Skeleton className='w-full h-12 my-1' />
            <Skeleton className='w-full h-10 my-1' />
            <div className='w-full lg:hidden'>
              <Skeleton className='w-full h-6 my-1' count={6} />
            </div>
          </div>
          <div className='w-[30%] 2xl:w-[25%] hidden lg:block rounded-lg'>
            <Skeleton className='w-full h-full' />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}
