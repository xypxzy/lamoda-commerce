import React from "react";
import styles from "./NewCollection.module.css";
import { Link } from "react-router-dom";

const NewCollection: React.FC = () => {
  return (
    <section id="newcollection" className={styles.collection}>
      <h2 className="mb-20 font-bold text-3xl">Новая коллекция</h2>
      <div className={styles.col_grid}>
        <div className={styles.col_card}>
          <Link to="/">
            <img
              className="mb-5"
              src="https://www.sephora.com/productimages/sku/s2421519-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=250"
              alt="collection img"
            />
          </Link>
          <div className={styles.col_info}>
            <h3 className={styles.col_title}>Mini Watermelon Glow PHA</h3>
            <p className={styles.col_price}>$15.00</p>
          </div>
        </div>
        <div className={styles.col_card}>
          <Link to="/">
            <img
              className="mb-5"
              src="https://www.sephora.com/productimages/sku/s2566545-main-zoom.jpg?imwidth=250"
              alt="collection img"
            />
          </Link>
          <div className={styles.col_info}>
            <h3 className={styles.col_title}>
              Eye Recharge + Replenish Pro-Ferm™
            </h3>
            <p className={styles.col_price}>$56.00</p>
          </div>
        </div>
        <div className={styles.col_card}>
          <Link to="/">
            <img
              className="mb-5"
              src="https://www.sephora.com/productimages/sku/s2495497-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=250"
              alt="collection img"
            />
          </Link>
          <div className={styles.col_info}>
            <h3 className={styles.col_title}>Summer Fridays Lip Butter Balm</h3>
            <p className={styles.col_price}>$24.00</p>
          </div>
        </div>
      </div>
      <div className={styles.col_desc}>
        <Link rel="noopener noreferrer" to="catalog" className={styles.col_btn}>
          Перейти в каталог
        </Link>
      </div>
    </section>
  );
};

export default NewCollection;
