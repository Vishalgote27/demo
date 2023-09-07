import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutAction } from '../../redux/slice/publicSlice'
import { logoutUser } from '../../redux/Actions/publicActions'

const Navbar = () => {
    const { userLogin, cart } = useSelector(state => state.public)
    const dispatch = useDispatch()
    return <div className='bg-light mt-1'>

        <div class="  border border-black opacity-50">

        </div>
        <div className="container  ">
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid">
                    <Link class="navbar-brand sw-bold" to="/">Pure Juise</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav mx-auto gap-4">
                            <Link to="/" class="nav-link active" >Home</Link>
                            <Link to="/shop" class="nav-link" >Shop</Link>
                            <Link to="/about" class="nav-link" >About</Link>
                            <Link to="/contact" class="nav-link">Contact</Link>

                        </div>


                        {/* <div className='' >
                                </div> */}
                        {
                            userLogin ? <> <div class="dropdown">

                                <button class=" btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                    {userLogin && userLogin.name}
                                </button>
                                <ul class="dropdown-menu text-center">
                                    <li>
                                        <button type="button" onClick={e => { dispatch(logoutUser()) }} class="btn btn-outline-danger w-75">Logout</button>
                                    </li>
                                </ul>
                            </div>

                            </>
                                : <> <Link to="/login">
                                    <button type="button" class="btn btn-outlin ">
                                        <i className="bi bi-person-circle fs-5 me-3"></i>
                                        Log In</button>
                                </Link>
                                </>
                        }


                        <button type="button" class="btn btn-outline me-3">
                            <i className="bi bi-bag fs-5"></i> <strong>{cart && cart.length}</strong>
                        </button>


                        <div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="  border border-black opacity-50">

        </div>

    </div>
}

export default Navbar