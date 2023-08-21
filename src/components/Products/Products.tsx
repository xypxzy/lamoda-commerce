import ProductCard from "../ProductCard/ProductCard.tsx";
import ContentControls from "../ContentControls/ContentControls.tsx";
import cls from './Products.module.css'
import {useGetProductsQuery} from "../../store/products/productsApi.ts";


const mockData = {
    name: 'Tonik',
    serial_number: 'dsadasfkanskdm23231',
    description: 'React Query облегчает работу с асинхронными данными, кэшированием и повторными запросами. Вам остается адаптировать этот шаблон под вашу конкретную задачу и структуру данных.',
    price: 24,
    categories: 'cosmetics',
}

const Products = () => {
    const {data = [], isLoading} = useGetProductsQuery('product');

    console.log(data)
    return (
        <section className={cls.products}>
            <div className={cls.products__container}>
                <h1 className={cls.products__title}>Каталог</h1>
                <ContentControls/>
                <div className={cls.products__wrapper}>
                    <ProductCard
                        isLoading={isLoading}
                        product={mockData}
                    />
                </div>
            </div>
        </section>
    );
};

export default Products;