import {cloneElement, FC, JSXElementConstructor, ReactElement, useState} from "react";
import cls from './Dropdown.module.css';
import {BsChevronDown} from 'react-icons/bs';

interface DropdownProps {
    trigger: ReactElement<{ onClick: () => void; }, string | JSXElementConstructor<Element>>,
    menu: ReactElement<{ onClick: () => void; }, string | JSXElementConstructor<Element>>[],
}

const Dropdown: FC<DropdownProps> = ({trigger, menu}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={cls.dropdown}>
            <div className={"flex items-center justify-between"} onClick={handleOpen}>
                {trigger}
                <BsChevronDown />
            </div>
            {open ? (
                <ul className={cls.menu}>
                    {menu.map((menuItem, index) => (
                        <li key={index} className={cls.menu__item}>
                            {cloneElement(menuItem, {
                                onClick: () => {
                                    menuItem.props.onClick();
                                    setOpen(false);
                                },
                            })}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Dropdown;