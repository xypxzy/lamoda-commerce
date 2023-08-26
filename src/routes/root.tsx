import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.tsx";
import {useAppSelector} from "../store/hooks.ts";
import {UserProfilePageLazy} from "../pages/UserProfilePage/UserProfilePage.async.tsx";
import {ProductDetailsLazy} from "../pages/ProductDetailsPage/ProductDetailsPage.async.tsx";
import {FavouritePageLazy} from "../pages/FavouritePage/FavouritePage.async.tsx";
import {CartPageLazy} from "../pages/CartPage/CartPage.async.tsx";
import {RegistLazy} from "../pages/Regist/Regist.async.tsx";
import {LoginLazy} from "../pages/Login/Login.async.tsx";
import {NotFoundLazy} from "../pages/NotFoundPage/NotFoundPage.async.tsx";
import {useTokenExpirationCheck} from "../hooks /useTokenExpirationCheck.ts";


export default function Root() {

    const { isAuth } = useAppSelector((state) => state.auth)

    //  Хук для проверки срока действия токена
    useTokenExpirationCheck();


    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path={"catalog"} element={<CatalogPage/>}/>
                <Route path={"product/:id"} element={<ProductDetailsLazy/>}/>
                <Route path={"user"} element={<UserProfilePageLazy/>}/>
                <Route path={"favourites"} element={<FavouritePageLazy/>}/>
                <Route path={"cart"} element={<CartPageLazy/>}/>

            </Route>
            {isAuth ? (<></>) : (<>
                <Route path="registration" element={<RegistLazy/>}/>
                <Route path="login" element={<LoginLazy/>}/>
            </>)}
            <Route path="*" element={<NotFoundLazy/>} />
        </Routes>
    );
}
