import axios from "axios";
import type { NewsApiResponse } from "../types";
import type { AxiosResponse } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const getNews = async ({ pageParam = 1, query }: { pageParam: number; query: string }): Promise<NewsApiResponse> => {
    try {
        const response: AxiosResponse<NewsApiResponse> = await axios.get(`https://newsapi.org/v2/top-headlines?country=US&pageSize=9&q=${query}&apiKey=${apiKey}&page=${pageParam}`)
        console.log("getting.....")
        return response.data
    } catch (e) {
        console.error("Error occured while getting news: ", e)
        return {
            status: "error",
            totalResults: 0,
            articles: []
        };
    }
}

export default getNews;