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
    { path: '/about', label: 'О Ключе' },
    { path: '/reviews', label: 'Отзывы' },
    { path: '/teachers', label: 'Наши преподователи' },
    { path: '/gifts', label: 'Подарки' },
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

        <nav className={styles.navDesctop}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
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
            {isLoggedIn ? 'Личный кабинет' : 'Войти'}
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
                {isLoggedIn ? 'Личный кабинет' : 'Войти'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;