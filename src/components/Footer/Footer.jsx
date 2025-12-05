import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>

          <div className={styles.footerBlock}>
            <h3 className={styles.footerTitle}>Онлайн-школа "Ключ"</h3>
            <p className={styles.footerDescription}>
              Ключ к вашему успеху в IT-профессиях
            </p>
          </div>

          <div className={styles.footerBlock}>
            <h4 className={styles.footerSubtitle}>Документы</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/privacy" className={styles.footerLink}>
                  Политика обработки персональных данных
                </Link>
              </li>
              <li>
                <Link to="/offer" className={styles.footerLink}>
                  Публичная оферта
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <h4 className={styles.footerSubtitle}>Контакты</h4>
            <ul className={styles.footerContacts}>
              <li className={styles.contactItem}>
                <i className={`${styles.contactIcon} fas fa-envelope`}></i>
                <span>info@klyuch-school.ru</span>
              </li>
              <li className={styles.contactItem}>
                <i className={`${styles.contactIcon} fas fa-phone`}></i>
                <span>+7 (999) 123-45-67</span>
              </li>
            </ul>
          </div>

          <div className={styles.footerBlock}>
            <h4 className={styles.footerSubtitle}>Мы в соцсетях</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Telegram">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="VKontakte">
                <i className="fab fa-vk"></i>
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <div className={styles.legalInfo}>
            <p>© Организация "Ключ", {currentYear}</p>
            <p>ИНН: 1234567890 | ОГРН: 1234567890123</p>
          </div>
          <p className={styles.disclaimer}>
            *Сайт является демонстрационным макетом и не является реальной онлайн-школой
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;