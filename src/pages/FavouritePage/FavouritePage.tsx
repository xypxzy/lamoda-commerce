import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import cls from './FavouritePage.module.css'
import {useGetFavouritesQuery} from "../../store/users/usersApi.ts";

const FavouritePage = () => {
    const {data, isLoading} = useGetFavouritesQuery('');

    console.log(data)
    return (
        <section className={cls.favourite_page}>
            <div className={cls.favourite_page__container}>
                <h1 className={cls.favourite_page__container}>Избранное</h1>
                <div className={cls.favourite_page__wrapper}>
                    {
                        data?.map((product) => (
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

export default FavouritePage;