import {MdFavorite, MdFavoriteBorder} from 'react-icons/md'
import {useState} from "react";
import cls from './ProductDetails.module.css'
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton.tsx";
import Accordion from "../../components/Accordion/Accordion.tsx";

const ProductDetails = () => {
    const [liked, setLiked] = useState(false);

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
                            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim
                            forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin
                            listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
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
                        <Accordion />
                        <FavoriteButton
                            active={liked}
                            setActive={setLiked}
                            DefaultImage={<MdFavoriteBorder />}
                            ActiveImage={<MdFavorite />}
                            className={'lg:top-8 lg:right-16 top-5 right-5'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;