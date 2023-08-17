import cls from './ProductCard.module.css'
import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import {PiBagSimpleLight, PiBagSimpleFill} from 'react-icons/pi'
import {useState} from "react";

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
            <div className={cls.quickIcons}>
                <div className={cls.button}>
                    <div
                        onClick={() => setLiked(!liked)}
                        className={`${cls.favouriteBtn} ${liked ? `${cls.liked}` : ''}`}>
                        {liked ?
                            <MdFavorite/>
                            :
                            <MdFavoriteBorder />
                        }
                    </div>
                </div>
                <div className={cls.button}>
                    <div
                        onClick={() => setAddCart(!addCart)}
                        className={`${cls.favouriteBtn} ${addCart ? `${cls.addedToCart}` : ''}`}
                    >
                        {addCart ?
                            <PiBagSimpleFill/>
                            :
                            <PiBagSimpleLight/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;