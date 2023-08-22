import React from "react";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className=" flex flex-col items-center mt-32 mb-44">
      <IoCart className="mb-10 text-5xl" />
      <h1 className="text-2xl mb-5">Нету добавленных товаров</h1>
      <Link
        rel="noopener noreferrer"
        to="catalog"
        className="@apply px-8 py-3 text-lg font-semibold border rounded dark:border-gray-500 sm:px-5 transition-all duration-300 hover:text-white hover:bg-black"
      >
        Перейти в каталог
      </Link>
    </div>
  );
};

export default CartEmpty;
