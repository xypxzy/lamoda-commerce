import SearchProducts from "../SearchProducts/SearchProducts.tsx";
import FilterProducts from "../FilterProducts/FilterProducts.tsx";

//
// interface ResultProps {
//     id: number,
//     title: string
// }

const ContentControls = () => {

    return (
        <div className={"py-10 flex justify-center flex-col flex-wrap"}>
            <div className={"flex w-full lg:justify-center  items-center md:flex-nowrap flex-wrap"}>
                <SearchProducts />
                <FilterProducts />
            </div>
        </div>
    );
};

export default ContentControls;