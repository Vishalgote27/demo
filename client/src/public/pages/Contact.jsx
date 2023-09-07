import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, } from '../../redux/slice/publicSlice'
import { editProduct } from '../../redux/Actions/adminActions'

const Contact = () => {
    const { cart, total } = useSelector(state => state.public)
    const { userLogin, error } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const [puls, setPlus] = useState(1)
    const [stock, setStock] = useState(5)
    // const itemId = 1
    const handleIncrement = (item) => {
        // puls < stock ? setPlus(puls + 1) : setPlus(stock)
        dispatch(editProduct(item))
    };
    const handleget = (i, item) => {
        // if (cart[0]._id === item.id) {

        // dispatch(get()) }
        puls > 1 ? setPlus(puls - 1) : setPlus(1)
        // console.log(cart[i]._id);
        // setPlus(puls + 1)
        // console.log(puls);
        // console.log(item._id);
    }
    const handlepost = (i) => {
        // if (userLogin._id === cart.userId) { 
        //     console.log(cart);
        // }

        // puls < stock ? setPlus(puls + 1) : setPlus(stock)
        // setPlus(puls + 1)
        // console.log(puls);
        // console.log(item);
    }
    return <>

        {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}





        {/* <hr> */}
        <div class="container mt-3">
            <div class="row">
                {
                    cart && cart.map((item, i) => <>
                        <div class="col-sm-8 mt-3 mt-lg-0">
                            <div class="row">
                                <div class="col-lg-3 col-3 img-fluid">
                                    <img width="100%"
                                        src={`${item.imageUrl}`}
                                        // src="https://static.wixstatic.com/media/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg/v1/fill/w_648,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg"
                                        alt="" />
                                </div>
                                <div class="col-lg-3 mt-3 col-9 position-relative">
                                    <h5>{item.imgCaption}</h5>
                                    <p>{item.price}</p>

                                    <span class="ps-lg-5 position-absolute top-0 end-0 pe-4 d-lg-none"><i
                                        class="bi bi-x-lg"></i></span>

                                </div>
                                <div class="col-lg-3 mt-3 offset-3 col-3 offset-lg-0">

                                    <div class="btn-group">
                                        <button onClick={e => setPlus(puls === 1 ? 1 : puls - 1)} type="button" class="btn btn-secondary"><i class="bi bi-dash"></i></button>

                                        <button type="button" class="btn btn-outline-secondary">{puls}</button>

                                        <button onClick={e => handleIncrement(item)} type="button" class="btn btn-secondary"><i class="bi bi-plus"></i></button>
                                    </div>


                                </div>
                                <div class="col-lg-3 mt-3 col-6 ms-auto ps-5 ps-lg-0">
                                    <span>{puls * item.price}</span>
                                    <button
                                        type="button"
                                        onClick={e => dispatch(deleteCartItem(i))}
                                        class="btn btn-outline-danger">
                                        <i className='bi bi-trash'></i>
                                    </button>

                                    {/* <span style={{ cursor: "pointer" }} onClick={e => dispatch(deleteCartItem(i))} class="ps-lg-5 d-none d-lg-inline"><i class="bi bi-x-lg"></i></span> */}
                                </div>
                                <hr />
                            </div>
                        </div>
                    </>




                    )
                }

                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-header py-3"><strong>PRICE DETAILS</strong></div>
                        <div class="card-body">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p><strong>Price</strong></p>
                                    <p>Delevery Charges</p>
                                    <hr />
                                    <h4>Total Amount</h4>
                                </div>
                                <div >
                                    <h3><span className='text-danger'>₹</span> </h3>
                                    <p className='text-success'>Free</p>
                                    <hr />
                                    <h2><span className='text-danger'>₹{Math.round(total)}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>



        {/* <div class="col-sm-8 mt-3 mt-lg-0">

                        <div class="row">


                            <div class="col-lg-3 col-3 img-fluid">
                                <img width="100%"
                                    src="https://static.wixstatic.com/media/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg/v1/fill/w_648,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg"
                                    alt="" />
                            </div>
                            <div class="col-lg-3 mt-3 col-9 position-relative">
                                <h5>Green Punch</h5>
                                <p>$6.00</p>

                                <span class="ps-lg-5 position-absolute top-0 end-0 pe-4 d-lg-none"><i
                                    class="bi bi-x-lg"></i></span>

                            </div>
                            <div class="col-lg-3 mt-3 offset-3 col-3 offset-lg-0">

                                <div class="btn-group">
                                    <button type="button" class="btn btn-secondary"><i class="bi bi-dash"></i></button>

                                    <button type="button" class="btn btn-outline-secondary">2</button>

                                    <button type="button" class="btn btn-secondary"><i class="bi bi-plus"></i></button>
                                </div>


                            </div>
                            <div class="col-lg-3 mt-3 col-6 ms-auto ps-5 ps-lg-0">
                                <span>$12.00</span>
                                <span class="ps-lg-5 d-none d-lg-inline"><i class="bi bi-x-lg"></i></span>
                            </div>
                        </div>
                    </div> */}





    </>
}

export default Contact