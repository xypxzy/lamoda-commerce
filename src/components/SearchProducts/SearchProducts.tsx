import cls from './SearchProducts.module.css'
import {CiSearch} from 'react-icons/ci'
import {useState} from "react";
import {useAppDispatch} from "../../store/hooks.ts";
import {setSearchResults} from "../../store/products/productsSlice.ts";
import {ProductProps} from "../../consts/consts.ts";

interface SearchProductsProps {
    products: ProductProps[]
    onSearch: (arg: string) => void
}

const SearchProducts = ({onSearch, products}: SearchProductsProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useAppDispatch()

    const handleSearch = () => {
        onSearch(searchTerm);

        if (!searchTerm.trim()) {
            return products;
        }
        const filteredProducts = products?.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredProducts)
            dispatch(setSearchResults(filteredProducts))
    };

    return (
        <div className={cls.wrap}>
            <div className={cls.search}>
                <input
                    type="text"
                    className={cls.searchTerm}
                    placeholder="What are you looking for?"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className={cls.searchButton} onClick={handleSearch}>
                    <CiSearch/>
                </button>
            </div>
        </div>
    );
};

export default SearchProducts;