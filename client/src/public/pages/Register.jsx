import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import * as yup from "yup"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { userRegisterAction } from '../../redux/Actions/publicActions'
import { resetUserAction } from '../../redux/slice/publicSlice'


const Register = () => {
    const dispatch = useDispatch()
    const { userRegisted, error } = useSelector(state => state.public)
    const navigate = useNavigate()

    useEffect(() => {
        if (userRegisted === true) {
            toast.success("Registration Successfully", { autoClose: 2000 })
            setTimeout(() => {
                navigate("/login")
            }, 2000)
            dispatch(resetUserAction())
        } if (error) {
            toast.error(error, { autoClose: 2000 })
            dispatch(resetUserAction())
        }
    }, [userRegisted, error])

    const singup = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: ""
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required(),

            email: yup
                .string()
                .email()
                .required(),

            password: yup
                .string()
                .required()
                .min(4, "please minimum 4 character"),

            cpassword: yup
                .string()
                .required()
                .oneOf([yup.ref("password")], "password Do Not Match")
        }),
        onSubmit: (value, { resetForm }) => {
            console.log(value);
            dispatch(userRegisterAction(value))
            // toast.success("successfully vishlya")

        }
    })




    return <div className='bg-white'>
        <div className="container ">
            <div className="row">
                <div className="col-sm-5 col-md-5 mt-5 mx-auto ">
                    <div class="card">
                        <div class="card-body shadow">
                            <form onSubmit={singup.handleSubmit}>
                                <h2 className='text-center'>Register</h2>
                                <div>
                                    <label htmlFor="" className='fw-bold'>Your Name <span className='text-danger'>*</span></label>
                                    <input
                                        value={singup.values.name}
                                        onChange={singup.handleChange}
                                        onBlur={singup.handleBlur}
                                        // className={singup.touched.name && singup.errors.name
                                        //     ? "form-control is-invalid"
                                        //     : "form-control is-valid"
                                        // }
                                        className={`form-control ${singup.touched.name && (singup.errors.name ? "is-invalid " : "is-valid")}`}
                                        name='name'
                                        type="text"
                                        placeholder='Name' />
                                    <div className='valid-feedback'>Looks good!</div>
                                    <div className='invalid-feedback'>{singup.errors.name}</div>
                                </div>
                                <br />

                                <div>
                                    <label htmlFor="" className='fw-bold'>Email <span className='text-danger'>*</span></label>
                                    <input
                                        value={singup.values.email}
                                        onChange={singup.handleChange}
                                        onBlur={singup.handleBlur}
                                        className={`form-control ${singup.touched.email && (singup.errors.email ? "is-invalid" : "is-valid")}`}
                                        name='email'
                                        type="text"
                                        placeholder='Email' />
                                    <div className='valid-feedback'>Looks good!</div>
                                    <div className='invalid-feedback'>{singup.errors.email}</div>
                                </div>
                                <br />

                                <div>
                                    <label htmlFor="" className='fw-bold'>Password <span className='text-danger'>*</span></label>
                                    <input
                                        value={singup.values.password}
                                        onChange={singup.handleChange}
                                        onBlur={singup.handleBlur}
                                        className={`form-control ${singup.touched.password && (singup.errors.password ? "is-invalid" : "is-valid")}`}
                                        name='password'
                                        type="text"
                                        placeholder='password' />
                                    <div className='valid-feedback'>Looks good!</div>
                                    <div className='invalid-feedback'>{singup.errors.password}</div>
                                </div>
                                <br />

                                <div>
                                    <label htmlFor="" className='fw-bold'>Confirm password <span className='text-danger'>*</span></label>
                                    <input
                                        value={singup.values.cpassword}
                                        onChange={singup.handleChange}
                                        onBlur={singup.handleBlur}
                                        className={`form-control ${singup.touched.cpassword && (singup.errors.cpassword ? "is-invalid" : "is-valid")}`}

                                        name='cpassword'
                                        type="text"
                                        placeholder='cpassword' />
                                    <div className='valid-feedback'>Looks good!</div>
                                    <div className='invalid-feedback'>{singup.errors.cpassword}</div>
                                </div>
                                <br />

                                <button type="submit" class="btn btn-primary btn-md">Register now</button>
                                <p className='text-center'>Already have account? <Link to="/login"><strong className='text-danger '>Login</strong></Link>
                                </p>


                            </form>
                        </div>

                    </div>

                </div>

                <div className="col-sm-6 ">

                    <img className='w-100 ' src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1689570183~exp=1689570783~hmac=509b17d85c3921a9953ce24e1a36cceeb5b6922ca8898ec82ddb2fe2c740adaa" alt="" />
                </div>
            </div>
        </div>
        <br />
        <div class="  border border-black opacity-50">

        </div>

    </div>
}

export default Register