import ProductCard from "../ProductCard/ProductCard.tsx";
import ContentControls from "../ContentControls/ContentControls.tsx";
import cls from './Products.module.css'
import {useAddProductMutation, useGetProductsQuery} from "../../store/products/productsApi.ts";
import {useEffect, useState} from "react";
import {ProductProps} from "../../consts/consts.ts";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {RootState} from "../../store/store.ts";
import {setSearchResults} from "../../store/products/productsSlice.ts";

const Products = () => {
    const {data = [], isLoading} = useGetProductsQuery('products');
    const [newProduct, setNewProduct] = useState<ProductProps>()
    const [addProduct] = useAddProductMutation();
    const dispatch = useAppDispatch();
    const searchResults = useAppSelector((state: RootState) => state.products.searchResults);
    const [isSearchMode, setIsSearchMode] = useState(false);

    const handleAddProduct = async () => {
        if (newProduct) {
            await addProduct({product: newProduct}).unwrap();
            setNewProduct(undefined);
        }
    }

    useEffect(() => {
        setNewProduct({
            name: "Nike Airforce",
            serial_number: "ABC123",
            description: "The iconic Nike Airforce shoes offer style and comfort for everyday wear.",
            price: 120.00,
            id: 12345,
            images: [
                {
                    id: 132,
                    product: 123,
                    image: 'https://images.stockx.com/images/Nike-Air-Force-1-Low-07-Cuban-Link-W.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1632266507&q=60'
                }
            ],
            categories: ["Footwear", "Athletic Shoes"]
        })
    }, []);

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
                <ContentControls onSearch={handleSearch}/>
                <div className={cls.products__wrapper}>
                    {
                        (isSearchMode ? searchResults : data).map((product) => (
                            <ProductCard
                                key={product.id}
                                isLoading={isLoading}
                                product={product}
                            />
                        ))
                    }
                </div>
                <button onClick={handleAddProduct}>add product</button>
            </div>
        </section>
    );
};

export default Products;