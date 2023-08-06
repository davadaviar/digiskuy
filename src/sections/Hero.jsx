import React from 'react'
import { styles } from '../style'
import { hero } from '../constants'
import { ornament } from '../assets/images'

const Hero = () => {
  return (
    <section className={`${styles.paddingX} mt-24`}>
        <h1 className='font-heading text-[120px] text-center leading-heading'>{hero.heading}</h1>
        <p className='text-center leading-body mt-12 w-3/4 mx-auto'>{hero.body}</p>
        <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute top-36 left-[30%] -z-10 blur-template'></div>
        <img className='w-[350px] h-[350px] absolute overflow-clip -left-44 top-1/2 -z-10' src={ornament} alt='ornamnet' />
        <img className='w-[350px] h-[350px] absolute overflow-x-clip -right-44 top-32 -z-10' src={ornament} alt='ornamnet' />
    </section>
  )
}

export default Hero