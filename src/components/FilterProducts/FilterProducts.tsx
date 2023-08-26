import { Dropdown } from "flowbite-react";

interface FilterProductsContentProps {
  content: string;
  onClick: () => void;
}

interface FilterProductsProps {
  label: string;
  contents: FilterProductsContentProps[];
  className?: string;
}

const FilterProducts = ({
  label,
  contents,
  className = "",
}: FilterProductsProps) => {
  return (
    <div
      className={`border border-gray-400 px-5 py-2 overflow-hidden ${className}`}
    >
      <Dropdown inline placement={"bottom"} label={label}>
        {contents.map((item) => (
          <Dropdown.Item onClick={item.onClick} key={item.content}>
            {item.content}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default FilterProducts;
