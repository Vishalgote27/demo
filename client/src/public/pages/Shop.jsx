import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetProduct } from '../../redux/Actions/adminActions'
import { Navigate, useNavigate } from 'react-router-dom'

const Shop = () => {

    const dispatch = useDispatch()
    const { allProducts } = useSelector(state => state.adminBy)
    const navigate = useNavigate()
    const juicePorducts = allProducts && allProducts.map(item => <>

        <div className="col-sm-6 mt-4 ">
            <img onClick={e => addcart(item)} style={{ cursor: "pointer" }} className='w-75' src={`${item.imageUrl}`} alt="" />
            <div className='mt-2' style={{ marginLeft: "80px" }} >
                <p className='text-start fs-5 fw-bold '>{item.imgCaption}</p>
                <p className='text-start  text-danger fs-5 fw-bold '> <span className='text-danger'>₹</span> {item.price}</p>
            </div>
        </div>
    </>
    )

    const addcart = (item) => {
        // dispatch(adminGetProduct(), item)
        navigate("/juiceper", { state: { item: item } })
    }

    useEffect(() => {
        dispatch(adminGetProduct())
    }, [])

    return <>

        <div className="container">
            <div className='ms-5 mt-5'>
                <h1 className='text-success fw-bold '> Juise Shop</h1>
                <br />
                <p>Cold-pressed, 100% organic, packed with vitamins, nutrients, and natural goodness.</p>
            </div>
            <div className="row text-center">
                {juicePorducts}
            </div>
        </div>


    </>
}

export default Shop