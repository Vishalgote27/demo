import React from 'react'
import AdminNavbar from './components/AdminNavbar'
import { Outlet } from 'react-router-dom'

const Adminlayout = () => {
    return <>
        <AdminNavbar />
        <Outlet />


    </>
}

export default Adminlayout