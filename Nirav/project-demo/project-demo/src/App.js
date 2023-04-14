import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import UserChart from './Components/Chart/UserChart'
import EmployeDetail from './Components/EmployeDetail'
import Home from './Components/Home';
import ProductData from './Components/ProductData'
import StudentDetail from './Components/StudentDetail'
import UserDetail from './Components/UserDetail'
import Login from './Page/Login'
import ProductBuy from './Page/ProductBuy/Index';
import SignUp from './Page/SignUp'
import VideoPlayer from './Page/VideoPlayer';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoutes from './Routes/PublicRoutes';
import './Style/model.css'
import './Style/table.css'

const App = () => {

  const params = useParams()
  // console.log('params', Object.values(params).toString())


  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} /> 
        </Route>

        <Route element={<PublicRoutes />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/userDetail" element={<UserDetail />} />
          <Route exact path="/studentDetail" element={<StudentDetail />} />
          <Route exact path="/employeDetail" element={<EmployeDetail />} />
          <Route exact path="/productData" element={<ProductData />} />
          <Route exact path="/userChart" element={<UserChart />} />
          <Route exact path="/videoPlayer" element={<VideoPlayer />} />
          <Route exact path="/ProductBuy" element={<ProductBuy />} />
        </Route>

        <Route path="/:pageName" element={
          <p style={{ display: 'flex', height: '98vh', fontSize: '40px', justifyContent: 'center', alignItems: 'center' }}>
            <b>'{Object.values(params).toString()}'</b>&nbsp; page not found : 404!
          </p>} />
      </Routes>
    </div>
  )
}

export default App