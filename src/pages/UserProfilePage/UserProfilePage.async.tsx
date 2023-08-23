import {lazy, Suspense} from "react";

export const UserProfilePageAsync = lazy(() => import('./UserProfilePage.tsx'));


export const UserProfilePageLazy = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UserProfilePageAsync />
        </Suspense>
    )
}