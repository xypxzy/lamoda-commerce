import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/img/herologo.png";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__body}>
        <div className={styles.hero__body_info}>
          <h1 className={styles.hero__title}>
            Пришло время найти время для себя
          </h1>
          <div className={styles.hero__desc}>
            <Link
              rel="noopener noreferrer"
              to="catalog"
              className={styles.hero__btn}
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
        <div className={styles.hero__body_img}>
          <img src={heroImg} alt="Hero img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
