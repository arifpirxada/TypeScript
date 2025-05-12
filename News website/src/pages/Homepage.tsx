import { Suspense, lazy, useState } from "react"
import Jumbotron from "../components/homeComponents/Jumbotron"
import Navbar from "../components/navbar/Navbar"
import NewsSkeleton from "../components/skeleton/NewsSkeleton";

const NewsList = lazy(() => import("../components/homeComponents/NewsList"));

function Homepage() {
    const [searchVal, setSearchVal] = useState("");

    return (
        <>
            <Navbar setSearchVal={setSearchVal} searchVal={searchVal} />
            <Jumbotron />
            <Suspense fallback={<NewsSkeleton />}>
                <NewsList searchVal={searchVal} />
            </Suspense>
        </>
    )
}

export default Homepage