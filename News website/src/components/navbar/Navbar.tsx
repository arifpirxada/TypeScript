import { useEffect, useState } from "react"

function Navbar({ searchVal, setSearchVal }: {
    searchVal: string,
    setSearchVal: React.Dispatch<React.SetStateAction<string>>
}) {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode((prev) => !prev);
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.theme = isDark ? 'dark' : ''
    }

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setDarkMode(true)
        }
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value);
    }

    return (
        <nav className="bg-white sticky z-50 -top-12 md:relative md:top-0 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold hidden md:block whitespace-nowrap dark:text-white">News</span>
                </a>
                <div className="flex md:order-2 gap-4 items-center">
                    <label className="inline-flex items-center cursor-pointer">
                        <input checked={ darkMode } onChange={ handleDarkMode } type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark</span>
                    </label>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input value={ searchVal } onChange={ handleSearch } type="text" className="block w-full outline-0 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>

                </div>
                <div className="relative block md:hidden mt-4 w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input value={ searchVal } onChange={ handleSearch } type="text" className="block md:hidden w-full outline-0 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>

            </div>
        </nav>
    )
}

export default Navbar