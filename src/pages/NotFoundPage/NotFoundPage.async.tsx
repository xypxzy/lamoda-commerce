import {lazy, Suspense} from "react";

export const NotFoundAsync = lazy(() => import('./index.tsx'));


export const NotFoundLazy = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NotFoundAsync />
        </Suspense>
)
}