import React from 'react'
import OurServices from '../sections/OurServices'
import { services } from '../constants'

const CardService = ({ img, title, altText }) => {
  return (
    <div className='w-[380px] h-[380px]'>
      <div className='hover-box relative hover:cursor-pointer hover:scale-110 hover:opacity-70 transition-all ease-in-out'>
        <h2 className='text-[45px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-full text-center'>{title}</h2>
        <img className='relative' src={img} alt={altText} />
      </div>
    </div>
  )
}

export default CardService