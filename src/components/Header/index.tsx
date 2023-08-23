import React from "react";
import logo from "../../assets/svg/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import styles from "./Header.module.scss";
import { Turn as Hamburger } from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { toggle } from "../../store/auth/authSlice";
import { useAppDispatch } from "../../store/hooks";


export default function Header() {
  const [isOpen, setOpen] = React.useState(false);
  const navigate = useNavigate()

  //Логика burger menu
  const onClickMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  // logOut Button and refresh token
  const dispatch = useAppDispatch()

  const logOut = (state: any) => {
          dispatch(toggle(state))
      localStorage.removeItem('token')
      navigate('/login')
    }

    //Страницы и иконки из Navbar
  const navItems = [
    { id: 1, text: "Новинки", link: "newcollection" },
    { id: 2, text: "Преимущества", link: "features" },
    { id: 3, text: "О нас", link: "aboutus" },
    { id: 4, text: "Бренды", link: "brands" },
  ];

  const navLinks = [
    { id: 1, icon: <MdProductionQuantityLimits /> ,text: "Каталог", link: "/catalog" },
    { id: 2, icon: <BiUser />, link: "/user", text: "Профиль" },
    { id: 3, icon: <AiOutlineHeart />, link: "/favourites", text: "Избранное" },
    { id: 4, icon: <BsBag />, link: "/cart", text: "Корзина" },
  ];

  return (
    <div className={styles.header}>
      <ul className={`DESKTOP-MENU ${styles.header__list}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            {item.link.startsWith("/") ? (
              <RouterLink to={item.link} aria-current="page">
                {item.text}
              </RouterLink>
            ) : (
              <ScrollLink
                to={item.link}
                target={item.link}
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
                aria-current="page"
                onClick={closeMenu}
              >
                {item.text}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
      <RouterLink to="/">
        <img src={logo} alt="lamoda logo" />
      </RouterLink>
      <nav>
        <section className="MOBILE-MENU mt-0 flex lg:hidden">
          <Hamburger
            size={25}
            color="black"
            toggled={isOpen}
            toggle={onClickMenu}
          />

          <div
            className={`${styles.navbar} ${
              isOpen ? styles["slidein"] : styles["slideout"]
            }`}
          >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={onClickMenu}
            >
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                cursor="pointer"
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
                <li className={styles.list_text} key={item.id}>
                  {item.link.startsWith("/") ? (
                    <RouterLink to={item.link} aria-current="page">
                      {item.text}
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                      aria-current="page"
                      onClick={closeMenu}
                    >
                      {item.text}
                    </ScrollLink>
                  )}
                </li>
              ))}
              {navLinks.map((item) => (
                <li className={isOpen ? styles.list_text : ""} key={item.id}>
                  <RouterLink
                    className={styles.icon_center}
                    to={item.link}
                    aria-current="page"
                    onClick={closeMenu}
                  >
                    {item.icon}
                    <span className={styles.icon__text}>{item.text}</span>
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className={`DESKTOP-MENU ${styles.header__list}`}>
          {navLinks.map((item) => (
            <li className={styles.nav__icons} key={item.id}>
              <RouterLink
                className={styles.icon_center}
                to={item.link}
                aria-current="page"
              >
                {item.icon}
                <span className={styles.icon__text}>{item.text}</span>
              </RouterLink>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={() => logOut(false)}>log out</button>
    </div>
  );
}
