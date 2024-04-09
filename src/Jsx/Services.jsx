import React from 'react'
import SectionHeading from '../Components/SectionHeading'
import { servicesData } from '../services/services'
import ServiceCard from '../Components/ServiceCard'

function Services() {
    return (
        <div  id='services' className='sectionPadding'>
            <div className="container">
                <div className="heading text-center mb-10">
                    <SectionHeading hh={'Services'} hb={"Our"} title={"we provide Digital solutions"} />
                </div>
                    <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
                        {servicesData.map((item) => {
                            return (<ServiceCard img={item.img} title={item.title} description={item.description} />)
                        })}
                    </div>
            </div>
        </div>
    )
}

export default Services