import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../../redux/slice/publicSlice'
import { logoutUser } from '../../redux/Actions/publicActions'

const AdminNavbar = () => {
    const dispatch = useDispatch()
    return <>
        <nav class="navbar navbar-expand-lg bg-danger">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" className="nav-link active">Home</Link>
                        <Link to="/admin/admindashboard" className="nav-link active">Dashborad</Link>
                        <Link to="/admin/allusers" className="nav-link active">Users</Link>
                        <button onClick={e => dispatch(logoutUser())} type="button" class="btn btn-primary">Logout</button>

                    </div>
                </div>
            </div>
        </nav>


    </>
}

export default AdminNavbar