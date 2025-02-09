import axios from "axios"

const API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY
const BASE_URL = 'https://tasty.p.rapidapi.com'
const OPTIONS = {
	headers: {
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
	}
}

export const fetchRecipesList = async ({ tags, query, size }: { tags?: string[] | null, query?: string, size?: number }) => {
	const tagString = tags ? encodeURIComponent(tags.join(',')) : ''
	const url = BASE_URL + `/recipes/list?from=0&size=${size ? size : 20}${tags ? `&tags=${tagString}` : ''}${query ? `&q=${encodeURIComponent(query)}` : ''}`
	try {
		console.log('***Fetching Recipes List from RapidAPI***')
		const response = await axios.get(url, OPTIONS)
		console.log('...Data Fetched...')
		return response.data
	} catch (error) {
		console.log(error)
	}
}


export const fetchPreferredRecipes = async ({ tags, query, size }: { tags?: string[] | null, query?: string, size?: number }) => {
	const tagString = tags ? encodeURIComponent(tags.join(',')) : ''
	const url = BASE_URL + `/recipes/list?from=0&size=${size ? size : 20}${tags ? `&tags=${tagString}` : ''}${query ? `&q=${encodeURIComponent(query)}` : ''}`
	try {
		console.log('***Fetching Preferred Recipes List from RapidAPI***')
		const response = await axios.get(url, {
			headers: {
				"X-RapidAPI-Key": API_KEY,
				"X-RapidAPI-Host": "tasty.p.rapidapi.com"
			}
		})
		console.log('...Data Fetched...')
		return response.data
	} catch (error) {
		console.log(error)
	}
}



export const fetchRecipeSimilarities = async ({ id }: { id: number }) => {
	const url = BASE_URL + `/recipes/list-similarities?recipe_id=${id}`
	try {
		console.log('***Fetching Similar Recipes from RapidAPI***')
		const response = await axios.get(url, OPTIONS)
		console.log('...Data Fetched...')
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const fetchRecipeInfo = async ({ id }: { id: number }) => {
	const url = BASE_URL + `/recipes/get-more-info?id=${id}`
	try {
		console.log('***Fetching Recipe Info from RapidAPI***')
		const response = await axios.get(url, OPTIONS)
		console.log('...Data Fetched...')
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export const fetchFeeds = async ({ size = 5, vegetarian = false }: { size?: number; vegetarian?: boolean }) => {
	const url = BASE_URL + `/feeds/list?size=${size}&timezone=%2B0700&vegetarian=${vegetarian}&from=0`;
	try {
		console.log('***Fetching Feeds from RapidAPI***')
		const response = await axios.get(url, OPTIONS)
		console.log('...Data Fetched...')
		return response.data
	} catch (error) {
		console.log(error)
	}
};

export const fetchTips = async ({ size = 10, id }: { size?: number; id: number }) => {
	const url = BASE_URL + `/tips/list?from=0&size=${size}&id=${id}`
	try {
		console.log('***Fetching Tips from RapidAPI***')
		const response = await axios.get(url, OPTIONS)
		console.log('...Data Fetched...')
		return response.data
	} catch (error) {
		console.log(error)
	}
}