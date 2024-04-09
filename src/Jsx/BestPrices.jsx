import React from 'react'
import SectionHeading from '../Components/SectionHeading'
import PricesCard from '../Components/PricesCard'
import { pricesData } from '../services/services'

function BestPrices() {
    return (
        <div id='prices' className='sectionPadding bg-[color:var(--light)]'>
            <div className="container">
                <div className="heading mb-10 text-center">
                    <SectionHeading hh={"Prices"} hb={"Best"} title={"E-commarce Account Management"} />
                </div>


                <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                    {
                        pricesData.map(({ img, title, description, price ,prices}) => {
                            return (
                                <PricesCard img={img} prices={prices} title={title} description={description} price={price} />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BestPrices