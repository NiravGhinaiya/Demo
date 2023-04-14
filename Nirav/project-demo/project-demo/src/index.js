import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Style/product.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

