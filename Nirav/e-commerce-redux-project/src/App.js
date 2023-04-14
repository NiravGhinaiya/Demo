import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';
import SignpForm from './Components/SignpForm'
import LoginForm from './Components/LoginForm'
import FackeStoreapi from './apis/FackeStoreapi'
import Cart from './Components/Cart';
import PublicRout from './Components/PublicRout';
import PrivateRouter from './Components/PrivateRouter'

function App() {

  const params = useParams()
  // console.log('params',Object.values(params).toString())
  return (
    <div className="App">
      <FackeStoreapi />
      <Routes>

        <Route element={<PrivateRouter />}>
          {/* <Route path='/' element={<LoginForm />} /> */}
          <Route path='/signUp' element={<SignpForm />} />
        </Route>

        <Route element={<PublicRout />}>
          <Route path='/Home' element={<ProductList />} />
          <Route path='/productcart' element={<Cart />} />
        </Route>

        <Route path="/:pageName" element={<p style={{
          display: 'flex', height: '98vh', fontSize: '40px', justifyContent: 'center', alignItems: 'center'
        }}
        ><b>'{Object.values(params).toString()}'</b>&nbsp; page not found : 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;
