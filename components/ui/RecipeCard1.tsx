'use client';
import { MdOutlineBookmarkBorder, MdOutlineAvTimer, MdPersonOutline } from 'react-icons/md';
import { RecipeCardInterface } from '@/utils/Interfaces';
import Image from 'next/image';

const RecipeCard1 = ({ recipe }: { recipe: RecipeCardInterface }) => {
  return (
    <div className='min-w-[350px] rounded-lg overflow-clip bg-white'>
      <Image
        src={recipe.thumbnail_url ? recipe.thumbnail_url : recipe.thumbnail_urls![0]}
        alt={recipe.thumbnail_alt_text!}
        width={300}
        height={300}
        className='w-full h-[200px] rounded-t-lg object-cover'
      />
      <div className='w-full p-3 space-y-3'>
        <p className='w-full font-semibold'>{recipe.name}</p>
        <div className='space-y-2 text-primary-500'>
          <div className='flex items-center justify-start gap-3'>
            {recipe.cook_time_minutes && (
              <>
                <MdOutlineAvTimer className='text-xl text-accent' />
                <p>{recipe.cook_time_minutes > 0 ? recipe.cook_time_minutes : 15}min</p>
              </>
            )}
          </div>
          <div className='flex items-center justify-start gap-3'>
            {recipe.num_servings && (
              <>
                <MdPersonOutline className='text-xl text-accent' />
                <p>{recipe.num_servings > 0 ? recipe.num_servings : 1} servings</p>
              </>
            )}
          </div>
          <div className='flex items-center justify-start gap-3'>
            {recipe.tags && (
              <>
                <MdOutlineBookmarkBorder className='text-xl text-accent' />
                <p>{recipe.tags[0].display_name}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard1;
