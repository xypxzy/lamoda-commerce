import cls from './FavouritePage.module.css'
import {useAppSelector} from "../../store/hooks.ts";
import {useNavigate} from "react-router-dom";
import {selectFav} from '../../store/favorits/favSelector.ts';
import {useSelector} from 'react-redux/es/hooks/useSelector';
import FavCardEmpty from '../../components/FavCartEmpty.tsx';
import FavItem from './FavItem.tsx';
import { FC, useEffect } from 'react';
// import {useEffect, useState} from "react";

type FavProps = {
    id: number;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
};


const FavouritePage = () => {
    // const [favData, setFavData] = useState<FavProps[]>([])
    const { isAuth } = useAppSelector((state) => state.auth)
    const {favItems} = useSelector(selectFav)

    const navigate = useNavigate()
    const checkAuth = () => {
        navigate('/login')
    }

    if (!favItems.length) {
        return <FavCardEmpty/>
    }

    return (
        <>
        {isAuth ?

            (<>
                <section className={cls.favourite_page}>
                    <div className={cls.favourite_page__container}>
                        <h1 className={cls.favourite_page__container} id={cls.no_p}>Избранное</h1>
                        <div className={cls.favourite_page__wrapper}>
                        {
                            favItems.map(item => (

                                    <div key={item.id} id={cls.nm_j}>
                                        <FavItem
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            count={item.count}
                                            imageUrl={item.imageUrl}
                                        />
                                        <div className={cls.cart__total_intermediateTotal}>
                                            <div>
                                                <p>Промежуточный итог:</p>
                                                <p>{Math.ceil(item.price * item.count)} som</p>
                                            </div>
                                            <div className={cls.df_mm}>
                                                <p>Перевозки</p>
                                                <p>Рассчитывается на следующем шаге</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            )
                        }
                        </div>
                    </div>
                </section>
            </>)
             : 
            (<div id="snter-m" className={"my-40"}>
                <button id="button-auth" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={() => checkAuth()}>SingIn</button>
            </div>)}
        </>
    );
};

export default FavouritePage;