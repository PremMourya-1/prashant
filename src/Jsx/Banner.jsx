import React from 'react'
// import girl from '../assets/images/girl.png'
import girl from '../assets/images/slider3.webp'


function Banner() {
    return (
        <>
            <div className="banner bg-[color:var(--primary-color)]  lg:py-10">
                <div className="container">
                <div className="flex items-center lg:flex-col-reverse lg:justify-center lg:text-center flex-wrap ">
                <div className="left w-3/5 lg:w-full">
                    <h2 className='text-white mb-4 font-medium text-4xl lg:text-3xl'>Grow Your Business With Us</h2>
                    <p className='text-white mb-8 lg:text-sm'>Transform your e-commerce journey with our comprehensive account management solutions. Our team of experts specializes in optimizing your online presence, driving sales, and fostering customer engagement. With tailored strategies and relentless dedication, we'll elevate your brand to new heights in the digital marketplace. Experience success with us today.</p>
                    <a  href="tel:918619335214" className='px-6 font-medium hover:text-white py-2 rounded-md inline-block bg-white text-[color:var(--primary-color)] themeButtonHover '>Contact Now</a>
                </div>
                <div className="right w-2/5 lg:w-full">
                    <img className='max-w-[500px] w-full m-auto sm:w-[300px]' src={girl} alt="girl advertiser" />
                </div>

                </div>

                </div>
            </div>
        </>
    )
}

export default Banner