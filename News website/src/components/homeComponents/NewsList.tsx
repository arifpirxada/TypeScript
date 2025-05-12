import { useQuery } from "@tanstack/react-query";
import getNews from "../../utils/GetNews"
import type { Article } from "../../types";
import NewsSkeleton from "../skeleton/NewsSkeleton";

function NewsList() {

    const {
        data: articles,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['news'],
        queryFn: getNews,
        staleTime: 5 * 60 * 1000
    })

    if (isLoading) return <NewsSkeleton />
    if (isError) return <div className="p-8">Error loading news: {(error as Error).message}</div>;    

    return (
        <div className="p-8 flex flex-wrap justify-around">

            { articles?.map((article: Article, i) => (
                <div key={ article.url || i } className="max-w-sm lg:max-w-1/4 m-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a target="blank" href={ article.url }>
                        {article.urlToImage && <img className="rounded-t-lg" src={ article.urlToImage } alt={article.title} />}
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ article.title.slice(0, 52) }...</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ article.description.slice(0, 110) }...</p>
                        <a href={ article.url } target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            )) }


        </div>
    )
}

export default NewsList