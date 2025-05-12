import CardSkeleton from "./CardSkeleton"

function NewsSkeleton() {

    return (

        <div className="p-8 flex gap-8 flex-wrap justify-around">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>

    )
}

export default NewsSkeleton