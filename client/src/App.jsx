import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Publiclayout from './public/Publiclayout'
import Hero from './public/components/Hero'
import About from './public/pages/About'
import Contact from './public/pages/Contact'
import Shop from './public/pages/Shop'
import Login from './public/pages/Login'
import Register from './public/pages/Register'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Adminlayout from './admin/Adminlayout'
import Home from './admin/pages/Home'
import Dashborad from './admin/pages/Dashborad'
import Users from './admin/pages/Users'
import Protected from './admin/components/Protected'
import JuiseCategoris from './public/components/JuiseCategoris'
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Publiclayout />}>
          <Route index element={<Hero />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop' element={<Shop />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='juiceper' element={<JuiseCategoris />} />
        </Route>

        <Route path='/admin' element={<Protected compo={<Adminlayout />} />}>
          <Route index element={<Home />} />
          <Route path='adminDashboard' element={<Dashborad />} />
          <Route path='allusers' element={<Users />} />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <ToastContainer />



    </BrowserRouter>


  </>
}

export default App