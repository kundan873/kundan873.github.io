
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Home from './components/Home';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import ScrollToTop from './ScrollToTop';
import Contact from './components/Contact';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/contact-us' element={<Contact />} exact />
          <Route path='/product/detail/:slug' element={<ProductDetail />} exact />
          <Route path='/laptops' element={<Collection title="Laptops" />} exact />
          <Route path='/computers' element={<Collection title="Computers" />} exact />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
