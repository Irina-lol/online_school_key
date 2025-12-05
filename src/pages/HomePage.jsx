import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import CourseFilter from '../components/CourseFilter/CourseFilter';
import CourseCard from '../components/CourseCard/CourseCard';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [filteredCourses, setFilteredCourses] = useState(sampleCourses);

  const categories = [
    { id: 'programming', name: 'Программирование', icon: 'fas fa-code', count: 18 },
    { id: 'design', name: 'Дизайн', icon: 'fas fa-palette', count: 12 },
    { id: 'marketing', name: 'Маркетинг', icon: 'fas fa-bullhorn', count: 8 },
    { id: 'analytics', name: 'Аналитика', icon: 'fas fa-chart-line', count: 6 },
    { id: 'management', name: 'Менеджмент', icon: 'fas fa-briefcase', count: 10 },
    { id: 'other', name: 'Другие', icon: 'fas fa-ellipsis-h', count: 6 },
  ];

  const handleFilterChange = (category) => {
    if (category === 'all') {
      setFilteredCourses(sampleCourses);
    } else {
      const filtered = sampleCourses.filter(course =>
        course.category === category || course.tags.includes(category)
      );
      setFilteredCourses(filtered);
    }
  };

  return (
    <div className={styles.homePage}>
      <HeroBanner />
      <section className={styles.coursesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-graduation-cap"></i>
              Витрина профессий / курсов
            </h2>
            <p className={styles.sectionSubtitle}>
              50–60 востребованных IT-профессий с гарантией трудоустройства
            </p>
          </div>

          <div className={styles.coursesGrid}>
            <aside className={styles.filterColumn}>
              <CourseFilter
                categories={categories}
                onFilterChange={handleFilterChange}
              />
            </aside>

            <main className={styles.coursesColumn}>
              <div className={styles.coursesGridWrapper}>
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>

              <div className={styles.pagination}>
                <button className={styles.paginationButton}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className={`${styles.paginationButton} ${styles.active}`}>1</button>
                <button className={styles.paginationButton}>2</button>
                <button className={styles.paginationButton}>3</button>
                <span className={styles.paginationDots}>...</span>
                <button className={styles.paginationButton}>10</button>
                <button className={styles.paginationButton}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

const sampleCourses = [
  {
    id: 1,
    title: 'Fullstack-разработчик на JavaScript',
    price: 89900,
    discountPrice: 62930,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'programming',
    tags: ['programming', 'javascript', 'web']
  },
  {
    id: 2,
    title: 'UI/UX дизайнер с нуля до PRO',
    price: 74900,
    discountPrice: 52430,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'design',
    tags: ['design', 'ui', 'ux']
  },
  {
    id: 3,
    title: 'Data Science и машинное обучение',
    price: 129900,
    discountPrice: 90930,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'analytics',
    tags: ['analytics', 'data', 'ml']
  },
  {
    id: 4,
    title: 'SMM-специалист: продвижение в соцсетях',
    price: 54900,
    discountPrice: 38430,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'marketing',
    tags: ['marketing', 'smm', 'social']
  },
  {
    id: 5,
    title: 'Python-разработчик',
    price: 79900,
    discountPrice: 55930,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'programming',
    tags: ['programming', 'python']
  },
  {
    id: 6,
    title: 'Project-менеджер в IT',
    price: 64900,
    discountPrice: 45430,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'management',
    tags: ['management', 'pm', 'it']
  },
  {
    id: 7,
    title: 'Android-разработчик на Kotlin',
    price: 84900,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'programming',
    tags: ['programming', 'kotlin', 'android']
  },
  {
    id: 8,
    title: 'Веб-аналитик: Google Analytics & Яндекс.Метрика',
    price: 44900,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'analytics',
    tags: ['analytics', 'web', 'ga']
  },
];

export default HomePage;