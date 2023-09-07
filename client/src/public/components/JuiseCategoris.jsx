import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { addToCart } from '../../redux/slice/publicSlice'

const JuiseCategoris = () => {
    // const { allProducts } = useSelector(state => state.adminBy)
    const { userLogin, error } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const location = useLocation()
    // const [qty, setQty] = useState(1)

    const handleAddToCart = (item) => {
        // console.log(item);
        if (userLogin) {

            dispatch(addToCart({ ...item, userId: userLogin._id }))
        } if (item) {
            console.log("already");
            console.log(item._id);
        } if (item) {
            // console.log("already exist he bhawa");
            dispatch(addToCart(item))
        }
    }
    return <>
        {/* <pre>{JSON.stringify(allProducts, null, 2)}</pre> */}
        {/* <div>JuiseCategoris</div>
        <div>{location.state.item.imageUrl}</div> */}
        <div className="container ">
            <br />
            <br />
            <div className='fs-4 fw-bold mx-5'>

                <Link to="/shop" class="nav-link active" >

                    <i class="bi bi-arrow-left"></i>   Back to Shop
                </Link>
            </div>
            <div className="row justify-content-center text-success  ">
                <div className="col-sm-5 img-fluid  mt-5   ">

                    <img className='w-100 img-fluid' src={`${location.state.item.imageUrl}`} alt="" />
                </div>
                <div className="col-sm-5 mt-5 ps-5   ">
                    <h1 className=''>{location.state.item.imgCaption}</h1>
                    <p className='text-start  text-danger fs-2 fw-bold mt-4 '> <span className='text-danger'>₹ </span>{location.state.item.price}</p>
                    <p>Quantity</p>
                    <div className='  border boder-danger text-center bg-white p-2 w-25'>{location.state.item.qty}</div>
                    <br />
                    <br />

                    <div style={{ cursor: "pointer" }} class="rounded-pill bg-success text-white w-75 p-1  text-center fs-5 fw-bold" onClick={e => handleAddToCart(location.state.item)}>Add to Card</div>
                    <br />
                    <div className='d-flex justify-content-between mt-5 fw-bold     '>
                        <div>PRODUCT INFO</div>
                        <div>
                            <button type="button" class="btn btn-primary btn-sm mx-5" data-bs-toggle="collapse" data-bs-target="#productExample">+</button>
                        </div>
                    </div>
                    <div class="collapse text-black" id="productExample">
                        <p>
                            I'm a product detail. I'm a great place to add more information
                            about your product such as sizing, material, care and cleaning instructions
                        </p>
                    </div>
                    <hr className='text-black' />
                    <div className='d-flex justify-content-between fw-bold   '>
                        <div>RETURN & REFUND POLICY</div>
                        <div>
                            <button type="button" class="btn btn-primary mx-5 btn-sm" data-bs-toggle="collapse" data-bs-target="#returnExample">+</button>
                        </div>
                    </div>


                    <div class="collapse text-black" id="returnExample">
                        <p>
                            I'm a Return and Refund policy. I'm a great place to let your
                            customers know what to do in case they are dissatisfied with their purchase.
                        </p>
                    </div>
                    <hr className='text-black' />

                    <div className='d-flex justify-content-between fw-bold   '>
                        <div>SHIPPING INFO</div>
                        <div>
                            <button type="button" class="btn btn-primary mx-5 btn-sm" data-bs-toggle="collapse" data-bs-target="#shipingExample">+</button>
                        </div>
                    </div>

                    <div class="collapse text-black" id="shipingExample">

                        <p>
                            I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost.
                            Providing straightforward information about your shipping policy is a great way to build trust
                        </p>
                    </div>
                    <hr className='text-black' />


                </div>
            </div>



        </div>

    </>

}

export default JuiseCategoris