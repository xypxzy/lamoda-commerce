import React from "react";
import styles from "./AboutUs.module.css";
import Carousel from "./Carousel";

const AboutUs: React.FC = () => {
  return (
    <section className={styles.about}>
      <h2 className="mb-20 font-bold text-3xl">Команда мечты Lamoda</h2>
      <div className={styles.about_grid}>
        <div className={styles.about_carousel}>
          <Carousel />
        </div>
        <div className={styles.about_text}>
          <h2>Для каждой</h2>
          <p>
            Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
            подчеркивают достоинства каждой девушки.
          </p>
          <button>Подробнее о бренде</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
