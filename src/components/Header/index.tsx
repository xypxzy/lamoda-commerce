import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../public/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

const Header: React.FC = () => {
  //Элементы navbar
  const navItems = [
    { id: 1, text: "Каталог", link: "#" },
    { id: 2, text: "Бренды", link: "#" },
    { id: 3, text: "Новинки", link: "#" },
    { id: 4, text: "Контакты", link: "#" },
  ];

  const navLinks = [
    { id: 1, icon: <BiUser />, link: "#" },
    { id: 2, icon: <AiOutlineHeart />, link: "#" },
    { id: 3, icon: <BsBag />, link: "#" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.nav__body}>
          <div className={styles.nav__list} id="navbar-solid-bg">
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
            <img src={logo} className="h-8 mr-3" alt="Lamoda logo" />
          </Link>
          <div className={styles.nav__list} id="navbar-solid-bg">
            <ul>
              {navLinks.map((item) => (
                <li className={styles.nav__icons} key={item.id}>
                  <Link to={item.link} aria-current="page">
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <span className={styles.burger}>
            <Hamburger size={25} />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
