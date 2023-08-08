import React from 'react';
import { techStack } from '../assets/images';
import Tilt from 'react-parallax-tilt';

const OurStack = () => {
  return (
    <section className='our-stack flex flex-1 md:justify-between md:items-center md:gap-44 px-6 md:px-24 md:mt-24'>
      <div className='stack-glass w-full md:w-1/2'>
        <Tilt>
          <img src={techStack} alt='tech-stack' />
        </Tilt>
      </div>
      <h2 className='font-heading md:text-[120px] leading-heading'>Our Stack</h2>
      <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute left-[30%] -z-10 blur-template'></div>
    </section>
  )
}

export default OurStack