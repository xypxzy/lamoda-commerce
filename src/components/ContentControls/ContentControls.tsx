import SearchProducts from "../SearchProducts/SearchProducts.tsx";
import FilterProducts from "../FilterProducts/FilterProducts.tsx";
//
// interface ResultProps {
//     id: number,
//     title: string
// }

const ContentControls = () => {
    // const [searchResults, setSearchResults] = useState<ResultProps[]>([]);

    // const handleSearch = () => {
    //     // Здесь вы можете выполнить логику поиска, например, запрос к API или другую обработку
    //     // и затем обновить состояние searchResults с полученными результатами.
    //     // Ниже просто симулируем результаты поиска.
    //
    //     const fakeResults = [
    //         { id: 1, title: 'Result 1' },
    //         { id: 2, title: 'Result 2' },
    //         // ...
    //     ];
    //
    //     setSearchResults(fakeResults);
    // };
    return (
        <div className={"py-10 flex justify-center items-center flex-wrap"}>
            <SearchProducts />
            <FilterProducts />
        </div>
    );
};

export default ContentControls;