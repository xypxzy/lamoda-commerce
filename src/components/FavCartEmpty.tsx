import React from "react";
import { useNavigate} from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const FavCardEmpty: React.FC = () => {
    const navigate = useNavigate()

    const handleGoToCatalog = () => {
        navigate('/catalog');
    };


    return (
        <div className=" flex flex-col items-center justify-center h-screen">
            <AiFillHeart className="mb-10 text-5xl"/>
            <h1 className="text-2xl mb-5">Нету добавленных товаров</h1>
            <button
                rel="noopener noreferrer"
                onClick={handleGoToCatalog}
                className="@apply px-8 py-3 text-lg font-semibold border rounded dark:border-gray-500 sm:px-5 transition-all duration-300 hover:text-white hover:bg-black"
            >
                Перейти в каталог
            </button>
        </div>
    );
};

export default FavCardEmpty;