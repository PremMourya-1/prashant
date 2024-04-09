import React from 'react'

function ServiceCard({ img, description, title }) {
    return (
        <>
            <div className="cardBox rounded-lg overflow-hidden shadow-lg border">
                <div className="imgBox h-[240px]">
                    <img className='h-full w-full object-cover' src={img} alt="" />
                </div>
                <div className="content p-5">

                    <h2 className='font-semibold textBlack mb-3 text-lg'>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceCard