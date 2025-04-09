import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar'; // Adjust import if needed
import Login from './pages/login';
import './styles/style.css';
import 'react-router-dom';
import ProductDetails from './pages/ProductPage/seller';
import Product from './pages/ProductPage/productpage';
import HeroSlider from './components/hero';
import Footer from './components/footer';
const isLogin = document.URL.endsWith('/login');




const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!isLogin ? <Route path='/' element={<HeroSlider />}/> : <></> }
        <Route path='/login' element={<Login />} />
        <Route path='/seller' element={<ProductDetails />} />
        <Route path='/products' element={<Product />} />
      </Routes>
      {!isLogin ? <Footer /> : <></>}
    </BrowserRouter>
  );
}

export default App;

