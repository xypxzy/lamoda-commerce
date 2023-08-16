import ProductCard from "../ProductCard/ProductCard.tsx";
import cls from './Products.module.css'
const Products = () => {
    return (
        <section className={cls.products}>
            <div className={cls.productsContainer}>
                <h1 className={cls.productsTitle}>Каталог</h1>
                <div className={cls.productsWrapper}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
};

export default Products;