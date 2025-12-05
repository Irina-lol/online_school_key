import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.titleGradient}>Ключ</span> - ключ к твоему успеху!
          </h1>
          <p className={styles.subtitle}>
            Современное онлайн-образование в сфере IT и digital.
            Освой востребованную профессию с нуля под руководством опытных наставников.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>
              Выбрать курс
            </button>
            <button className={styles.secondaryButton}>
              <i className="fas fa-play-circle"></i>
              Смотреть видео
            </button>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualContainer}>
            <div className={styles.cube}></div>
            <div className={styles.sphere}></div>
            <div className={styles.pyramid}></div>
          </div>
        </div>
      </div>

      <div className={styles.decorations}>
        <div className={styles.decoration1}></div>
        <div className={styles.decoration2}></div>
        <div className={styles.decoration3}></div>
      </div>
    </section>
  );
};

export default HeroBanner;