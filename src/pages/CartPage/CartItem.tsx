import React from "react";
import cls from "./CartPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import { addItem, minusItem } from "../../store/cart/slice";

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
  const { totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div>
      <div className={cls.cart__item}>
        <img src={imageUrl} alt="product image" />
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
      <div className={cls.cart__total_intermediateTotal}>
        <div>
          <p>Промежуточный итог</p>
          <p>{Math.ceil(price)}$</p>
        </div>
        <div>
          <p>Перевозки</p>
          <p>Рассчитывается на следующем шаге</p>
        </div>
      </div>
      <div className={cls.cart__total_allTotal}>
        <p>Общий</p>
        <p>{Math.ceil(totalPrice)}$</p>
      </div>
    </div>
  );
};

export default CartItem;
