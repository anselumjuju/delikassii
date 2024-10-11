import Recommendations from './(home)/@recommendations/page';
import Feeds from './(home)/@feeds/page';

export default function Home() {
  return (
    <div className='w-full py-3 space-y-5'>
      <h1 className='text-3xl font-bold'>Recommended for you</h1>
      <Recommendations />
      <Feeds />
    </div>
  );
}
