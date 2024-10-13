import Recommendations from './(home)/@recommendations/page';
import Feeds from './(home)/@feeds/page';

export default function Home() {
  return (
    <div className='w-full  space-y-10'>
      <Recommendations />
      <Feeds />
    </div>
  );
}
