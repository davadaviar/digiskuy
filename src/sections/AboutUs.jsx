import React from 'react'
import { videoPlayer } from '../assets/images'
import { aboutUs } from '../constants'

const AboutUs = () => {
  return (
    <section className={`about-us -mt-56 px-24`}>
        <img className='w-full h-[640px] mx-auto' src={videoPlayer} alt='video-player' />
        <div className={`about-us__body mt-24 flex items-center justify-between`}>
            <h2 className='font-heading text-[64px]'>{aboutUs.heading}</h2>
            <p className='text-[20px] w-2/3 text-justify'>{aboutUs.body}</p>
        </div>
    </section>
  )
}

export default AboutUs