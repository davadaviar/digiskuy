import React from 'react'

const CardWorks = ({ img, altText })  => {
  return (
    <img 
        className='w-[450px] h-[500px] grayscale hover:grayscale-0 transition-all ease-in-out' 
        src={img} 
        alt={altText} 
    />
  )
}

export default CardWorks