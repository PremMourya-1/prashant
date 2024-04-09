// import sliderImage from '../assets/images/slider3.webp'
import sliderImage from '../assets/images/slider2.png'
// import sliderImage from '../assets/images/slider.png'

function Slider() {
    return (
        <>
            <div id="slider" className='bg-[#F5F5F5] py-16 md:py-10'>
                <div className="container">

                    <div className="flex items-center md:flex-col-reverse md:gap-8">
                        <div className="left md:w-full md:text-center w-[55%] pe-12 md:pe-0">
                            <h1 className='text-[40px] leading-[50px]  lg:text-3xl font-bold text-gray-800 mb-8 md:mb-4'>
                                Account <span className='text-[color:var(--primary-color)]'>Management</span> & <span className='text-[color:var(--primary-color)]'> SEO </span> Service Provider
                            </h1>
                            <p className='ps-4 md:border-0 lg:text-sm mb-8 md:mb-4 py-2 border-l-4 text-gray-600 font-medium border-[color:var(--primary-color)]'>
                                Unlock the full potential of your e-commerce business with our expert account management services. From optimization to growth strategies, we're here to drive your success. Let's elevate your online presence today!"</p>

                            <a href='#prices' className='px-6 py-2.5 md:px-4 themeButton text-lg'>
                                <span>
                                    View Price
                                </span>

                                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.895508 1.25L7.14551 7.5L0.895508 13.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </a>
                        </div>
                        <div className="left md:w-full md:text-center w-[45%]">
                            <img className='md:m-auto' src={sliderImage} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Slider