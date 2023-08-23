import {lazy, Suspense} from "react";

const FavouritePageAsync = lazy(() => import('./FavouritePage.tsx'));


export const FavouritePageLazy = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FavouritePageAsync />
        </Suspense>
    )
}