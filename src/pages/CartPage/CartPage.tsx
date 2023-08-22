
import cls from "./CartPage.module.scss";
import { FC } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/selectors";
import CartEmpty from "../../components/CartEmpty";
import logo from '../../assets/svg/logo.svg'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks.ts";

type TCartInputProps = {
  type: string;
  hint: string;
};

const CartInput: FC<TCartInputProps> = ({ type, hint }) => {
  return <input className={cls.cart__input} type={type} placeholder={hint} />;
};

const CartPage = () => {
/////authLogin

  const navigate = useNavigate()

  const chechAuth = () => {
      navigate('/login')
  }

  const isAuth = useAppSelector((state) => state.auth)
  const { cartItems } = useSelector(selectCart);

  if (!cartItems.length) {
    return (
      <>
        <CartEmpty />
      </>
    );
  }


  return (
    <>
    {isAuth.isToggled ? 
      (<>
        <div className={cls.cart}>
            <div className={cls.cart__wrap}>
              <div className={cls.cart__left}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartTotal />
              </div>
              <div className={cls.cart__right}>
                <div className='flex justify-center mb-4'>
                  <img src={logo} alt="" />
                </div>
                <div className='mb-11'>
                  <nav className="flex justify-center" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                      {breadcrumbs.map((item: string, index: number) => (<li key={index} className="inline-flex items-center">
                        {index !== 0 && (
                          <svg className="w-4 h-4 text-gray-500 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                          </svg>
                        )}
                        <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                          {item}
                        </a>
                      </li>))}
                    </ol>
                  </nav>
                </div>
                <div className={cls.cart__contact}>
                  <h2 className='mb-3 text-xl'>Контактная информация</h2>
                  <input type="email" className={cls.cart__contact_input} placeholder='Электронная почта' />
                  <span className='flex items-center gap-x-2'>
                    <input type="checkbox" className='w-6 h-6' />
                    <span className='text-sm'>Пишите мне с новостями и предложениями </span>
                  </span>
                </div>
                <div className={cls.cart__delivery_address}>
                  <h3 className='text-xl mb-5'>Адрес доставки</h3>
                  <CartInput type='text' hint='Страна/регион' />
                  <div className='flex gap-x-3'>
                    <CartInput type='text' hint='Имя' />
                    <CartInput type='text' hint='Фамилия' />
                  </div>
                  <CartInput type='text' hint='Адрес' />
                  <CartInput type='text' hint='Квартира (по желанию)' />
                  <div className='flex gap-x-3'>
                    <CartInput type='text' hint='Почтовый индекс' />
                    <CartInput type='text' hint='Город' />
                  </div>
                  <CartInput type='tel' hint='Телефон' />
                  <span className='flex items-center gap-x-2'>
                    <input type="checkbox" className='w-6 h-6' />
                    <span className='text-sm'>Сохраните эту информацию для следующего раза </span>
                  </span>
                  <p className='pt-9 flex justify-end items-center text-sm text-slate-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <a href="">Вернуться в корзину</a>
                  </p>
                </div>
              </div>
            </div>
////////
  

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
///////// main
          </div>
      </>) : 
      (<>
        <div id="snter-m">
          <div>
            <span>Ваша корзина пуста, пожалуйста, зарегистрируйтесь. ;)</span>
          </div>
          <button id="button-auth" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none max-w-md focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={() => chechAuth()}>SingIn</button>
        </div>
      </>)}
   
    </>
  );
};

export default CartPage;
