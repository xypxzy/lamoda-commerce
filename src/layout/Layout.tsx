import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Products from "../components/Products/Products.tsx";

const Layout = () => {
    return (
        <div>
            <Header />
            <Products />
            <Outlet />
            {/*//Footer*/}
        </div>
    );
};

export default Layout;