import { RecipeCard2, RecipeCard3 } from '@/components';
import { FeedDataInterface } from '@/utils/Interfaces';

interface feedDataProps {
  feeds: {
    results: FeedDataInterface[];
  };
}

const Feeds = ({ feeds }: feedDataProps) => {
  const data: FeedDataInterface[] = feeds.results
    .filter((data: FeedDataInterface) => data.name && Array.isArray(data.items) && data.items.length > 1)
    .sort((a: FeedDataInterface, b: FeedDataInterface) => (b.items?.length || 0) - (a.items?.length || 0))
    .slice(0, -1);

  return (
    <div className='w-full space-y-10'>
      {data &&
        data.map((recipe: FeedDataInterface, idx) => {
          const CardComponent = idx % 2 == 0 ? RecipeCard2 : RecipeCard3;
          return (
            <div key={recipe.name} className='space-y-6'>
              <h1 className='text-2xl md:text-3xl font-bold'>{recipe.name}</h1>
              <div className='w-full flex items-stretch justify-normal gap-4 lg:gap-6 overflow-auto no-scroll-bar'>
                {Array.isArray(recipe.items) && recipe.items?.map((item) => <CardComponent recipe={item} key={item.id} />)}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Feeds;
