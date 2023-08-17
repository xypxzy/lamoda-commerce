import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import { Counter } from "../components/Counter.tsx";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage/index.tsx";
import Regist from "../pages/regist/Regist.tsx";
import Login from "../pages/login/Login.tsx";

// export default function Root() {
//   return (
//     <Routes>
//       <Route path={"/"} element={<Layout />}>
//         <Route path="/" element={<HomePage />} />
//         <Route path={"counter"} element={<Counter />} />
//       </Route>
//       <Route path="*" element={<NotFoundPage />}></Route>
//     </Routes>
//   );
// }
// import {Counter} from "../components/Counter.tsx";



export default function Root() {
    const checkAuth = true
    return (
        <Routes>
            {checkAuth ? (
                <>
                    <Route path="/registration" element={<Regist/>} />
                    <Route path="login" element={<Login/>}/>
                </>
            ) : (
                <>
                    <Route path={"/"} element={<Layout />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path={"counter"} element={<Counter />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />}></Route>
                </>
            )}
            
        </Routes>
    )
}
