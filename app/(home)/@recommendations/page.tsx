'use client';

import { LoadingCards, RecipeCard1 } from '@/components';
import { fetchRecipesList } from '@/utils/api/fetchRecipe';
import { RecipeCardInterface } from '@/utils/Interfaces';
import { useQuery } from '@tanstack/react-query';

export default function Recommendations() {
  const {
    data: recipes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['recipes'],
    queryFn: () => fetchRecipesList({ size: 10 }),
  });

  if (isLoading) {
    return <LoadingCards />;
  }

  if (isError) {
    return <div className='w-full h-1/5 flex items-center justify-center'>Something went wrong</div>;
  }

  if (!isLoading && !isError) {
    console.log(recipes);
  }

  return (
    <div className='w-full flex items-stretch justify-normal gap-4 overflow-auto no-scroll-bar'>
      {recipes.results.map((item: RecipeCardInterface) => {
        return <RecipeCard1 recipe={item} key={item.id} />;
      })}
    </div>
  );
}
