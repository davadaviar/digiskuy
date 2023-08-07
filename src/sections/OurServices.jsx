import React from 'react'
import CardService from '../components/CardService'

const OurServices = () => {
  return (
    <div className='our-services mt-24 px-24'>
        <h2 className='font-heading text-[64px]'>Services</h2>
        <div className='service-cards flex flex-1 justify-between'>
            <CardService />
        </div>
    </div>
  )
}

export default OurServices