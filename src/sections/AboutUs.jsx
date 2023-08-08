import React from 'react'
import { videoPlayer } from '../assets/images'
import { aboutUs } from '../constants'
import { play } from '../assets/icons'

const AboutUs = () => {
  return (
    <section className='about-us -mt-96 md:-mt-56 px-6 md:px-24' id='2'>
        <div className='video-player w-full h-[245px] md:h-[640px] mx-auto md:relative'>
            <img src={videoPlayer} alt='video-player' />
            <img 
              className='w-[40px] h-[40px] md:w-[100px] md:h-[100px] relative md:absolute -top-1/2 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow' 
              src={play} 
              alt='play' 
            />
        </div>
        <div className={`about-us__body mt-12 md:mt-24 flex flex-col md:flex-row md:items-center gap-4 md:justify-between`}>
            <h2 className='font-heading text-[24px] md:text-[64px]'>{aboutUs.heading}</h2>
            <p className='text-[16px] md:text-[20px] w-full md:w-2/3 text-justify'>{aboutUs.body}</p>
        </div>
    </section>
  )
}

export default AboutUs