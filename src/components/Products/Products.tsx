import ProductCard from "../ProductCard/ProductCard.tsx";
import ContentControls from "../ContentControls/ContentControls.tsx";
import cls from "./Products.module.css";
import { useGetProductsQuery } from "../../store/products/productsApi.ts";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { RootState } from "../../store/store.ts";
import { setSearchResults } from "../../store/products/productsSlice.ts";

const Products = () => {
  const { data = [], isLoading } = useGetProductsQuery("products");
  const dispatch = useAppDispatch();
  const searchResults = useAppSelector(
    (state: RootState) => state.products.searchResults
  );
  const products = useAppSelector((state: any) => state.products.items);

  const [isSearchMode, setIsSearchMode] = useState(false);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setIsSearchMode(false);
    } else {
      setIsSearchMode(true);
      dispatch(setSearchResults([]));
    }
  };

  return (
    <section className={cls.products}>
      <div className={cls.products__container}>
        <h1 className={cls.products__title}>Каталог</h1>
        <ContentControls onSearch={handleSearch} />
        <div className={cls.products__wrapper}>
          {(isSearchMode ? searchResults : products).map((product: any) => (
            <ProductCard
              key={product.id}
              isLoading={isLoading}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
