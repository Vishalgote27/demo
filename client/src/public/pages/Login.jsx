import { useFormik } from 'formik'
import * as yup from "yup"
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetUserAction } from '../../redux/slice/publicSlice'
import { userLoginAction } from '../../redux/Actions/publicActions'
import { toast } from 'react-toastify'

const Login = () => {
    const dispatch = useDispatch()
    const { userLogin, error } = useSelector(state => state.public)
    const navigate = useNavigate()
    useEffect(() => {
        if (userLogin) {
            if (userLogin.role === "user") {
                toast.success("Login Success", { autoClose: 2000 })
                dispatch(resetUserAction())
                navigate("/about")
            }
            if (userLogin.role === "admin") {
                toast.success("Admin Login Success", { autoClose: 4000 })
                dispatch(resetUserAction())
                navigate("/admin")

            }
            // toast.success("Login Success", { autoClose: 4000 })
            // dispatch(resetUserAction())
            // navigate("/about")

        } if (error) {
            toast.error(error, { autoClose: 2000 })
            dispatch(resetUserAction())
        }
    }, [userLogin, error])

    const singIn = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .required()
                .email(),

            password: yup
                .string()
                .required()
                .min(4, "please minimum 4 character")

        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(userLoginAction(values))
        }
    })

    return <div className='bg-white'>
        <div className="container ">
            <div className="row">
                <div className="col-sm-7 ">

                    <img className='w-100' src="https://img.freepik.com/free-vector/tiny-people-carrying-key-open-padlock_74855-16292.jpg?w=996&t=st=1689498222~exp=1689498822~hmac=d1ee8181f45d024e89f91b145fba51e3665e9f1b1c61b06b96dde20b97b5b744" alt="" />
                </div>
                <div className="col-sm-5 col-md-5 mt-5 mx-auto ">
                    <div class="card">
                        <div class="card-body shadow">
                            <form onSubmit={singIn.handleSubmit}>
                                <h2 className='text-center'>Login</h2>
                                <div>
                                    <label htmlFor="" className='fw-bold'>Your Email <span className='text-danger'>*</span></label>
                                    <input
                                        value={singIn.values.email}
                                        onBlur={singIn.handleBlur}
                                        onChange={singIn.handleChange}
                                        className={`form-control ${singIn.touched.email && (singIn.errors.email ? "is-invalid" : "is-valid")}`}
                                        name='email'
                                        type="text"
                                        placeholder='First' />
                                    <div className='valid-feedback'>Looks good!</div>
                                    <div className='invalid-feedback '>{singIn.errors.email}</div>
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="" className='fw-bold'>Password <span className='text-danger'>*</span></label>
                                    <input
                                        value={singIn.values.password}
                                        onBlur={singIn.handleBlur}
                                        onChange={singIn.handleChange}
                                        className={`form-control ${singIn.touched.password && (singIn.errors.password ? "is-invalid" : "is-valid")}`}
                                        name='password'
                                        type="text"
                                        placeholder='First' />
                                    <div className='valid-feedback'>Looks good!</div>
                                    <div className='invalid-feedback'>{singIn.errors.password}</div>
                                </div>
                                <br />
                                <button type="submit" class="btn btn-primary">Login</button>
                                <p className='text-center'>Don't have an account? <Link to="/register"><strong className='text-danger '>Register</strong></Link>
                                </p>

                            </form >


                        </div>

                    </div>

                </div>
            </div>
        </div>
        <br />
        <div class="  border border-black opacity-50">

        </div>

    </div>

}

export default Login