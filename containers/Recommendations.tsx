import { RecipeCard1 } from '@/components';
import { RecipeCardInterface } from '@/utils/Interfaces';

interface recipeProps {
  recipes: {
    results: RecipeCardInterface[];
  };
}

export default function Recommendations({ recipes }: recipeProps) {
  return (
    recipes && (
      <div className='w-full space-y-5'>
        <h1 className='text-3xl font-bold'>Recommended for you</h1>
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
}
