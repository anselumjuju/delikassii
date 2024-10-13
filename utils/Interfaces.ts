export interface RecipeCardInterface {
	id: number;
	name: string;
	description: string;
	thumbnail_url?: string;
	thumbnail_urls?: string[],
	thumbnail_alt_text?: string;
	num_servings?: number;
	cook_time_minutes?: number;
	nutrition?: {
		calories: number;
		carbohydrates: number;
		protein: number;
	};
	tags?: {
		id: number;
		name: string;
		display_name: string;
		parent_tag_name?: string;
		root_tag_name?: string;
		type: string;
	}[];
	user_ratings?: {
		count_positive: number;
		count_negative: number;
		score: number;
	}
}

export interface FeedDataInterface {
	type: string;
	name?: string;
	item?: object;
	min_items?: number;
	category?: string;
	items?:
	| {
		id: number;
		name: string;
		description: string;
	}[];
}

export interface RecipeInfoInterface {
	id: number;
	name: string;
	description: string;
	created_at: number;
	sections: {
		components: {
			extra_comment: string;
			ingredient: {
				name: string;
			};
			measurements: {
				quantity: string;
				unit: {
					abbreviation: string;
					name: string;
				}
			}[];
			raw_text: string;
			position: number;
		}[];
		name: string;
		position: number;
	}[];
	instructions: {
		display_text: string;
		position: number;
	}[];
	num_servings: number;
	nutrition: {
		calories: number;
		carbohydrates: number;
		protein: number;
		fat: number;
		sugar: number;
	};
	cook_time_minutes: number;
	prep_time_minutes: number;
	country: string;
	video_url: string;
	original_video_url: string;
	thumbnail_url: string;
	thumbnail_alt_text: string;
	tags: {
		id: number;
		name: string;
		display_name: string;
		parent_tag_name?: string;
		root_tag_name?: string;
		type: string;
	}[];
	user_ratings: {
		count_positive: number;
		count_negative: number;
		score: number;
	};
}
