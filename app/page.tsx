import { unstable_cache } from 'next/cache';
import { fetchFeeds, fetchRecipesList } from '@/utils/api/fetchRecipe';
import { Feeds, Recommendations } from '@/containers';
import { FeedDataInterface, RecipeCardInterface } from '@/utils/Interfaces';
import { BasedOnPref } from '@/components';

const getRecommendedRecipes = unstable_cache(
  async () => {
    return await fetchRecipesList({ size: 10 });
  },
  ['recommendedRecipes'],
  { revalidate: 3600, tags: ['recipes'] }
);

const getFeeds = unstable_cache(
  async () => {
    const data = await fetchFeeds({ size: 5 });

    const filteredData = {
      results: data.results.map((result: FeedDataInterface) => ({
        type: result.type,
        name: result.name || '',
        item: result.item || null,
        min_items: result.min_items || 0,
        category: result.category || '',
        items: result.items
          ? result.items.map((item: RecipeCardInterface) => ({
              id: item.id,
              name: item.name,
              thumbnail_url: item.thumbnail_url || '',
              num_servings: item.num_servings || 0,
              cook_time_minutes: item.cook_time_minutes || 0,
              tags: item.tags
                ? item.tags.slice(0, 5).map((tag) => ({
                    display_name: tag.display_name,
                  }))
                : [],
              user_ratings: item.user_ratings
                ? {
                    score: item.user_ratings.score || 0,
                  }
                : null,
            }))
          : [],
      })),
    };

    const dataSize = new TextEncoder().encode(JSON.stringify(filteredData)).length;

    if (dataSize > 2 * 1024 * 1024) {
      console.log('Data too large to cache, skipping cache');
      return filteredData;
    }

    console.log('Caching filtered data');
    return filteredData;
  },
  ['feeds'],
  { revalidate: 3600, tags: ['feeds'] }
);

export default async function Home() {
  const [recommendedRecipesData, feedsData] = await Promise.all([getRecommendedRecipes(), getFeeds()]);

  return (
    <div className='w-full space-y-10'>
      <Recommendations recipes={recommendedRecipesData} />
      <BasedOnPref />
      <Feeds feeds={feedsData} />
      <h1>Hello</h1>
    </div>
  );
}
