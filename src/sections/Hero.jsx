import React from 'react'
import { styles } from '../style'
import { hero } from '../constants'
import { ornament } from '../assets/images'

const Hero = () => {
  return (
    <section className={`hero-section ${styles.paddingX} w-full min-h-screen`} id='1'>
        <div className='hero-headline mt-60'>
            <h1 className='font-heading text-[120px] text-center leading-heading'>{hero.heading}</h1>
            <p className='text-center leading-body mt-12 w-3/4 mx-auto'>{hero.body}</p>
        </div>
        <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute top-36 left-[30%] -z-10 blur-template'></div>
    </section>
  )
}

export default Hero