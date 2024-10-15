import { RecipeCard1 } from '@/components';
import { fetchRecipesList } from '@/utils/api/fetchRecipe';
import { RecipeCardInterface } from '@/utils/Interfaces';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';

const fetchQuery = unstable_cache(
  async (query: string) => {
    const data = await fetchRecipesList({ query: query, size: 20 });

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
  ['search-results'],
  { revalidate: 3600, tags: ['search-results'] }
);

export async function generateMetadata({ params }: { params: { query: string } }) {
  const searchQuery = params.query;

  return {
    title: `Recipes for ${searchQuery} - Delikassii`,
    description: `Explore a variety of delicious recipes for ${searchQuery}. Find your next favorite dish today!`,
    openGraph: {
      title: `Recipes for ${searchQuery} - Delikassii`,
      description: `Explore a variety of delicious recipes for ${searchQuery}. Find your next favorite dish today!`,
    },
    twitter: {
      title: `Recipes for ${searchQuery} - Delikassii`,
      description: `Explore a variety of delicious recipes for ${searchQuery}. Find your next favorite dish today!`,
    },
  };
}

export default async function SearchPage({ params }: { params: { query: string } }) {
  const data = await fetchQuery(params.query);

  if (data.results.length === 0) notFound();

  return (
    data && (
      <div className='w-full space-y-5'>
        <h1 className='text-3xl font-bold capitalize'>{params.query}</h1>
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
