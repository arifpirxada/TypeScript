function Jumbotron() {
    return (


        <section className="bg-white relative dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Breaking News, Simplified</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-16 dark:text-gray-200">Browse, search, and explore news from all categories. Get the latest headlines, updates, and in-depth articles, all in one place.</p>

            </div>
            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-gray-950 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>

    )
}

export default Jumbotron