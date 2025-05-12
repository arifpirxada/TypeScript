import { useInfiniteQuery } from "@tanstack/react-query";
import getNews from "../../utils/GetNews"
import type { Article } from "../../types";
import NewsSkeleton from "../skeleton/NewsSkeleton";
import { useEffect, useRef, useState } from "react";
import CardSkeleton from "../skeleton/CardSkeleton";

function NewsList({ searchVal }: { searchVal: string }) {

    const loaderRef = useRef<HTMLDivElement | null>(null);

    const [debouncedSearchVal, setDebouncedSearchVal] = useState(searchVal);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchVal(searchVal);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [searchVal]);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error
    } = useInfiniteQuery({
        queryKey: ['news', debouncedSearchVal],
        queryFn: ({ pageParam = 1 }) => getNews({ pageParam: pageParam, query: debouncedSearchVal }),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.articles.length === 0 || lastPage.status === 'error') return undefined;
            const nextPage = allPages.length + 1;
            return nextPage <= lastPage.totalResults ? nextPage : undefined;
        },
        staleTime: 10 * 1000 * 60, // 10 minutes
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) observer.observe(loaderRef.current);
        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [hasNextPage, fetchNextPage, isFetchingNextPage]);

    if (isLoading) return <NewsSkeleton />
    if (isError) return <div className="p-8">Error loading news: { (error as Error).message }</div>;

    return (
        <div className="p-8 flex flex-wrap justify-start gap-x-32 gap-y-8">

            { data?.pages.map((group, i) => (
                group.articles.map((article: Article) => (
                    article.urlToImage && <div key={ article.url || i } className="max-w-sm h-fit lg:max-w-1/4 m-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a target="blank" href={ article.url }>
                            { article.urlToImage && <img className="rounded-t-lg" src={ article.urlToImage } alt={ article.title } /> }
                        </a>
                        <div className="p-5">
                            { article.title && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ article.title.slice(0, 52) }...</h5> }
                            { article.description && <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ article.description.slice(0, 110) }...</p> }
                            <a href={ article.url } target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))
            )) }
            <div ref={ loaderRef }></div>
            { hasNextPage && isFetchingNextPage && <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton /></> }

        </div>
    )
}

export default NewsList