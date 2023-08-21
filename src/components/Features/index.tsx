import React from "react";
import styles from "./Features.module.css";
import feature1 from "../../assets/svg/Frame 16-1.svg";
import feature2 from "../../assets/svg/Frame 16-2.svg";
import feature3 from "../../assets/svg/Frame 16.svg";

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <h2 className="mb-20 font-bold text-3xl">Что для нас важно</h2>
      <div className={styles.features_grid}>
        <div className={styles.features_card}>
          <img className="mb-5" src={feature1} alt="feature img" />
          <div className={styles.features_info}>
            <h3 className={styles.features_title}>Качество</h3>
            <p className={styles.features_desc}>
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </p>
          </div>
        </div>

        <div className={styles.features_card}>
          <img className="mb-5" src={feature2} alt="feature img" />
          <div className={styles.features_info}>
            <h3 className={styles.features_title}>Скорость</h3>
            <p className={styles.features_desc}>
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </p>
          </div>
        </div>

        <div className={styles.features_card}>
          <img className="mb-5" src={feature3} alt="feature img" />
          <div className={styles.features_info}>
            <h3 className={styles.features_title}>Ответственность</h3>
            <p className={styles.features_desc}>
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это lamoda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
