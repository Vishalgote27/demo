import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ compo }) => {
    const { userLogin } = useSelector(state => state.public)
    return userLogin === false ? <Navigate to={"/"} /> : userLogin.role === "admin" ? compo : <Navigate to={"/login"} />
}
export default Protected