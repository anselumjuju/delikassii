import Image from 'next/image';
import { RecipeCardInterface } from '@/utils/Interfaces';
import { MdTimer } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';
import Link from 'next/link';

const RecipeCard2 = ({ recipe }: { recipe: RecipeCardInterface }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className='w-[220px] lg:w-[270px] cursor-pointer bg-white rounded-lg'>
        <div className='w-[220px] lg:w-[270px] h-[270px] lg:h-[310px] overflow-clip rounded-t-lg'>
          <Image
            src={recipe.thumbnail_url ? recipe.thumbnail_url : recipe.thumbnail_urls ? recipe.thumbnail_urls[0] : `https://placehold.co/400`}
            alt={recipe.thumbnail_alt_text ? recipe.thumbnail_alt_text : recipe.name}
            width={300}
            height={300}
            className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out'
          />
        </div>
        <div className='w-full p-2 space-y-2'>
          <p className='w-full font-semibold truncate'>{recipe.name}</p>
          <div className='flex items-center justify-start gap-4 text-primary-500'>
            <div className='flex items-center justify-start gap-1'>
              <div className='text-xl text-accent-900'>
                <MdTimer />
              </div>
              <p>{recipe.cook_time_minutes ? (recipe.cook_time_minutes > 0 ? recipe.cook_time_minutes : 15) : 15}min</p>
            </div>
            <div className='flex items-center justify-start gap-1'>
              <div className='text-xl text-yellow-500'>
                <TiStarFullOutline />
              </div>
              <p>{recipe.user_ratings ? Math.round(recipe.user_ratings.score * 100) / 10 : 8.5}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard2;
