import {Route, Routes} from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import {Counter} from "../components/Counter.tsx";
import Regist from "../pages/regist/Regist.tsx";
import Login from "../pages/login/Login.tsx";


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
                    <Route path={'/'} element={<Layout/> }>
                        <Route path={'counter'}  element={<Counter />} />
                    </Route>
                </>
            )}
            
        </Routes>
    )
}