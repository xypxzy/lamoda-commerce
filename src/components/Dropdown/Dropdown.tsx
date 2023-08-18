import { Dropdown } from 'flowbite-react';

export default function MyDropdown() {
    return (
        <Dropdown inline placement={"bottom"} label="Сортировать">
            <Dropdown.Item onClick={()=>alert("Dashboard!")}>
                По убыванию
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>alert("Settings!")}>
                По возрастанию
            </Dropdown.Item>
        </Dropdown>
    )
}