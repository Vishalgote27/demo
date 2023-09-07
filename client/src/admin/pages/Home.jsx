import { useFormik } from 'formik'
import * as yup from "yup"
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { adminAddProduct } from '../../redux/Actions/adminActions'
import { toast } from 'react-toastify'


const Home = () => {
    const dispatch = useDispatch()
    const productAdd = useFormik({
        initialValues: {
            imageUrl: "",
            category: "",
            imgCaption: "",
            price: "",
            qty: 1,
            stock: 10

        },
        validationSchema: yup.object({
            imageUrl: yup
                .string()
                .required(),
            category: yup
                .string()
                .required(),
            imgCaption: yup
                .string()
                .required(),
            price: yup
                .number()
                .required(),
            qty: yup
                .number()
                .required(),
            stock: yup
                .number()
                .required()
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(adminAddProduct(values))
            toast.success("Added Product")
        }
    })

    return <>
        <div className="container">
            <div className="row ">
                <div className="col-sm-4 offset-sm-4 mt-4">
                    <div className="card ">
                        <div className="card-body">
                            <form onSubmit={productAdd.handleSubmit}>
                                <div>
                                    <label htmlFor="">image URL</label>
                                    <input
                                        name='imageUrl'
                                        value={productAdd.values.imageUrl}
                                        onBlur={productAdd.handleBlur}
                                        onChange={productAdd.handleChange}
                                        className={productAdd.touched.imageUrl && productAdd.errors.imageUrl
                                            ? "form-control is-invalid"
                                            : "form-control"}
                                        type="text" />
                                    <div className='invalid-feedback'>{productAdd.errors.imageUrl}</div>
                                </div>

                                <div className='mt-1'>
                                    <label htmlFor="">Categeory</label>
                                    <select name='category'
                                        value={productAdd.values.category}
                                        onBlur={productAdd.handleBlur}
                                        onChange={productAdd.handleChange}
                                        className={productAdd.touched.category && productAdd.errors.category
                                            ? "form-select is-invalid"
                                            : "form-select"}
                                        type="text">
                                        <option selected>Product Type</option>
                                        <option value="single">Single</option>
                                        <option value="combo">Combo</option>
                                    </select>

                                    <div className='invalid-feedback'>{productAdd.errors.category}</div>
                                </div>

                                <div className='mt-1'>
                                    <label htmlFor="">Caption</label>
                                    <input
                                        name='imgCaption'
                                        value={productAdd.values.imgCaption}
                                        onBlur={productAdd.handleBlur}
                                        onChange={productAdd.handleChange}
                                        className={productAdd.touched.imgCaption && productAdd.errors.imgCaption
                                            ? "form-control is-invalid"
                                            : "form-control"}
                                        type="text" />
                                    <div className='invalid-feedback'>{productAdd.errors.imgCaption}</div>
                                </div>

                                <div className='mt-1'>
                                    <label htmlFor="">Price</label>
                                    <input
                                        name='price'
                                        value={productAdd.values.price}
                                        onBlur={productAdd.handleBlur}
                                        onChange={productAdd.handleChange}
                                        className={productAdd.touched.price && productAdd.errors.price
                                            ? "form-control is-invalid"
                                            : "form-control"}
                                        type="number" />
                                    <div className='invalid-feedback'>{productAdd.errors.price}</div>
                                </div>

                                <div className='mt-1'>
                                    <label htmlFor="">Qty</label>
                                    <input
                                        name='qty'
                                        value={productAdd.values.qty}
                                        onBlur={productAdd.handleBlur}
                                        onChange={productAdd.handleChange}
                                        className={productAdd.touched.qty && productAdd.errors.qty
                                            ? "form-control is-invalid"
                                            : "form-control"}
                                        type="number" />
                                    <div className='invalid-feedback'>{productAdd.errors.qty}</div>
                                </div>

                                <div className='mt-1'>
                                    <label htmlFor="">Stock</label>
                                    <input
                                        name='stock'
                                        value={productAdd.values.stock}
                                        onBlur={productAdd.handleBlur}
                                        onChange={productAdd.handleChange}
                                        className={productAdd.touched.stock && productAdd.errors.stock
                                            ? "form-control is-invalid"
                                            : "form-control"}
                                        type="number" />
                                    <div className='invalid-feedback'>{productAdd.errors.stock}</div>

                                </div>

                                <div className="text-center mt-2">
                                    <button type="submit" class="btn btn-primary" >Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}

export default Home