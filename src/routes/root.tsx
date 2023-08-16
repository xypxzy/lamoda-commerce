import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import {Counter} from "../components/Counter.tsx";
import CatalogPage from "../pages/CatalogPage/CatalogPage.tsx";

export default function Root() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/> }>
                <Route path={'counter'}  element={<Counter />} />
                <Route path={'catalog'} element={<CatalogPage />} />
            </Route>
        </Routes>
    )
}