import { notFound } from 'next/navigation';
import { Description, Ingredients, Instructions, Nutritions, TabsComponent, VideoPlayer } from './components';
import { unstable_cache } from 'next/cache';
import { fetchRecipeInfo } from '@/utils/api/fetchRecipe';
import { RecipeInfoInterface } from '@/utils/Interfaces';

const getRecipeInfo = unstable_cache(
  async (recipeId: number) => {
    const data = await fetchRecipeInfo({ id: recipeId });
    const dataSize = new TextEncoder().encode(JSON.stringify(data)).length;

    if (dataSize > 2 * 1024 * 1024) {
      console.log('Data too large to cache, skipping cache');
      return data;
    }

    console.log('Caching data');
    return data;
  },
  [`recipe`],
  { revalidate: 3600, tags: [`recipe`] }
);

export default async function RecipePage({ params }: { params: { id: string } }) {
  const recipeId = Number(params.id);

  if (isNaN(recipeId)) {
    console.log('Triggering NotFound');
    notFound();
  }
  const formatDate = (date: number) => {
    const data = new Date(date * 1000);
    const month = data.toLocaleString('default', { month: 'long' });
    const year = data.getFullYear();
    return `${month} ${year}`;
  };

  const data: RecipeInfoInterface = await getRecipeInfo(recipeId);

  return (
    data && (
      <div className='w-full space-y-5 pt-2 md:pt-5'>
        <VideoPlayer thumbnail_url={data.thumbnail_url} thumbnail_alt_text={data.thumbnail_alt_text} video_url={data.video_url} />

        <div className='space-y-1'>
          <h1 className='text-2xl md:text-4xl font-semibold'>{data.name}</h1>
          <p className=' text-sm font-medium text-primary-500'>{formatDate(data.created_at)}</p>
        </div>

        <div className='flex items-stretch justify-between gap-x-10 xl:gap-x-16'>
          <div className='flex-1 space-y-5'>
            <Nutritions
              nutrition={data.nutrition}
              num_servings={data.num_servings}
              cook_time_minutes={data.cook_time_minutes}
              user_ratings={data.user_ratings}
            />
            <Description description={data.description} />
            <div className='lg:hidden'>
              <TabsComponent sections={data.sections} instructions={data.instructions} />
            </div>
            <div className='hidden lg:block'>
              <Instructions instructions={data.instructions} />
            </div>
          </div>

          <div className='w-[30%] 2xl:w-[25%] p-6 hidden lg:block bg-accent-500 rounded-lg'>
            <Ingredients ingredients={data.sections} />
          </div>
        </div>
      </div>
    )
  );
}
