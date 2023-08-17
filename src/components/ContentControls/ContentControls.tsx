import SearchProducts from "../SearchProducts/SearchProducts.tsx";
import FilterProducts from "../FilterProducts/FilterProducts.tsx";

const ContentControls = () => {
    return (
        <div className={"py-10 flex justify-center items-center flex-wrap"}>
            <SearchProducts />
            <FilterProducts />
        </div>
    );
};

export default ContentControls;