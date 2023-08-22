import cls from './SearchProducts.module.css'
import {CiSearch} from 'react-icons/ci'

const SearchProducts = () => {


    return (
        <div className={cls.wrap}>
            <div className={cls.search}>
                <input type="text" className={cls.searchTerm} placeholder="What are you looking for?"/>
                <button type="submit" className={cls.searchButton}>
                    <CiSearch/>
                </button>
            </div>
        </div>
    );
};

export default SearchProducts;