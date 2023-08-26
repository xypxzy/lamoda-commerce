import React from "react";
import SearchProducts from "../SearchProducts/SearchProducts.tsx";
import FilterProducts from "../FilterProducts/FilterProducts.tsx";
import { useEffect } from "react";
import { ProductProps } from "../../consts/consts.ts";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import {
  setProducts,
  setSortedType,
} from "../../store/products/productsSlice.ts";
import { useGetProductsQuery } from "../../store/products/productsApi.ts";

type sortType = "asc" | "desc" | "rel";

interface ContentControlsProps {
  onSearch: (arg: string) => void;
}

const ContentControls = ({ onSearch }: ContentControlsProps) => {
  const { data } = useGetProductsQuery("productsApi");
  const [selectedSort, setSelectedSort] = React.useState<sortType>("rel");

  const products = useAppSelector((state: any) => state.products.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setProducts(data));
  }, [data]);

  const sortedProducts = (sortedType: sortType) => {
    let sortedProducts: ProductProps[] = [];

    if (sortedType === "asc") {
      sortedProducts = [...products].sort((a, b) =>
        Math.floor(a.price - b.price)
      );
    } else if (sortedType === "desc") {
      sortedProducts = [...products].sort((a, b) =>
        Math.floor(b.price - a.price)
      );
    } else if (sortedType === "rel" && data) {
      sortedProducts = [...data];
    }
    dispatch(setSortedType({ name: `${sortedType}` }));
    dispatch(setProducts(sortedProducts));
    setSelectedSort(sortedType);
  };

  return (
    <div className={"py-10 flex justify-center flex-col flex-wrap gap-3"}>
      <div
        className={
          "flex w-full lg:justify-center  items-center md:flex-nowrap flex-wrap"
        }
      >
        <SearchProducts onSearch={onSearch} products={products} />
        <FilterProducts
          contents={[
            { content: "По возрастанию", onClick: () => sortedProducts("asc") },
            {
              content: "По убыванию",
              onClick: () => sortedProducts("desc"),
            },
            { content: "Релевантно", onClick: () => sortedProducts("rel") },
          ]}
          label={
            selectedSort === "asc"
              ? "По возрастанию"
              : selectedSort === "desc"
              ? "По убыванию"
              : "Сортировать"
          }
          className={"md:ml-5"}
        />
      </div>
    </div>
  );
};

export default ContentControls;
