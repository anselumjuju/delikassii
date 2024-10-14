import { unstable_cache } from 'next/cache';
import { fetchFeeds, fetchRecipesList } from '@/utils/api/fetchRecipe';
import { Feeds, Recommendations } from '@/containers';
import { FeedDataInterface, RecipeCardInterface } from '@/utils/Interfaces';

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
              description: item.description,
              thumbnail_url: item.thumbnail_url || '',
              thumbnail_urls: item.thumbnail_urls || [],
              thumbnail_alt_text: item.thumbnail_alt_text || '',
              num_servings: item.num_servings || 0,
              cook_time_minutes: item.cook_time_minutes || 0,
              nutrition: item.nutrition
                ? {
                    calories: item.nutrition.calories || 0,
                    carbohydrates: item.nutrition.carbohydrates || 0,
                    protein: item.nutrition.protein || 0,
                  }
                : null,
              tags: item.tags
                ? item.tags.map((tag) => ({
                    id: tag.id,
                    name: tag.name,
                    display_name: tag.display_name,
                    parent_tag_name: tag.parent_tag_name || '',
                    root_tag_name: tag.root_tag_name || '',
                    type: tag.type,
                  }))
                : [],
              user_ratings: item.user_ratings
                ? {
                    count_positive: item.user_ratings.count_positive || 0,
                    count_negative: item.user_ratings.count_negative || 0,
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
    recommendedRecipesData &&
    feedsData && (
      <div className='w-full space-y-10'>
        <Recommendations recipes={recommendedRecipesData} />
        <Feeds feeds={feedsData} />
      </div>
    )
  );
}
