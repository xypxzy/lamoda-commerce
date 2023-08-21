import cls from './CartPage.module.scss'
import logo from '../../assets/svg/logo.svg'
import { FC } from 'react'

const breadcrumbs: string[] = ["корзина", "информация", "перевозки", "оплата"]

const CartPage = () => {
  return (
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
    </div>
  );
};

export default CartPage;


const CartItem = () => {
  return (
    <div className={cls.cart__item}>
      <img src="https://dummyimage.com/130x130" alt="" />
      <h4 className={cls.cart__item_name}>Маска для светящейся маски AHA-ENZYME </h4>
      <div className={cls.cart__item_actions}>
        <button className={cls.cart__item_btn}>-</button>
        <p>1</p>
        <button className={cls.cart__item_btn}>+</button>
      </div>
    </div>
  )
}

const CartTotal = () => {
  return (
    <div>
      <div className={cls.cart__total}>
        <input
          className={cls.cart__total_inputCode}
          type="text" placeholder='Подарочная карта или код скидки' />
        <button className={cls.cart__total_btnApply}>применять</button>
      </div>
      <div className={cls.cart__total_intermediateTotal}>
        <div>
          <p >Промежуточный итог</p>
          <p >6880с</p>
        </div>
        <div>
          <p >Перевозки</p>
          <p >Рассчитывается на следующем шаге</p>
        </div>
      </div>
      <div className={cls.cart__total_allTotal}>
        <p>Общий</p>
        <p>6880с</p>
      </div>
    </div>
  )
}

type TCartInputProps = {
  type: string;
  hint: string;
}

const CartInput: FC<TCartInputProps> = ({ type, hint }) => {
  return <input className={cls.cart__input} type={type} placeholder={hint} />
}