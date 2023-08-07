import React from 'react'
import { videoPlayer } from '../assets/images'
import { aboutUs } from '../constants'
import { play } from '../assets/icons'

const AboutUs = () => {
  return (
    <section className={`about-us -mt-56 px-24`} id='2'>
        <div className='video-player w-full h-[640px] mx-auto relative'>
            <img src={videoPlayer} alt='video-player' />
            <img className='w-[100px] h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow' src={play} alt='play' />
        </div>
        <div className={`about-us__body mt-24 flex items-center justify-between`}>
            <h2 className='font-heading text-[64px]'>{aboutUs.heading}</h2>
            <p className='text-[20px] w-2/3 text-justify'>{aboutUs.body}</p>
        </div>
    </section>
  )
}

export default AboutUs