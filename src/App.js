import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

/*import AboutPage from "./pages/AboutPage";
import ReviewsPage from "./pages/ReviewsPage";
import TeachersPage from "./pages/TeachersPage";
import GiftsPage from "./pages/GiftsPage";
import PaymentPage from "./pages/PaymentPage";*/

const AboutPage = () => <div className={styles.page}>О ключе</div>;
const ReviewsPage = () => <div className={styles.page}>Отзывы</div>;
const TeachersPage = () => <div className={styles.page}>Преподователи</div>;
const GiftsPage = () => <div className={styles.page}>Подарки</div>;
const PaymentPage = () => <div className={styles.page}>Оплата</div>;

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