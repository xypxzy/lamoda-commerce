import React from "react";
import logo from "../../assets/svg/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { Turn as Hamburger } from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);

  const onClickMenu = () => {
    setOpen(!isOpen);
  };

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
    <div className={styles.header}>
      <ul className={`DESKTOP-MENU ${styles.header__list}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link to={item.link} aria-current="page">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">
        <img src={logo} alt="lamoda logo" />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <Hamburger
            size={25}
            color="black"
            toggled={isOpen}
            toggle={onClickMenu}
          />

          <div
            className={
              isOpen ? `${styles.showMenuNav}` : `${styles.hideMenuNav}`
            }
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={onClickMenu}
            >
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className={styles.header__mobile_list}>
              {navItems.map((item) => (
                <li className={isOpen ? styles.list_text : ""} key={item.id}>
                  <Link to={item.link} aria-current="page">
                    {item.text}
                  </Link>
                </li>
              ))}
              {navLinks.map((item) => (
                <li className={isOpen ? styles.list_text : ""} key={item.id}>
                  <Link
                    className={styles.icon_center}
                    to={item.link}
                    aria-current="page"
                  >
                    {item.icon}
                    <span className={styles.icon__text}>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className={`DESKTOP-MENU ${styles.header__list}`}>
          {navLinks.map((item) => (
            <li className={styles.nav__icons} key={item.id}>
              <Link
                className={styles.icon_center}
                to={item.link}
                aria-current="page"
              >
                {item.icon}
                <span className={styles.icon__text}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
