import Image from 'next/image';
import { RecipeCardInterface } from '@/utils/Interfaces';
import { MdTimer } from 'react-icons/md';
import { TiStarFullOutline } from 'react-icons/ti';

const RecipeCard2 = ({ recipe }: { recipe: RecipeCardInterface }) => {
  return (
    <div className='w-[200px] lg:w-[300px]'>
      <div className='min-w-[200px] lg:min-w-[250px] h-[270px] lg:h-[310px] overflow-clip rounded-lg'>
        <Image
          src={recipe.thumbnail_url ? recipe.thumbnail_url : recipe.thumbnail_urls![0]}
          alt={recipe.thumbnail_alt_text ? recipe.thumbnail_alt_text : recipe.name}
          width={300}
          height={300}
          className='w-full h-full object-cover'
          blurDataURL={recipe.thumbnail_url ? recipe.thumbnail_url : recipe.thumbnail_urls![0]}
          placeholder='blur'
        />
      </div>
      <div className='w-full py-3 px-1 space-y-2'>
        <p className='w-full font-semibold truncate'>{recipe.name}</p>
        <div className='flex items-center justify-start gap-3 text-primary-500'>
          <div className='flex items-center justify-start gap-1'>
            <MdTimer className='text-xl text-accent' />
            <p>{recipe.cook_time_minutes ? (recipe.cook_time_minutes > 0 ? recipe.cook_time_minutes : 15) : 15}min</p>
          </div>
          <div className='flex items-center justify-start gap-3'>
            <TiStarFullOutline className='text-xl text-yellow-500' />
            <p>{recipe.user_ratings ? Math.round(recipe.user_ratings.score * 100) / 10 : 8.5}min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard2;
