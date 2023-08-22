import {Dropdown} from 'flowbite-react';

interface MyDropdownContentProps {
    content: string,
    onClick: () => void;
}

interface MyDropdownProps {
    label: string;
    contents: MyDropdownContentProps[]
}

export default function MyDropdown({label, contents}: MyDropdownProps) {
    return (
        <Dropdown inline placement={"bottom"} label={label}>
            {contents.map(item => (
                <Dropdown.Item onClick={item.onClick}>
                    {item.content}
                </Dropdown.Item>
            ))}
        </Dropdown>
    )
}