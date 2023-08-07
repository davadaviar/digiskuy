import React from 'react'

const CardWorks = ({ img, altText })  => {
  return (
    <img 
        className='w-[450px] h-[500px] opacity-70 hover:opacity-100 transition-all ease-in-out' 
        src={img} 
        alt={altText} 
    />
  )
}

export default CardWorks