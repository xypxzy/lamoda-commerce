import ProductCard from "../ProductCard/ProductCard.tsx";
import ContentControls from "../ContentControls/ContentControls.tsx";
import cls from './Products.module.css'
import {useGetProductsQuery} from "../../store/products/productsApi.ts";

const Products = () => {
    const {data = [], isLoading} = useGetProductsQuery('products');

    return (
        <section className={cls.products}>
            <div className={cls.products__container}>
                <h1 className={cls.products__title}>Каталог</h1>
                <ContentControls/>
                <div className={cls.products__wrapper}>
                    {
                        data.map((product) => (
                            <ProductCard
                                key={product.id}
                                isLoading={isLoading}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;