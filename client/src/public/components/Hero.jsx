import React from 'react'

const Hero = () => {
    return <div className='bg-light'>
        <div class="container col-xxl-8  px-4  bg-light">
            <div class="row flex-lg-row-reverse align-items-center">
                <div class="col-10  col-sm-8 col-lg-6">
                    <img src="https://static.wixstatic.com/media/c837a6_38948c3b2c8c4a918781329123a4a22a~mv2.jpg/v1/crop/x_0,y_48,w_4264,h_5312/fill/w_792,h_987,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background.jpg" class="d-block mx-lg-auto mx-4 img-fluid " alt="" loading="lazy" />
                </div>
                <div class="col-lg-6  ">
                    <div class="lc-block mb-3 mx-4  ">
                        <div editable="rich">
                            <h2 class="fw-bold display-5 ">Freshly pressed, straight to <br />
                                your door</h2>
                        </div>
                    </div>

                    <div class="lc-block ">
                        <div editable="rich">
                            <p class="lead mx-4">At Pure Flave, we're dedicated to goodness in every sip. Delicious, fresh juice, just as nature intended.
                            </p>
                        </div>
                    </div>
                    <div class="rounded-pill bg-success text-white w-25 p-1 mx-4 text-center fs-5 fw-bold">Shop</div>
                    {/* <div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-primary px-4 me-md-2" href="#" role="button">Shop now</a>
        </div> */}

                </div>
            </div>
        </div>
        {/* <hr /> */}
        <div class="  text-danger border-bottom border-black">

        </div>

        {/* <hr className='border border-black opacity-75' /> */}


    </div>
}

export default Hero