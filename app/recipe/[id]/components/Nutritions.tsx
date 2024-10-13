import { AiOutlineFire } from 'react-icons/ai';
import { PiTimer } from 'react-icons/pi';
import { GoPeople } from 'react-icons/go';
import { TiStarFullOutline } from 'react-icons/ti';

interface NutritionProps {
  nutrition: {
    calories: number;
    carbohydrates: number;
    protein: number;
    fat: number;
    sugar: number;
  };
  num_servings: number;
  cook_time_minutes: number;
  user_ratings: {
    count_positive: number;
    count_negative: number;
    score: number;
  };
}

const Nutritions = ({ nutrition, num_servings, cook_time_minutes, user_ratings }: NutritionProps) => {
  return (
    <div className='w-full flex items-center justify-start gap-x-6 gap-y-3 text-primary-500'>
      <div className='flex items-center justify-start gap-1 lg:gap-3'>
        <PiTimer className='text-xl' />
        <p className='text-sm md:text-base text-nowrap'>{cook_time_minutes ? (cook_time_minutes > 0 ? cook_time_minutes : 15) : 15} mins</p>
      </div>
      <div className='flex items-center justify-start gap-1 lg:gap-3'>
        <GoPeople className='text-xl' />
        <p className='text-sm md:text-base text-nowrap'>{num_servings ? (num_servings > 0 ? num_servings : 4) : 4} servings</p>
      </div>
      <div className='flex items-center justify-start gap-1 lg:gap-3'>
        <AiOutlineFire className='text-xl' />
        <p className='text-sm md:text-base text-nowrap'>{nutrition.calories} cal</p>
      </div>
      <div className='items-center justify-start gap-1 ml-auto hidden'>
        <TiStarFullOutline className='text-2xl text-yellow-500' />
        <p className='text-base font-medium text-primary-900'>{user_ratings ? Math.round(user_ratings.score * 100) / 10 : 8.5}</p>
      </div>
    </div>
  );
};

export default Nutritions;
