import {Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from 'redux/products/products-operations';
import NavBar from "./NavBar/NavBar";
import HomePage from "pages/HomePage/HomePage";
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import CartPage from 'pages/CartPage/CartPage';

export const App = () => {
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchProducts());
// }, [dispatch]);

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
};
