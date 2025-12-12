import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/aboutUsPage/aboutUsPage';
import ContactUsPage from './pages/contactUsPage/contactUsPage';
import FAQPage from './pages/faqPage/faqPage';
import HomePage from './pages/homePage/homePage';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import ProductsPage from './pages/productsPage/productsPage';
import AppFooter from './components/footer/footer';
import AppHeader from './components/header/header';
import AppLogo from './components/header/logo';

function App() {
  return (
    <div className="App">
      <AppLogo />
      <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />          
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          {/* <Route path="/faq" element={<FAQPage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
