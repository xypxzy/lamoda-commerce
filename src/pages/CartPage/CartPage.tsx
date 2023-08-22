import cls from "./CartPage.module.scss";
import { FC } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import CartEmpty from "../../components/CartEmpty";

type TCartInputProps = {
  type: string;
  hint: string;
};

const CartInput: FC<TCartInputProps> = ({ type, hint }) => {
  return <input className={cls.cart__input} type={type} placeholder={hint} />;
};

const CartPage = () => {
  const { cartItems } = useSelector(selectCart);

  if (!cartItems) {
    return (
      <>
        <CartEmpty />
      </>
    );
  }

  return (
    <div className={cls.cart}>
      <div className={cls.cart__wrap}>
        <div className={cls.cart__left}>
          {cartItems.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className={cls.cart__right}>
          <div className={cls.cart__contact}>
            <h2 className="mb-3 text-xl">Контактная информация</h2>
            <input
              type="email"
              className={cls.cart__contact_input}
              placeholder="Электронная почта"
            />
            <span className="flex items-center gap-x-2">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-sm">
                Пишите мне с новостями и предложениями
              </span>
            </span>
          </div>
          <div className={cls.cart__delivery_address}>
            <h3 className="text-xl mb-5">Адрес доставки</h3>
            <CartInput type="text" hint="Страна/регион" />
            <div className="flex gap-x-3">
              <CartInput type="text" hint="Имя" />
              <CartInput type="text" hint="Фамилия" />
            </div>
            <CartInput type="text" hint="Адрес" />
            <CartInput type="text" hint="Квартира (по желанию)" />
            <div className="flex gap-x-3">
              <CartInput type="text" hint="Почтовый индекс" />
              <CartInput type="text" hint="Город" />
            </div>
            <CartInput type="tel" hint="Телефон" />
            <span className="flex items-center gap-x-2">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-sm">
                Сохраните эту информацию для следующего раза
              </span>
            </span>
            <p className="pt-9 flex justify-end items-center text-sm text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <Link className="hover:text-black hover:underline" to="/catalog">
                Вернуться к каталогу
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
