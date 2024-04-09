import React from 'react'

function PricesCard({ img, title, description, prices }) {
    return (
        <>
            <div className='rounded-[30px] hover:scale-105 transition-all shadow-lg  bg-[color:var(--card-bg)] p-6'>
                <img className='max-w-14 w-full mb-5 md:m-auto' src={img} alt="" />
                <h3 className='capitalize mb-4 text-2xl md:text-center md:mb-4 font-semibold textBlack'>{title}</h3>
                <ul className='mb-3'>
                    {prices.map((item, i) => {
                        return (
                            <li className='flex [&:not(:last-child)]:mb-2 [&:not(:last-child)]:border-gray-300 [&:not(:last-child)]:pb-2  text-sm gap-2 md:flex-col md:justify-center md:text-center items-center justify-between border-b ' key={i}>
                                <p>{item.point}</p>
                                <span className='text-[14px] shrink-0 font-medium text-blue-800'>₹{item.price} {i === 0 ? "Only" : "/ Month"}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default PricesCard