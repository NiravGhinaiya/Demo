import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRouter = () => {

    const token = localStorage.getItem('token')
    return (token ? <Navigate to='/Home' /> : <Outlet />)

}

export default PrivateRouter