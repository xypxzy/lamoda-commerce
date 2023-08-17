import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import {Counter} from "../components/Counter.tsx";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage.tsx";

export default function Root() {
    return (
        <Routes>
            <Route path={"/"} element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path={"counter"} element={<Counter />} />
                <Route path={'catalog'} element={<CatalogPage />} />
                <Route path={'products/:id'} element={<Product />} />
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}