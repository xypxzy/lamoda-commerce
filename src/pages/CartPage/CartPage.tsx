import cls from './CartPage.module.scss'

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
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

const imgUrl: string = "https://fastly.picsum.photos/id/131/130/130.jpg?hmac=03RnqpG8XlD2bDScOv7eSQafafSv8tHCn8Wq177XVDM"

const CartItem = () => {
  return (
    <div className={cls.cart__item}>
      <img src={imgUrl} alt="" />
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
      <div className='flex justify-between pt-6'>
        <p>Общий</p>
        <p>6880с</p>
      </div>
    </div>
  )
}