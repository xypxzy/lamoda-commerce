import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import {useEffect, useState} from "react";
import cls from './ProductDetails.module.css'
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton.tsx";
import Accordion from "../../components/Accordion/Accordion.tsx";

const ProductDetails = () => {
    const [liked, setLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 5000)
    }, []) // Нужно удалить

    // Skeletons
    if (isLoading) {
        return (
            <div className={cls.productDetails}>
                <div className={cls.productDetails__container}>
                    <div className={cls.productDetails__wrapper}>
                        <div role="status"
                             className="w-full h-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                            <div
                                className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-full sm:h-[550px] dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path
                                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            <div className="w-full">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div
                                    className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div
                                    className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                <div
                                    className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className={cls.productDetails}>
            <div className={cls.productDetails__container}>
                <div className={cls.productDetails__wrapper}>
                    <img alt="product" className={cls.productDetails__image} src="https://dummyimage.com/400x400"/>
                    <div className={cls.productDetails__information}>
                        <h1 className={cls.productDetails__title}>Title</h1>
                        <span className={cls.productDetails__price}>$58.00</span>
                        <h2 className={cls.productDetails__brandName}>BRAND NAME</h2>
                        <p className={cls.productDetails__description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, earum voluptate.
                            Accusantium aliquam dicta dolor, doloribus ducimus excepturi iure magni maxime neque quo
                            recusandae sapiente sint soluta, suscipit totam vitae.
                        </p>
                        <div className={cls.productDetails__addCart}>
                            <div className={cls.productDetails__counter}>
                                <button className="">-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <button className={cls.productDetails__addCartBtn}>
                                Добавить в корзину
                            </button>
                        </div>
                        <Accordion/>
                        <FavoriteButton
                            active={liked}
                            setActive={setLiked}
                            DefaultImage={<MdFavoriteBorder/>}
                            ActiveImage={<MdFavorite/>}
                            className={'lg:top-8 lg:right-16 top-5 right-5'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;