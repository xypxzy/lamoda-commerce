import {lazy, Suspense} from "react";

export const LoginAsync = lazy(() => import('./Login.tsx'));


export const LoginLazy = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginAsync />
        </Suspense>
    )
}