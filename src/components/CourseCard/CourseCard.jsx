import React from 'react';
import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
  const monthlyPrice = course.discountPrice
    ? Math.round(course.discountPrice / 12)
    : Math.round(course.price / 12);

  return (
    <div className={styles.card}>
      {course.discount && (
        <div className={styles.discountBadge}>
          -{course.discount}%
        </div>
      )}

      <div className={styles.imageContainer}>
        <img
          src={course.image}
          alt={course.title}
          className={styles.image}
        />
        <div className={styles.imageOverlay}></div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{course.title}</h3>

        <div className={styles.priceContainer}>
          {course.discountPrice ? (
            <>
              <span className={styles.oldPrice}>{course.price.toLocaleString()} ₽</span>
              <span className={styles.price}>{course.discountPrice.toLocaleString()} ₽</span>
            </>
          ) : (
            <span className={styles.price}>{course.price.toLocaleString()} ₽</span>
          )}
        </div>

        <div className={styles.installment}>
          <i className="fas fa-calendar-check"></i>
          Рассрочка: <strong>{monthlyPrice.toLocaleString()} ₽/мес</strong>
        </div>

        <div className={styles.buttons}>
          <button className={styles.detailsButton}>
            <i className="fas fa-info-circle"></i>
            Подробнее
          </button>
          <button className={styles.enrollButton}>
            <i className="fas fa-shopping-cart"></i>
            Записаться
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;