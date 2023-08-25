import React from "react";
import logo from "../../assets/svg/logo.svg";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import styles from "./Header.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { toggle } from "../../store/auth/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { auth } from "../../config/firebase-config";
import { signOut } from "firebase/auth";
import { CiLogout } from "react-icons/ci";
import HeaderMobile from "./HeaderMobile";
import { cartItemsLength } from "../../store/cart/selectors";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);
  // Следит за изменением каоличества товаров в sessionStorage
  const itemsCount = useSelector(
    (state: RootState) => state.cart.cartItems.length
  );

  const navigate = useNavigate();

  //Логика burger menu
  const closeMenu = () => {
    setOpen(false);
  };

  // logOut Button and refresh token
  const dispatch = useAppDispatch();

  const logOut = async (state: boolean) => {
    if (auth) {
      try {
        await signOut(auth);
      } catch (error) {
        console.log(error);
      }
    } else {
      localStorage.removeItem("token");
    }
    localStorage.removeItem("token");
    dispatch(toggle(false));
    navigate("/login");
  };

  //Страницы и иконки из Navbar
  const navItems = [
    { id: 1, text: "Новинки", link: "newcollection" },
    { id: 2, text: "Преимущества", link: "features" },
    { id: 3, text: "О нас", link: "aboutus" },
    { id: 4, text: "Бренды", link: "brands" },
  ];

  return (
    <section className={styles.header}>
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
        <HeaderMobile />
        <ul className={`DESKTOP-MENU ${styles.header__list}`}>
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
          <li className={isOpen ? styles.list_text : styles.cart}>
            <RouterLink
              className={styles.icon_center}
              to="/cart"
              aria-current="page"
              onClick={closeMenu}
            >
              <BsBag />
              <span className={styles.icon__text}>Корзина</span>
            </RouterLink>
            <div className={styles.badge}>{itemsCount || 0}</div>
          </li>
        </ul>
      </nav>
      <button onClick={() => logOut(false)}>
        <CiLogout className={styles.logoutIc} />
      </button>
    </section>
  );
}
