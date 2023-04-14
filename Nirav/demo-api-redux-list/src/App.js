import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import SignpForm from './Components/SignpForm'
import LoginForm from './Components/LoginForm'
import ProductCart from './Components/ProductCart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup_form' element={<SignpForm />} />
        <Route path='/Home' element={<ProductList />} />
        <Route path='/productcart' element={<ProductCart />} />
      </Routes>
    </div>
  );
}

export default App;
