import React from "react";
import styles from "./NewCollection.module.css";
import { Link } from "react-router-dom";
import { useGetNewProductsQuery } from "../../store/products/productsApi";

const NewCollection: React.FC = () => {
  const { data = [], error, isLoading } = useGetNewProductsQuery(3);
  return (
    <section id="newcollection" className={styles.collection}>
      <h2 className="mb-20 font-bold text-3xl">Новая коллекция</h2>
      <div className={styles.col_grid}>
        {data.slice(0, 3).map((el) =>
          el.images.map((obj, index) => (
            <div key={index} className={styles.col_card}>
              <Link to="/">
                <img className="mb-5" src={obj.image} alt="collection img" />
              </Link>
              <div className={styles.col_info}>
                <h3 className={styles.col_title}>Mini Watermelon Glow PHA</h3>
                <p className={styles.col_price}>$15.00</p>
              </div>
            </div>
          ))
        )}
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
