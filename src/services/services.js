//  services images
import ecommarce from '../assets/images/ecommarce.png'
import socialMedia from '../assets/images/social media marketing.png'
import webdesigning from '../assets/images/webdesigning.jpg'
// prices images

import flipkart from '../assets/images/flipkart.png'
import amazon from '../assets/images/amazon.png'
import meesho from '../assets/images/meesho.png'
import myntra from '../assets/images/myntra.png'
import ajio from '../assets/images/ajio.png'
import jio from '../assets/images/jio.png'
import naykaa from '../assets/images/nykaa.png'


const servicesData = [
    {
        img: ecommarce,
        title: "E-commerce Account Management",
        description: "Optimize your e-commerce presence with our account management expertise. Maximize growth while we handle the details for you."
    },
    {
        img: socialMedia,
        title: "Social Media & Digital Marketing",
        description: "Amplify your brand's reach with our targeted social media and digital marketing strategies. Engage your audience and drive conversions with our expert guidance."
    },
    {
        img: webdesigning,
        title: "Amazing Websites & Landing Pages",
        description: "Elevate your online presence with stunning websites and landing pages tailored to captivate your audience. Impress visitors and drive conversions with our expertly crafted designs."
    },

]



const pricesData = [
    {
        img: flipkart,
        title: "flipkart",
        prices: [
            { point: "Seller Registration", price: 1000 },
            { point: "Account management Services", price: 3000 },
            { point: "Listing and cataloging Services", price: 2500 },
            { point: "Sales Boost Services", price: 2500 }
        ],
    },
    {
        img: amazon,
        title: "Amazon",
        prices: [
            { point: "Seller Registration", price: 1500 },
            { point: "Account management Services", price: 3000 },
            { point: "Listing and cataloging Services", price: 2500 },
            { point: "Sales Boost Services", price: 2500 }
        ],
    },
    {
        img: meesho,
        title: "meesho",
        prices: [
            { point: "Seller Registration", price: 1000 },
            { point: "Account management Services", price: 2000 },
            { point: "Listing and cataloging Services", price: 4000 },
            { point: "Sales Boost Services", price: 2000 }
        ],
    
    },
    {
        img: myntra,
        title: "myntra",
        prices: [
            { point: "Seller Registration", price: 2000 },
            { point: "Account management Services", price: 15000 },
        ],
 
    },
    {
        img: ajio,
        title: "ajio",
        prices: [
            { point: "Seller Registration", price: 15000 },
            { point: "Account management Services", price: 3000 },
            { point: "Listing and cataloging Services", price: 4000 },
            { point: "Sales Boost Services", price: 4000 }
        ],
   
    },
    {
        img: jio,
        title: "jio mart",
        prices: [
            { point: "Seller Registration", price: 11000 },
            { point: "Account management Services", price: 4000 },
            { point: "Listing and cataloging Services", price: 3000 },
            { point: "Sales Boost Services", price: 3000 }
        ],
     
    },
    {
        img: naykaa,
        title: "naykaa",
        prices: [
            { point: "Seller Registration", price: 20000 },
            { point: "Account management Services", price: 15000 },
        ],
   
    },

]



export { servicesData, pricesData }