import {lazy, Suspense} from "react";

export const CartPageAsync = lazy(() => import('./CartPage.tsx'));


export const CartPageLazy = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CartPageAsync />
        </Suspense>
    )
}