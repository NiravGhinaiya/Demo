import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateRoute = () => {
    const token = localStorage.getItem('token')
    return (token ? <Navigate to='/home' /> : <Outlet />)
}

export default PrivateRoute