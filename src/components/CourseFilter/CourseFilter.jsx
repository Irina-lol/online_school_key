import React, { useState } from 'react';
import styles from './CourseFilter.module.css';

const CourseFilter = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles.title}>
        <i className="fas fa-filter"></i>
        Категории
      </h3>

      <ul className={styles.categories}>
        <li>
          <button
            className={`${styles.categoryButton} ${selectedCategory === 'all' ? styles.active : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            Все курсы
          </button>
        </li>

        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <i className={category.icon}></i>
              {category.name}
              <span className={styles.count}>{category.count}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.filterFooter}>
        <button className={styles.resetButton}>
          <i className="fas fa-redo"></i>
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
};

export default CourseFilter;