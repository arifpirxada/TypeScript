import axios from "axios";
import type { Article, NewsApiResponse } from "../types";
import type { AxiosResponse } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const getNews = async (): Promise<Article[]> => {
    try {
        const response: AxiosResponse<NewsApiResponse> = await axios.get(`https://newsapi.org/v2/top-headlines?country=US&apiKey=${apiKey}`)

        return response.data.articles;
    } catch (e) {
        console.error("Error occured while getting news: ", e)
        return [];
    }
}

export default getNews;