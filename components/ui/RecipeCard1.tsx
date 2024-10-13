'use client';
import { MdOutlineBookmarkBorder, MdOutlineAvTimer, MdPersonOutline } from 'react-icons/md';
import { RecipeCardInterface } from '@/utils/Interfaces';
import Image from 'next/image';
import Link from 'next/link';

const RecipeCard1 = ({ recipe }: { recipe: RecipeCardInterface }) => {
  return (
    <Link href={`/recipe/${recipe.id}`} className='w-full'>
      <div className=' w-[calc(100vw-1rem)] max-w-[350px] lg:w-[400px] rounded-lg overflow-clip bg-white cursor-pointer'>
        <div className='w-[calc(100vw-1rem)] max-w-[350px] lg:w-[400px] h-[250px] overflow-clip rounded-lg'>
          <Image
            src={recipe.thumbnail_url ? recipe.thumbnail_url : recipe.thumbnail_urls ? recipe.thumbnail_urls[0] : ''}
            alt={recipe.thumbnail_alt_text!}
            width={300}
            height={300}
            className='w-full h-full rounded-t-lg object-cover hover:scale-105 transition-all duration-300 ease-in-out'
          />
        </div>
        <div className='w-full p-3 space-y-3'>
          <p className='w-full font-semibold'>{recipe.name}</p>
          <div className='space-y-2 text-primary-500'>
            <div className='flex items-center justify-start gap-3'>
              <MdOutlineAvTimer className='text-xl text-accent-900' />
              <p>{recipe.cook_time_minutes ? (recipe.cook_time_minutes > 0 ? recipe.cook_time_minutes : 15) : 15}min</p>
            </div>
            <div className='flex items-center justify-start gap-3'>
              <MdPersonOutline className='text-xl text-accent-900' />
              <p>{recipe.num_servings ? (recipe.num_servings > 1 ? `${recipe.num_servings + ' servings'}` : '1 serving') : '1 serving'}</p>
            </div>
            <div className='flex items-center justify-start gap-3'>
              <MdOutlineBookmarkBorder className='text-xl text-accent-900' />
              <p>{recipe.tags ? recipe.tags[0]?.display_name : recipe.name.split(' ')[0]}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard1;
