import Image from 'next/image';
import { RecipeCardInterface } from '@/utils/Interfaces';
import { MdTimer } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';
import Link from 'next/link';

const RecipeCard3 = ({ recipe }: { recipe: RecipeCardInterface }) => {
  return (
    <Link href={`/recipe/${recipe.id}`}>
      <div className='min-w-[220px] lg:min-w-[270px] h-[270px] lg:h-[310px] cursor-pointer relative overflow-clip rounded-lg flex items-end justify-start'>
        <div className='w-full h-full absolute -z-10'>
          <div className='w-full h-full absolute bg-gradient-to-t from-black/80 from-10% to-black/10' />
          <Image
            src={recipe.thumbnail_url ? recipe.thumbnail_url : recipe.thumbnail_urls ? recipe.thumbnail_urls[0] : ''}
            alt={recipe.thumbnail_alt_text ? recipe.thumbnail_alt_text : recipe.name}
            width={300}
            height={300}
            className='w-full h-full object-cover group-hover/content:scale-105 transition-all duration-300 ease-in-out'
          />
        </div>
        <div className='w-full py-3 px-1 space-y-2 text-white group/content'>
          <p className='w-full font-semibold truncate'>{recipe.name}</p>
          <div className='flex items-center justify-start gap-4 text-secondary-900'>
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

export default RecipeCard3;
