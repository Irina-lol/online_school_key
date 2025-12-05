import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import keyLogo from "../../assets/3d_elements/Ключ прозрачный.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const navItems = [
    {
      path: '/about',
      label: 'О Ключе',
      icon: 'fas fa-key'
    },
    {
      path: '/reviews',
      label: 'Отзывы',
      icon: 'fas fa-star'
    },
    {
      path: '/teachers',
      label: 'Наши преподаватели',
      icon: 'fas fa-chalkboard-teacher'
    },
    {
      path: '/gifts',
      label: 'Подарки',
      icon: 'fas fa-gift'
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <img
              src={keyLogo}
              alt="Логотип Ключ"
              className={styles.logoImage}
            />
            <span className={styles.logoText}>Ключ</span>
          </div>
        </NavLink>

        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  <i className={item.icon}></i>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.authContainer}>
          <button
            className={styles.loginButton}
            onClick={handleLogin}
          >
            <i className="fas fa-sign-in-alt"></i>
            {isLoggedIn ? ' Личный кабинет' : ' Войти'}
          </button>

          <button
            className={styles.burgerMenu}
            onClick={toggleMenu}
            aria-label="Открыть меню"
          >
            <span className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineActive1 : ''}`}></span>
            <span className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineActive2 : ''}`}></span>
            <span className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineActive3 : ''}`}></span>
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.navMobile}>
            <ul className={styles.navListMobile}>
              {navItems.map((item) => (
                <li key={item.path} className={styles.navItemMobile}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${styles.navLinkMobile} ${isActive ? styles.navLinkActiveMobile : ''}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className={item.icon}></i>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className={styles.mobileAuth}>
              <button
                className={styles.loginButtonMobile}
                onClick={() => {
                  handleLogin();
                  setIsMenuOpen(false);
                }}
              >
                <i className="fas fa-sign-in-alt"></i>
                {isLoggedIn ? ' Личный кабинет' : ' Войти'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;