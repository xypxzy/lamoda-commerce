import Products from "../../components/Products/Products.tsx";
import {Suspense} from "react";

const CatalogPage = () => {
  return (
    <div id="catalog">
        <Suspense fallback={<div>Loading...</div>}>
            <Products />
        </Suspense>
    </div>
  );
};

export default CatalogPage;
