import axios from "axios"

const BASE_URL = 'https://tasty.p.rapidapi.com'
const OPTIONS = {
	headers: {
		"X-RapidAPI-Key": process.env.RAPID_API_KEY,
		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
	}
}

export const fetchRecipesList = async ({ tags, query, size }: { tags?: string[] | null, query?: string, size?: number }) => {
	const url = BASE_URL + `/recipes/list?from=0&size=${size ? size : 20}${tags ? `&tags=${tags.join(',')}` : ''}${query ? `&q=${encodeURIComponent(query)}` : ''}`
	try {
		console.log('***Fetching Recipes List from RapidAPI***')
		const response = await axios.get(url, OPTIONS)
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
	const offset = new Date().getTimezoneOffset();
	const timeZone = `${offset <= 0 ? '+' : '-'}${String(Math.abs(Math.floor(offset / 60))).padStart(2, '0')}${String(Math.abs(offset % 60)).padStart(2, '0')}`;
	const url = BASE_URL + `/feeds/list?size=${size}&timezone=${encodeURIComponent(timeZone)}&vegetarian=${vegetarian}&from=0`;
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