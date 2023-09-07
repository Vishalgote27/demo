import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetUserAction } from '../../redux/slice/publicSlice'
import { Link } from 'react-router-dom'

const About = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.public)

    return <>
        {/* <!-- Cart content should be displayed in a side panel or a dedicated page --> */}
        {/* <div class="container">
            <div class="row">
                <div class="col-sm-8 ">
                    <h3>Shopping Cart</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img width={"120px"} src="https://static.wixstatic.com/media/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg/v1/fill/w_648,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg" alt="" /></td>
                                <td>Green Punch
                                    <br />
                                    <br />
                                    $6.00

                                </td>
                                <td>
                                    <div class="btn-group" role="group">
                                        <button type="button" class="btn btn-primary">-</button>
                                        <button type="button" class="btn btn-primary">1</button>
                                        <button type="button" class="btn btn-primary">+</button>
                                    </div>
                                </td>
                                <td>$99.98</td>
                                <td>
                                    <button class="btn btn-danger btn-sm">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-sm-4">
                    <p>Total: $99.98</p>
                    <a href="#" class="btn btn-primary">Checkout</a>
                </div>
            </div>
        </div> */}

        <div class="container mt-3">
            <div class="row">
                <div class="col-sm-8 mt-3 mt-lg-0">
                    {
                        cart && cart.map(item =>
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
                                        <button type="button" class="btn btn-secondary"><i class="bi bi-dash"></i></button>

                                        <button type="button" class="btn btn-outline-secondary">{item.qty}</button>

                                        <button type="button" class="btn btn-secondary"><i class="bi bi-plus"></i></button>
                                    </div>


                                </div>
                                <div class="col-lg-3 mt-3 col-6 ms-auto ps-5 ps-lg-0">
                                    <span>$12.00</span>
                                    <span class="ps-lg-5 d-none d-lg-inline"><i class="bi bi-x-lg"></i></span>
                                </div>

                                {/* <hr /> */}
                            </div>

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
                                        <h2><span className='text-danger'>₹</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>






        {/* <hr> */}
        <div class="container mt-3">
            <div class="row">

                <div class="col-sm-8 mt-3 mt-lg-0">
                    <div class="row">
                        <div class="col-lg-3 col-3 img-fluid">
                            <img width="100%"
                                src="https://static.wixstatic.com/media/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg/v1/fill/w_648,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg"
                                alt="" />
                        </div>
                        <div class="col-lg-3 col-9 position-relative">
                            <h5>Green Punch</h5>
                            <p>$6.00</p>

                            <span class="ps-lg-5 position-absolute top-0 end-0 pe-4 d-lg-none"><i
                                class="bi bi-x-lg"></i></span>

                        </div>
                        <div class="col-lg-3 offset-3 col-3 offset-lg-0">
                            {/* <!-- <button type="button" class="btn btn-outline-primary">Primary</button> --> */}

                            <div class="btn-group">
                                <button type="button" class="btn btn-secondary"><i class="bi bi-dash"></i></button>

                                <button type="button" class="btn btn-outline-secondary">2</button>

                                <button type="button" class="btn btn-secondary"><i class="bi bi-plus"></i></button>
                            </div>


                        </div>
                        <div class="col-lg-3 col-6 ms-auto ps-5 ps-lg-0">
                            <span>$12.00</span>
                            <span class="ps-lg-5 d-none d-lg-inline"><i class="bi bi-x-lg"></i></span>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4 d-lg-block ">
                    <div class="card">
                        <div class="card-header">header</div>
                        <div class="card-body">body</div>
                        <div class="card-footer">footer</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <hr> */}




    </>

}

export default About