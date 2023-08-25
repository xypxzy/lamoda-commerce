import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import styles from "./Header.module.css";
import { Turn as Hamburger } from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const HeaderMobile: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false);

  //Логика burger menu
  const closeMenu = () => {
    setOpen(false);
  };

  const navItems = [
    { id: 1, text: "Новинки", link: "newcollection" },
    { id: 2, text: "Преимущества", link: "features" },
    { id: 3, text: "О нас", link: "aboutus" },
    { id: 4, text: "Бренды", link: "brands" },
  ];

  //Логика burger menu
  const onClickMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
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
                    className="text-xl"
                  >
                    {item.text}
                  </ScrollLink>
                )}
              </li>
            ))}
            <li className={isOpen ? styles.list_text : ""}>
              <RouterLink
                className={styles.icon_center}
                to="/catalog"
                aria-current="page"
                onClick={closeMenu}
              >
                <MdProductionQuantityLimits />
                <span className={styles.icon__text}>Каталог</span>
              </RouterLink>
            </li>
            <li className={isOpen ? styles.list_text : ""}>
              <RouterLink
                className={styles.icon_center}
                to="/user"
                aria-current="page"
                onClick={closeMenu}
              >
                <BiUser />
                <span className={styles.icon__text}>Профиль</span>
              </RouterLink>
            </li>
            <li className={isOpen ? styles.list_text : ""}>
              <RouterLink
                className={styles.icon_center}
                to="/favourites"
                aria-current="page"
                onClick={closeMenu}
              >
                <AiOutlineHeart />
                <span className={styles.icon__text}>Избранное</span>
              </RouterLink>
            </li>
            <li className={isOpen ? styles.list_text : ""}>
              <RouterLink
                className={styles.icon_center}
                to="/cart"
                aria-current="page"
                onClick={closeMenu}
              >
                <BsBag />
                <span className={styles.icon__text}>Корзина</span>
              </RouterLink>
              <div>BADGE</div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HeaderMobile;
