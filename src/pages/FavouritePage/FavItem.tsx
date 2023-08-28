import { FC } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addFav, removeFav, minusFav } from "../../store/favorits/favoritsSlice";
import { addItem } from "../../store/cart/slice";
import cls from '../CartPage/CartPage.module.scss'
import { BsFillBasketFill } from "react-icons/bs";


type FavItemProps = {
    id: number;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
};

const FavItem: FC<FavItemProps> = ({
    id,
    title,
    imageUrl,
    price,
    count,
}) => {

    const dispatch = useAppDispatch();


    const onClickPlus = () => {
        dispatch(addFav({id, count: 1, imageUrl, price, title}));
    };

    const onClickMinus = () => {
        if (count === 1) {
            dispatch(removeFav(id))
        }
        dispatch(minusFav(id));
    };
    const addToCardF = () => {
        dispatch(removeFav(id))
        dispatch(addItem({id, count, imageUrl, price, title}));
    }
    const remover = () => {
        dispatch(removeFav(id))
    }
    return(
        <>
        <div>
            <div className={'flex flex-col justify-center items-end'} id={cls.dffff}>
                <div className={cls.cart__item}>
                    <img src={imageUrl} alt="product image" className={cls.df_gg}/>
                    <div><p className={cls.cart__item_name}>{title}</p></div>
                    <div className={cls.cart__item_actions}>
                        <button
                            onClick={onClickMinus}
                            className={cls.cart__item_btn}
                        >
                            -
                        </button>
                        <p>{count}</p>
                        <button onClick={onClickPlus} className={cls.cart__item_btn}>
                            +
                        </button>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300
                        font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        onClick={remover}
                    >
                        Удалить
                    </button>
                    <button className={cls.xs_df} onClick={() => addToCardF()}><BsFillBasketFill size={27}/></button>

                </div>
            </div>

        </div>
        </>
    )
}

export default FavItem