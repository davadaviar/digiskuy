import React from 'react'

const Team = ({ altText, img, name, role }) => {
  return (
    <div className='team-card text-center md:w-[280px] grayscale hover:grayscale-0'>
        <img src={img} alt={altText} />
        <div className='team-body mt-7'>
            <h3 className='text-[18px] md:text-[32px] font-medium'>{name}</h3>
            <p className='text-[16px] md:text-[20px]'>{role}</p>
        </div>
    </div>
  )
}

export default Team