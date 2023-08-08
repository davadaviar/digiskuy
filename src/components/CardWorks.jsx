import React from 'react'

const CardWorks = ({ img, altText })  => {
  return (
    <img 
        className='md:w-[450px] md:h-[500px] grayscale hover:grayscale-0 transition-all ease-in-out' 
        src={img} 
        alt={altText} 
    />
  )
}

export default CardWorks