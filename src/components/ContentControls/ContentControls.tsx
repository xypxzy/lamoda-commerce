import SearchProducts from "../SearchProducts/SearchProducts.tsx";
import FilterProducts from "../FilterProducts/FilterProducts.tsx";
import {useState} from "react";

type filteredType = 'asc' | 'desc' | 'rel'

interface ContentControlsProps {
    onSearch : (arg: string) => void
}

const ContentControls = ({onSearch} : ContentControlsProps) => {
    const [_, setFilteredBy] = useState<filteredType>('rel') // Для запроса на сервер

    return (
        <div className={"py-10 flex justify-center flex-col flex-wrap gap-3"}>
            <div className={"flex w-full lg:justify-center  items-center md:flex-nowrap flex-wrap"}>
                <SearchProducts onSearch={onSearch}/>
                <FilterProducts
                    contents={[
                        {content: 'По убыванию', onClick: () => setFilteredBy('asc')},
                        {content: 'По возрастанию', onClick: () => setFilteredBy('desc')},
                        {content: 'Релевантно', onClick: () => setFilteredBy('rel')},
                    ]}
                    label={'Сортировать'}
                    className={'md:ml-5'}
                />
            </div>
        </div>
    );
};

export default ContentControls;