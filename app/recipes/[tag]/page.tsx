import { RecipeCard1 } from '@/components';
import { fetchRecipesList } from '@/utils/api/fetchRecipe';
import { RecipeCardInterface } from '@/utils/Interfaces';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';

const fetchTag = unstable_cache(
  async (tag: string) => {
    const data = await fetchRecipesList({ tags: [tag], size: 20 });

    const filteredData = {
      results: data.results.map((result: RecipeCardInterface) => ({
        id: result.id,
        name: result.name,
        thumbnail_url: result.thumbnail_url || '',
        num_servings: result.num_servings || 0,
        cook_time_minutes: result.cook_time_minutes || 0,
        tags: result.tags
          ? result.tags.slice(0, 5).map((tag) => ({
              display_name: tag.display_name,
            }))
          : [],
        user_ratings: result.user_ratings
          ? {
              score: result.user_ratings.score || 0,
            }
          : null,
      })),
    };

    const dataSize = new TextEncoder().encode(JSON.stringify(filteredData)).length;

    if (dataSize > 2 * 1024 * 1024) {
      console.log('Data too large to cache, skipping cache');
      return filteredData;
    }

    console.log('Caching data');
    return filteredData;
  },
  ['tag-results'],
  { revalidate: 3600, tags: ['tag-results'] }
);

export async function generateMetadata({ params }: { params: { tag: string } }) {
  const searchTag = params.tag;

  return {
    title: `Recipes for ${searchTag} - Delikassii`,
    description: `Explore a variety of delicious recipes for ${searchTag}. Find your next favorite dish today!`,
    openGraph: {
      url: 'https://Delikassii.vercel.app/',
      type: 'website',
      title: `Recipes for ${searchTag} - Delikassii`,
      description: `Explore a variety of delicious recipes for ${searchTag}. Find your next favorite dish today!`,
      siteName: 'Delikassii',
      images: [
        {
          url: 'https://Delikassii.vercel.app/og.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: 'https://Delikassii.vercel.app/',
      title: `Recipes for ${searchTag} - Delikassii`,
      description: `Explore a variety of delicious recipes for ${searchTag}. Find your next favorite dish today!`,
      images: [
        {
          url: 'https://Delikassii.vercel.app/og.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { tag: string } }) {
  const data = await fetchTag(params.tag);

  if (data.results.length === 0) notFound();

  return (
    data && (
      <div className='w-full space-y-5'>
        <h1 className='text-3xl font-bold capitalize'>{params.tag}</h1>
        <div className='w-full flex items-center justify-start flex-wrap gap-3 gap-y-6'>
          {data.results.map((result: RecipeCardInterface) => (
            <div key={result.id} className='w-full min-w-[350px] max-w-[450px] md:w-[400px] mx-auto'>
              <RecipeCard1 recipe={result} />
            </div>
          ))}
        </div>
      </div>
    )
  );
}
