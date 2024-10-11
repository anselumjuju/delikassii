'use client';

import { LoadingCards, RecipeCard2 } from '@/components';
import { fetchFeeds } from '@/utils/api/fetchRecipe';
import { FeedDataInterface } from '@/utils/Interfaces';
import { useQuery } from '@tanstack/react-query';

const Feeds = () => {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['recipes'],
    queryFn: () => fetchFeeds({ size: 8 }),
  });

  if (isLoading) {
    return <LoadingCards />;
  }

  if (isError) {
    return <div className='w-full h-1/5 flex items-center justify-center'>Something went wrong</div>;
  }

  if (!isLoading && !isError && recipes) {
    console.log(recipes);
    const data: FeedDataInterface[] = recipes.results
      .filter((data: FeedDataInterface) => data.name && Array.isArray(data.items) && data.items.length > 1)
      .sort((a, b) => (b.items?.length || 0) - (a.items?.length || 0));

    return (
      <div className='w-full space-y-7'>
        {data &&
          data.map((recipe) => (
            <div key={recipe.name} className='space-y-5'>
              <h1 className='text-3xl font-bold'>{recipe.name}</h1>
              <div className='w-full flex items-stretch justify-normal gap-4 lg:gap-6 overflow-auto no-scroll-bar'>
                {Array.isArray(recipe.items) && recipe.items?.map((item) => <RecipeCard2 recipe={item} key={item.id} />)}
              </div>
            </div>
          ))}
      </div>
    );
  }
};

export default Feeds;
