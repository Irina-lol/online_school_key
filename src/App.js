import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

/*import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ReviewsPage from "./pages/ReviewsPage";
import TeachersPage from "./pages/TeachersPage";
import GiftsPage from "./pages/GiftsPage";
import PaymentPage from "./pages/PaymentPage";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";*/

const HomePage = () => <div className={styles.page}>Главная</div>;
const AboutPage = () => <div className={styles.page}>О ключе</div>;
const ReviewsPage = () => <div className={styles.page}>Отзывы</div>;
const TeachersPage = () => <div className={styles.page}>Преподователи</div>;
const GiftsPage = () => <div className={styles.page}>Подарки</div>;
const PaymentPage = () => <div className={styles.page}>Оплата</div>;

const Header = () => (
  <header className={styles.header}>
    <div>Логотип "Ключ"</div>
    <nav>
      <a href="/">Главная</a>
      <a href="/about">О Ключе</a>
      <a href="/reviews">Отзывы</a>
      <a href="/teachers">Преподователи</a>
      <a href="/gifts">Подарки</a>
    </nav>
    <button>Войти</button>
  </header>
);

const Footer = () => (
  <footer className={styles.footer}>
    <p>© Организация "Ключ"</p>
    <p>ИНН: 1234567890 | ОГРН: 1234567890123</p>
  </footer>
);

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/gifts" element={<GiftsPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;