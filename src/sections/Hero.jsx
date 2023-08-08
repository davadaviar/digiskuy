import React from 'react'
import { styles } from '../style'
import { hero } from '../constants'
import { ornament } from '../assets/images'

const Hero = () => {
  return (
    <section className='hero-section px-6 md:px-24 w-full min-h-screen' id='1'>
        <div className='hero-headline mt-60'>
            <h1 className='font-heading text-[50px] md:text-[120px] text-center leading-[55px] md:leading-heading'>{hero.heading}</h1>
            <p className='text-center text-[16px] md:text-[20px] md:leading-body mt-12 w-3/4 mx-auto'>{hero.body}</p>
        </div>
        <div className='bg-blur w-[300px] h-[300px] md:w-[570px] md:h-[570px] bg-primary rounded-full absolute top-52 left-1/2 -translate-x-1/2 -z-10 blur-[200px] md:blur-template'></div>
    </section>
  )
}

export default Hero