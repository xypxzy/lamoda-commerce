import SearchProducts from "../SearchProducts/SearchProducts.tsx";
import FilterProducts from "../FilterProducts/FilterProducts.tsx";
import {useEffect} from "react";
import {ProductProps} from "../../consts/consts.ts";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {setProducts} from "../../store/products/productsSlice.ts";
import {useGetProductsQuery} from "../../store/products/productsApi.ts";

type sortType = 'asc' | 'desc' | 'rel'

interface ContentControlsProps {
    onSearch : (arg: string) => void
}

const ContentControls = ({onSearch} : ContentControlsProps) => {
    const {data} = useGetProductsQuery('productsApi');
    const products = useAppSelector(state => state.products.items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (data)
            dispatch(setProducts(data))
    }, [data]);

    const sortedProducts = (sortedType: sortType) => {
        let sortedProducts: ProductProps[] = [];

        if (sortedType === 'asc') {
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
        } else if (sortedType === 'desc') {
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
        } else if (sortedType === 'rel' && data) {
            sortedProducts = [...products];
        }
        setProducts(sortedProducts);
    }

    return (
        <div className={"py-10 flex justify-center flex-col flex-wrap gap-3"}>
            <div className={"flex w-full lg:justify-center  items-center md:flex-nowrap flex-wrap"}>
                <SearchProducts onSearch={onSearch} products={products}/>
                <FilterProducts
                    contents={[
                        {content: 'По убыванию', onClick: () => sortedProducts('asc')},
                        {content: 'По возрастанию', onClick: () => sortedProducts('desc')},
                        {content: 'Релевантно', onClick: () => sortedProducts('rel')},
                    ]}
                    label={'Сортировать'}
                    className={'md:ml-5'}
                />
            </div>
        </div>
    );
};

export default ContentControls;