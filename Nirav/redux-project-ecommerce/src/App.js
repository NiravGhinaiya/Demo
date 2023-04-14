import React from 'react';
import './App.css';
// import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom';

import ProductList from './Components/ProductList'
import ProductDetail from './Components/ProductDetail'
import CartProduct from './Components/CartProduct'


function App() {
  return (
    
      <Routes>
          <Route path='/'   element={<ProductList />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='/cartproductd' element={<CartProduct />} />
          <Route>404 Not Found..</Route>
      </Routes>
  );
}

export default App;
