import { Dropdown } from 'flowbite-react';

export default function MyDropdown() {
    return (
        <Dropdown inline label="Сортировать по">
            <Dropdown.Item onClick={()=>alert("Dashboard!")}>
                По убыванию
            </Dropdown.Item>
            <Dropdown.Item onClick={()=>alert("Settings!")}>
                По возрастанию
            </Dropdown.Item>
        </Dropdown>
    )
}