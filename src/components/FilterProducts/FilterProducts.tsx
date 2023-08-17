import Dropdown from "../Dropdown/Dropdown.tsx";

const FilterProducts = () => {
    return (
        <div className={"ml-5 border border-gray-400 px-5 py-2"}>
            <Dropdown
                trigger={<button>Сортировка по</button>}
                menu={[<button>По убыванию</button>, <button>По возрастанию</button>]}
            />
        </div>
    );
};

export default FilterProducts;