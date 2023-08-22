import cls from './ProductCard.module.css'
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import {PiBagSimpleFill, PiBagSimpleLight} from 'react-icons/pi'
import {useState} from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.tsx";
import {Link} from "react-router-dom";
import {ProductProps} from "../../consts/consts.ts";
import {useSetFavouritesMutation} from "../../store/users/usersApi.ts";

interface ProductCardProps {
    product: ProductProps;
    isLoading: boolean;
    isError?: string,
}

const ProductCard = (props: ProductCardProps) => {
    const {product, isLoading } = props;

    const [liked, setLiked] = useState(false)
    const [addCart, setAddCart] = useState(false)

    const [setFavourites] = useSetFavouritesMutation();

    const handleAddToFavourites = () => {
        setFavourites(product.id);
        setLiked(!liked)
    };

    //Skeletons
    if(isLoading) {
        return (
            <div className={cls.card}>
                <div className="flex items-center justify-center w-full h-96 bg-gray-300 rounded sm:h-96 dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                </div>
                <div className="w-full mt-4">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[320px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[320px] mb-2.5"></div>
                </div>
            </div>
        )
    }

    return (
        <div className={cls.card}>
            <Link to={'/product/1'} className={cls.card__image_wrap}>
                <img alt="ecommerce" className={cls.card__image} src={product.images.length > 0 ? product.images[0].image : ''}/>
            </Link>
            <div className={cls.card__information}>
                <h3 className={cls.card__category}>{product.categories}</h3>
                <Link to={'/product/1'} className={cls.card__title}>
                    <h2>{product.name}</h2>
                </Link>
                <p className={cls.card__prices}>{product.price} som</p>
            </div>
            <FavoriteButton
                active={liked}
                setActive={handleAddToFavourites}
                DefaultImage={<MdFavoriteBorder/>}
                ActiveImage={<MdFavorite/>}
                className={`${cls.card__button} hover:text-red-500 right-8 top-8`}
                color={"red"}
            />
            <FavoriteButton
                active={addCart}
                setActive={setAddCart}
                DefaultImage={<PiBagSimpleLight/>}
                ActiveImage={<PiBagSimpleFill/>}
                className={`${cls.card__button} hover:text-green-500 right-8 top-[72px]`}
                color={"green"}
            />
        </div>
    );
};

export default ProductCard;