import React from "react";
import styles from "./Brands.module.scss";
import brands1 from "../../assets/svg/brand-1.svg";
import brands2 from "../../assets/svg/brand-2.svg";
import brands3 from "../../assets/svg/brand-3.svg";
import brands4 from "../../assets/svg/brand-4.svg";
import brands5 from "../../assets/svg/brand-5.svg";
import brands6 from "../../assets/svg/brand-6.svg";

const Brands: React.FC = () => {
  const brandsImages = [brands1, brands2, brands3, brands4, brands5, brands6];

  return (
    <section className={styles.brands}>
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
