'use client';

import { fetchPreferredRecipes } from '@/utils/api/fetchRecipe';
import { useUserContext } from '@/utils/UserContextProvider';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import LoadingCards from './LoadingCards';
import { RecipeCardInterface } from '@/utils/Interfaces';
import RecipeCard1 from './ui/RecipeCard1';

const getRandomCategories = (tags: string[], count: number) => {
  const shuffled = [...tags].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const BasedOnPref = () => {
  const { pref } = useUserContext();
  const [userPref, setUserPref] = useState(pref);

  useEffect(() => {
    setUserPref(pref);
  }, [pref]);

  const {
    data: recipes,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['prefRecipes'],
    queryFn: () => fetchPreferredRecipes({ tags: getRandomCategories(userPref, 1), size: 10 }),
  });

  if (isLoading) {
    return <LoadingCards />;
  }

  if (isError) {
    console.log(error);
  }

  return (
    recipes &&
    recipes.results.length > 0 && (
      <div className='w-full space-y-5'>
        <h1 className='text-3xl font-bold'>Based on your Preferences</h1>
        <div className='w-full flex items-stretch justify-normal gap-4 overflow-auto no-scroll-bar'>
          {recipes &&
            recipes.results.map((item: RecipeCardInterface) => {
              return (
                <div key={item.id} className='w-full min-w-[350px] max-w-[450px] md:w-[400px] mx-auto'>
                  <RecipeCard1 recipe={item} />
                </div>
              );
            })}
        </div>
      </div>
    )
  );
};

export default BasedOnPref;
