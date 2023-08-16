import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import { Counter } from "../components/Counter.tsx";
import HomePage from "../pages/HomePage.tsx";

export default function Root() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path={"counter"} element={<Counter />} />
      </Route>
    </Routes>
  );
}
