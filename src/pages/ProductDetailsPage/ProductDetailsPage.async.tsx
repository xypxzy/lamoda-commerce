import {lazy, Suspense} from "react";

export const ProductDetailsAsync = lazy(() => import('./ProductDetails.tsx'));


export const ProductDetailsLazy = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductDetailsAsync />
        </Suspense>
)
}