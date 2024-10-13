'use client';

import { LoadingCards, RecipeCard2, RecipeCard3 } from '@/components';
import { fetchFeeds } from '@/utils/api/fetchRecipe';
import { FeedDataInterface } from '@/utils/Interfaces';
import { useQuery } from '@tanstack/react-query';

const Feeds = () => {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['feeds'],
    queryFn: () => fetchFeeds({ size: 5 }),
  });

  if (isLoading) {
    return (
      <div className='w-full space-y-7'>
        {Array.from({ length: 5 }, (_, index) => (
          <LoadingCards key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className='w-full h-1/5 flex items-center justify-center'>Something went wrong</div>;
  }

  if (!isLoading && !isError && recipes) {
    const data: FeedDataInterface[] = recipes.results
      .filter((data: FeedDataInterface) => data.name && Array.isArray(data.items) && data.items.length > 1)
      .sort((a: FeedDataInterface, b: FeedDataInterface) => (b.items?.length || 0) - (a.items?.length || 0));

    return (
      <div className='w-full space-y-10'>
        {data &&
          data.map((recipe) => {
            const CardComponent = Math.random() > 0.5 ? RecipeCard2 : RecipeCard3;
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
  }
};

export default Feeds;
