import { Outlet } from "react-router-dom";
import Header from "../components/Header/index.tsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/*//Footer*/}
    </div>
  );
};

export default Layout;
