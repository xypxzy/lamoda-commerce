import React from "react";
import cls from "./CartPage.module.css";
import { addItem, minusItem, removeItem } from "../../store/cart/slice";
import { useAppDispatch } from "../../store/hooks.ts";

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
    dispatch(addItem({ id, count: 1, imageUrl, price, title }));
  };

  const onClickMinus = () => {
    if (count === 1) {
      dispatch(removeItem(id));
    }
    dispatch(minusItem(id));
  };

  return (
    <>
      <div className={"flex flex-col justify-center items-end"}>
        <div className={cls.cart__item}>
          <img src={imageUrl} alt="product image" />
          <h4 className={cls.cart__item_name}>{title}</h4>
          <div className={cls.cart__item_actions}>
            <button onClick={onClickMinus} className={cls.cart__item_btn}>
              -
            </button>
            <p>{count}</p>
            <button onClick={onClickPlus} className={cls.cart__item_btn}>
              +
            </button>
          </div>
        </div>
        <div>
          <button
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300
                        font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => dispatch(removeItem(id))}
          >
            Удалить с корзины
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
