import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import ProductDetails from "../components/ProductDetails/ProductDetails.tsx";

const Layout = () => {
    return (
        <div>
            <Header />
            <ProductDetails />
            <Outlet />
            {/*//Footer*/}
        </div>
    );
};

export default Layout;