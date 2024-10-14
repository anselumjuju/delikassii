'use client';

import { RecipeCard1 } from '@/components';
import { RecipeCardInterface } from '@/utils/Interfaces';

interface recipeProps {
  recipes: {
    results: RecipeCardInterface[];
  };
}

export default function Recommendations({ recipes }: recipeProps) {
  return (
    <div className='w-full space-y-5'>
      <h1 className='text-3xl font-bold'>Recommended for you</h1>
      <div className='w-full flex items-stretch justify-normal gap-4 overflow-auto no-scroll-bar'>
        {recipes &&
          recipes.results.map((item: RecipeCardInterface) => {
            return <RecipeCard1 recipe={item} key={item.id} />;
          })}
      </div>
    </div>
  );
}
