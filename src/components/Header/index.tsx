import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

const Header: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickMenu = () => {
    setOpen(!isOpen);
  };

  //Элементы navbar
  const navItems = [
    { id: 1, text: "Каталог", link: "#" },
    { id: 2, text: "Бренды", link: "#" },
    { id: 3, text: "Новинки", link: "#" },
    { id: 4, text: "Контакты", link: "#" },
  ];

  const navLinks = [
    { id: 1, icon: <BiUser />, link: "#", text: "Профиль" },
    { id: 2, icon: <AiOutlineHeart />, link: "#", text: "Избранное" },
    { id: 3, icon: <BsBag />, link: "#", text: "Корзина" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.nav__body}>
          <div
            className={isOpen ? styles.nav__list_open : styles.nav__list}
            id="navbar-solid-bg"
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.link} aria-current="page">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="#" className="flex items-center">
            <img
              src={logo}
              className={` ${isOpen ? "hidden" : ""} h-8 mr-3`}
              alt="Lamoda logo"
            />
          </Link>
          <div
            className={isOpen ? styles.nav__list_open : styles.nav__list}
            id="navbar-solid-bg"
          >
            <ul>
              {navLinks.map((item) => (
                <li className={styles.nav__icons} key={item.id}>
                  <Link to={item.link} aria-current="page">
                    <p className="px-2 pb-1">{item.icon}</p>
                    <span className={styles.icon__text}>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span onClick={onClickMenu} className={styles.burger}>
            <Hamburger size={25} />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
