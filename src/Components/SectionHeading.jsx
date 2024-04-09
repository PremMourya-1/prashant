import React from 'react'

function SectionHeading({ hb , hh, title }) {
    return (
        <>
            <h2 className='text-gray-800 capitalize text-3xl font-semibold'>{hb} <span className='text-[color:var(--primary-color)]'>{hh}</span></h2>
            <p className='textBlack capitalize'>{title}</p>
        </>
    )
}

export default SectionHeading