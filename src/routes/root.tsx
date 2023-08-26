import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.tsx";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {UserProfilePageLazy} from "../pages/UserProfilePage/UserProfilePage.async.tsx";
import {ProductDetailsLazy} from "../pages/ProductDetailsPage/ProductDetailsPage.async.tsx";
import {FavouritePageLazy} from "../pages/FavouritePage/FavouritePage.async.tsx";
import {CartPageLazy} from "../pages/CartPage/CartPage.async.tsx";
import {RegistLazy} from "../pages/Regist/Regist.async.tsx";
import {LoginLazy} from "../pages/Login/Login.async.tsx";
import {NotFoundLazy} from "../pages/NotFoundPage/NotFoundPage.async.tsx";
import { useEffect } from "react";
import { toggle } from "../store/auth/authSlice.ts";


export default function Root() {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector((state) => state.auth)

    if(localStorage.getItem('token')){
        useEffect(() => {
            const currentDate = new Date()
    
            const tokenString = localStorage.getItem('token');
        
            const tokenObject = JSON.parse(tokenString);
    
            const parts = tokenObject.refresh_token.split('.');
            const payloadBase64 = parts[1];
            const decodedPayload = JSON.parse(atob(payloadBase64));
            const expUnixTimestamp = decodedPayload.exp;
            const expirationDate = new Date(expUnixTimestamp * 1000);
    
            const parts1 = tokenObject.accesss_token.split('.');
            const payloadBase641 = parts1[1];
            const decodedPayload1 = JSON.parse(atob(payloadBase641));
            const expUnixTimestamp1 = decodedPayload1.exp;
            const expirationDate1 = new Date(expUnixTimestamp1 * 1000);  
            
            
            if(expirationDate1 === currentDate){
                 dispatch(toggle(false))
            }else if (expirationDate !== currentDate){
                 dispatch(toggle(true))
            }else if(expirationDate === currentDate){
                 dispatch(toggle(true))
            }
    
        }, []);
    }
    





    if (!localStorage.getItem('token')) {
        localStorage.setItem('role', JSON.stringify(false))
    }

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
            {isAuth.isToggled ? (<></>) : (<>
                <Route path="registration" element={<RegistLazy/>}/>
                <Route path="login" element={<LoginLazy/>}/>
            </>)}
            <Route path="*" element={<NotFoundLazy/>} />
        </Routes>
    );
}
