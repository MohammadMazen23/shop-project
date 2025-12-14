import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from './pages/aboutUsPage/aboutUsPage';
import ContactUsPage from './pages/contactUsPage/contactUsPage';
import HomePage from './pages/homePage/homePage';
import ProductsPage from './pages/productsPage/productsPage';
import AppFooter from './components/footer/footer';
import AppHeader from './components/header/header';

function App() {
  return (
    <div className="App">
      <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />          
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
