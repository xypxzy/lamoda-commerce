import ProductCard from "../ProductCard/ProductCard.tsx";
import ContentControls from "../ContentControls/ContentControls.tsx";
import cls from './Products.module.css'

const Products = () => {
    return (
        <section className={cls.products}>
            <div className={cls.products__container}>
                <h1 className={cls.products__title}>Каталог</h1>
                <ContentControls/>
                <div className={cls.products__wrapper}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </section>
    );
};

export default Products;