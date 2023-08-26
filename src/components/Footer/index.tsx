import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import { FaGithub, FaDiscord, FaTwitter, FaDribbble } from "react-icons/fa";
import styles from "./Footer.module.css";

interface ResourceLink {
  url: string;
  text: string;
}

interface FollowLink {
  url: string;
  text: string;
  icon: any;
}

const resourcesLinks: ResourceLink[] = [
  { url: "/", text: "О компании" },
  { url: "/", text: "Политика конфиденциальности" },
  { url: "/", text: "Как оформить заказ/доставку" },
  { url: "/", text: "Q/A" },
];

const followUsLinks: FollowLink[] = [
  {
    url: "https://github.com/themesberg/flowbite",
    text: "Github",
    icon: <FaGithub />,
  },
  {
    url: "https://discord.gg/4eeurUVvTy",
    text: "Discord",
    icon: <FaDiscord />,
  },
  {
    url: "https://twitter.com/your-twitter-account",
    text: "Twitter",
    icon: <FaTwitter />,
  },
  {
    url: "https://dribbble.com/your-dribbble-account",
    text: "Dribbble",
    icon: <FaDribbble />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__body}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3" alt="FlowBite Logo" />
            </Link>
          </div>

          <div className={styles.info}>
            <h2 className={styles.footer__title}>Информация</h2>
            {resourcesLinks.map((link, index) => (
              <ul
                key={index}
                className="text-gray-900 dark:text-gray-900 font-medium md:mb-5"
              >
                <li key={index} className="mb-6">
                  <Link to={link.url} className="hover:underline">
                    {link.text}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          <div className="">
            <h2 className={styles.footer__contacts}>Социальные сети</h2>
            {followUsLinks.map((link, index) => (
              <ul key={index} className={styles.footer__socialLinks}>
                <li key={index} className="mb-6">
                  <span className="mr-5">{link.icon}</span>
                  <Link to={link.url} className="hover:underline">
                    {link.text}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
