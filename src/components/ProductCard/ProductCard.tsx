import cls from './ProductCard.module.css'
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import {PiBagSimpleLight, PiBagSimpleFill} from 'react-icons/pi'
import {useState} from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.tsx";

const ProductCard = () => {
    const [liked, setLiked] = useState(false)
    const [addCart, setAddCart] = useState(false)

    return (
        <div className={cls.container}>
            <a className={cls.imageWrapper}>
                <img alt="ecommerce" className={cls.image} src="https://dummyimage.com/420x260"/>
            </a>
            <div className={cls.information}>
                <h3 className={cls.category}>CATEGORY</h3>
                <h2 className={cls.title}>Тоник Babor Thermal Toning Essence </h2>
                <p className={cls.prices}>$16.00</p>
            </div>
            <FavoriteButton
                active={liked}
                setActive={setLiked}
                DefaultImage={<MdFavoriteBorder/>}
                ActiveImage={<MdFavorite/>}
                className={`${cls.button} ${liked ? cls.liked : ''} right-8 top-10`}
            />
            <FavoriteButton
                active={addCart}
                setActive={setAddCart}
                DefaultImage={<PiBagSimpleLight/>}
                ActiveImage={<PiBagSimpleFill/>}
                className={`${cls.button} ${addCart ? cls.addedToCart : ''} right-8 top-24`}
            />
        </div>
    );
};

export default ProductCard;