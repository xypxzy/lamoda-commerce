import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import cls from './FavouritePage.module.css'
import {useGetFavouritesQuery} from "../../store/users/usersApi.ts";
import { useAppSelector } from "../../store/hooks.ts";

import { useNavigate } from "react-router-dom";

const FavouritePage = () => {
    const {data, isLoading} = useGetFavouritesQuery('');
    const navigate = useNavigate()

    const chechAuth = () => {
        navigate('/login')
    }

    const isAuth = useAppSelector((state) => state.auth)

    return (
        <>
        {isAuth.isToggled ? 
            (<>
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
            </>)
             : 
            (<div id="snter-m">
                <button id="button-auth" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={() => chechAuth()}>SingIn</button>
            </div>)}
        </>
    );
};

export default FavouritePage;