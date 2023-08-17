import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import {Counter} from "../components/Counter.tsx";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage.tsx";
import ProductDetails from "../pages/ProductDetailsPage/ProductDetails.tsx";

export default function Root() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path={"counter"} element={<Counter />} />
                <Route path={'catalog'} element={<CatalogPage />} />
                <Route path={'product/:id'} element={<ProductDetails />} />
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}