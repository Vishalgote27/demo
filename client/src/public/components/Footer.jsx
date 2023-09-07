import React from 'react'

const Footer = () => {
    return <div className='bg-white'>
        <div className="container bg-white ">
            <div className="row ">
                <div className='col-lg-3 col-md-3 col-sm-3 mt-4 '>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 mt-4  '>
                    <p>Cookie Policy</p>
                    <p>FAQ</p>
                    <p>Payment Methods</p>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 mt-4  '>
                    <p>Address:</p>
                    <p>500 Terry Francine St.</p>
                    <p>San Francisco, CA 94158</p>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 mt-4 '>
                    <p>Contact:</p>
                    <p>info@mysite.com</p>
                    <p>9374234023084</p>
                    <div className='d-flex gap-3 fs-5'>
                        <p><i class="bi bi-instagram"></i></p>
                        <p><i class="bi bi-facebook"></i></p>
                        <p><i class="bi bi-whatsapp"></i></p>
                        <p><i class="bi bi-twitter"></i></p>
                    </div>
                </div>

            </div>
        </div>


        <div className='p-1 bg-light text-center '>
            <p className='mt-2  text-align-center'>© 2023 by Pure Flave. Powered and secured by Vishal</p>
        </div>



    </div>
}

export default Footer