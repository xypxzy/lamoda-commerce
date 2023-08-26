import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import {useEffect, useState} from "react";
import cls from './ProductDetails.module.css'
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton.tsx";
import Accordion from "../../components/Accordion/Accordion.tsx";
import {useGetProductQuery} from "../../store/products/productsApi.ts";
import {useParams} from "react-router-dom";
import {addItem} from "../../store/cart/slice.ts";
import {useAppDispatch} from "../../store/hooks.ts";
import { addFav } from '../../store/favorits/favoritsSlice.ts';
import {ProductProps} from "../../consts/consts.ts";

const ProductDetails = () => {
    const [liked, setLiked] = useState(false);
    const { id } = useParams<string>();
    if(!id) {
        return;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {data: product , isLoading} = useGetProductQuery(id);
    const [count, setCount] = useState<number>(1)
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        if(product) {
            dispatch(addItem({
                id: product.id as number,
                title: product.name as string,
                price: product.price as number,
                imageUrl:  (product.images ? product.images[0].image : '') as string ,
                count: count,
                isSelected: true
            }))
        }
    };
    const handleAddToFav = () => {
        if(product) {
            dispatch(addFav({
                id: product.id as number,
                title: product.name as string,
                price: product.price  as number,
                imageUrl: (product.images ? product.images[0].image : '') as string,
                count: count,
                isSelected: true
            }))
        }
    };

    // Skeletons
    if (isLoading) {
        return (
            <div className={cls.product_details}>
                <div className={cls.product_details__container}>
                    <div className={cls.product_details__wrapper}>
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
        <section className={cls.product_details}>
            <div className={cls.product_details__container}>
                <div className={cls.product_details__wrapper}>
                    <img alt="product" className={cls.product_details__image} src={ (product?.images && product?.images[0]) ? product.images[0].image : ''} />
                    <div className={cls.product_details__information}>
                        <h1 className={cls.product_details__title}>{product?.name}</h1>
                        <span className={cls.product_details__price}>{product?.price} som</span>
                        <h2 className={cls.product_details__brandName}>{product?.categories}</h2>
                        <p className={cls.product_details__description}>
                            {product?.description}
                        </p>
                        <div className={cls.product_details__add_cart}>
                            <div className={cls.product_details__counter}>
                                <button onClick={() => {
                                    if (count > 1) {
                                        setCount(prev => prev - 1)
                                    }
                                }}>
                                    -
                                </button>
                                <span>{count}</span>
                                <button onClick={() => setCount(prev => prev + 1)}>
                                    +
                                </button>
                            </div>
                            <button className={cls.product_details__btn} onClick={handleAddToCart}>
                                Добавить в корзину
                            </button>
                        </div>
                        <Accordion product={product as ProductProps} id={id}/>
                        <FavoriteButton
                            active={liked}
                            setActive={setLiked}
                            DefaultImage={<MdFavoriteBorder/>}
                            ActiveImage={<MdFavorite/>}
                            className={'lg:top-8 lg:right-16 top-5 right-5'}
                            onClick={handleAddToFav}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;