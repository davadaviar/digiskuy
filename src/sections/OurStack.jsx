import React from 'react';
import { techStack } from '../assets/images';
import Tilt from 'react-parallax-tilt';

const OurStack = () => {
  return (
    <div className='our-stack flex flex-1 justify-between items-center gap-44 px-24 mt-24'>
      <div className='stack-glass w-1/2'>
        <Tilt>
          <img src={techStack} alt='tech-stack' />
        </Tilt>
      </div>
      <h2 className='font-heading text-[120px] leading-heading'>Our Stack</h2>
      <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute left-[30%] -z-10 blur-template'></div>
    </div>
  )
}

export default OurStack