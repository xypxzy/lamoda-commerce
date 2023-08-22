import cls from './SearchProducts.module.css'
import {CiSearch} from 'react-icons/ci'
import {useState} from "react";
import {useGetProductsQuery} from "../../store/products/productsApi.ts";
import {useAppDispatch} from "../../store/hooks.ts";
import {setSearchResults} from "../../store/products/productsSlice.ts";

interface SearchProductsProps {
    onSearch : (arg: string) => void
}

const SearchProducts = ({onSearch} : SearchProductsProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const {data: products} = useGetProductsQuery('productsApi');
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