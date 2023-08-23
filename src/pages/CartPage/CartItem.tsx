import React from "react";
import cls from "./CartPage.module.scss";
import {addItem, minusItem} from "../../store/cart/slice";
import {useAppDispatch} from "../../store/hooks.ts";

type CartItemProps = {
    id: number;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({
                                               id,
                                               title,
                                               imageUrl,
                                               price,
                                               count,
                                           }) => {
    const dispatch = useAppDispatch();

    const onClickPlus = () => {
        dispatch(addItem({id, count:1, imageUrl, price, title}));
    };

    const onClickMinus = () => {
        dispatch(minusItem(id));
    };

    return (
        <div>
            <div className={cls.cart__item}>
                <img src={imageUrl} alt="product image"/>
                <h4 className={cls.cart__item_name}>{title}</h4>
                <div className={cls.cart__item_actions}>
                    <button
                        disabled={count === 1}
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

        </div>
    );
};

export default CartItem;
