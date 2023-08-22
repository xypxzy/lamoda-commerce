import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import { Counter } from "../components/Counter.tsx";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage/index.tsx";
import Regist from "../pages/Regist/Regist.tsx";
import Login from "../pages/Login/Login.tsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.tsx";
import ProductDetails from "../pages/ProductDetailsPage/ProductDetails.tsx";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage.tsx";
import CartPage from "../pages/CartPage/CartPage.tsx";
import FavouritePage from "../pages/FavouritePage/FavouritePage.tsx";

export default function Root() {
  const checkAuth = false;
  return (
    <Routes>
      {checkAuth ? (
        <>
          <Route path="registration" element={<Regist />} />
          <Route path="login" element={<Login />} />
        </>
      ) : (
        <>
          <Route path={"/"} element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path={"counter"} element={<Counter />} />
            <Route path={"catalog"} element={<CatalogPage />} />
            <Route path={"product/:id"} element={<ProductDetails />} />
            <Route path={"user"} element={<UserProfilePage />} />
            <Route path={"favourites"} element={<FavouritePage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </>
      )}
    </Routes>
  );
}
