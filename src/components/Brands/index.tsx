import React from "react";
import styles from "./Brands.module.css";
import brands1 from "../../assets/img/brands-1.png";
import brands2 from "../../assets/img/brands-2.png";
import brands3 from "../../assets/img/brands-3.png";
import brands4 from "../../assets/img/brands-4.png";
import brands5 from "../../assets/img/brands-5.png";
import brands6 from "../../assets/img/brands-6.png";

const Brands: React.FC = () => {
  const brandsImages = [brands1, brands2, brands3, brands4, brands5, brands6];

  return (
    <section className={styles.brands} id="brands">
      <h1 className={styles.brands__title}>Брэнды</h1>
      <div className={styles.brands__grid}>
        {brandsImages.map((imageUrl, index) => (
          <div key={index} className={styles.brands__grid_item}>
            <img src={imageUrl} alt={`Brand ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
