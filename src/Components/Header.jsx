import { useState } from 'react'
import logo from '../assets/images/prashant logo.svg'
import whatsappIcon from '../assets/images/whatsapp icon.png'
import callIcon from '../assets/images/call icon.png'


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const [isHeaderFixed, setIsHeaderFixed] = useState(false)


    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY
        if (scrollPosition > 300) {
            setIsHeaderFixed(true)
        }
        else {
            setIsHeaderFixed(false)
        }
    })

    return (
        <>
            <div id="header" className={`${isHeaderFixed ? "fixeHeader" : ""} shadow-sm border py-4 transition5 w-full z-[9] bg-white`}>
                <div className="container">
                    <div className="headerDetails flex items-center justify-between">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                        <div onClick={() => {
                            setIsMenuOpen(false)
                        }} className={`w-full navParent transition5 flex ${isMenuOpen ? "show" : ""}`}>
                            <nav onClick={(e) => {
                                e.stopPropagation()
                            }} className={`flex gap-4 nav transition5 justify-between items-center flex-1 responsive-nav`}>
                                <ul className='flex gap-6 items-center m-auto responsive-nav-ul'>
                                    <li><a onClick={() => { setIsMenuOpen(false) }} href="#slider" className="navLinks  text-gray-500 font-medium hover:text-[color:var(--primary-color)]">Home</a></li>
                                    {/* <li><a onClick={() => { setIsMenuOpen(false) }} href="#about" className="navLinks  text-gray-500 font-medium hover:text-[color:var(--primary-color)]">About</a></li> */}
                                    <li><a onClick={() => { setIsMenuOpen(false) }} href="#services" className="navLinks  text-gray-500 font-medium hover:text-[color:var(--primary-color)]">services</a></li>
                                    <li><a onClick={() => { setIsMenuOpen(false) }} href="#prices" className="navLinks  text-gray-500 font-medium hover:text-[color:var(--primary-color)]">Prices</a></li>

                                    <li><a onClick={() => { setIsMenuOpen(false) }} href="#footer" className="navLinks  text-gray-500 font-medium hover:text-[color:var(--primary-color)]">Contact</a></li>
                                </ul>
                                <div className="buttons flex gap-6 items-center">

                                    <a target='_blank' href="https://wa.me/918619335214" className=''>
                                        <img className='w-8' src={whatsappIcon} alt="" />
                                    </a>
                                    <a target='_blank' href="tel:918619335214" className=''>
                                        <img className='w-8' src={callIcon} alt="" />
                                    </a>
                                </div>

                                <button onClick={() => {
                                    setIsMenuOpen(false)
                                }} className='closeButton lg:flex hidden h-9 w-9 items-center justify-center shadow-lg absolute -top-3 -right-3 bg-[color:var(--card-bg)] rounded-full'>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                        <button onClick={() => {
                            setIsMenuOpen(!isMenuOpen)
                        }} className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white lg:flex hidden">
                            <span className="sr-only">Open main menu</span>
                            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                                <span
                                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" ${isMenuOpen ? 'rotate-45' : "-translate-y-1.5"}`}>
                                </span>
                                <span className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""} `}></span>
                                <span className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                            </div>
                        </button>

                    </div >
                </div >

            </div></>
    )
}

export default Header