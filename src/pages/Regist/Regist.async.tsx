import {lazy, Suspense} from "react";

export const RegistAsync = lazy(() => import('./Regist.tsx'));


export const RegistLazy = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RegistAsync />
        </Suspense>
    )
}