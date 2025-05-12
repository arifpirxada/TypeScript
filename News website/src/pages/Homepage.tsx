import { Suspense, lazy } from "react"
import Jumbotron from "../components/homeComponents/Jumbotron"
import Navbar from "../components/navbar/Navbar"
import NewsSkeleton from "../components/skeleton/NewsSkeleton";

const NewsList = lazy(() => import("../components/homeComponents/NewsList"));

function Homepage() {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Suspense fallback={<NewsSkeleton />}>
                <NewsList />
            </Suspense>
        </>
    )
}

export default Homepage