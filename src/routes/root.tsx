import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import {Counter} from "../components/Counter.tsx";
import CartPage from "../pages/CartPage/CartPage.tsx";

export default function Root() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'counter'} element={<Counter/>}/>
            </Route>
            <Route path={'cart'} element={<CartPage/>}/>
        </Routes>
    )
}