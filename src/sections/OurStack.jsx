import React from 'react';
import { techStack } from '../assets/images';
import Tilt from 'react-parallax-tilt';
import { useParallax } from "react-scroll-parallax";


const OurStack = () => {

  

  const parallaxEasingLeft = useParallax({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: [0, -260],
    translateY: [1100],
  });

  const parallaxEasingRight = useParallax({
    easing: "easeOutQuad",
    translateX: [-340, 100],
  });


  return (
    <section className='our-stack flex flex-1 flex-col-reverse md:flex-row md:justify-between md:items-center gap-7 md:gap-44 px-6 md:px-24 mt-12 md:mt-24'>
      <div className='stack-glass w-full md:w-1/2'>
        <Tilt>
          <img ref={parallaxEasingLeft.ref} src={techStack} alt='tech-stack' />
        </Tilt>
      </div>
      <h2 
        ref={parallaxEasingRight.ref}
        className='font-heading text-[40px] md:text-[120px] md:leading-heading'>Our Stack</h2>
      <div className='bg-blur w-[400px] h-[400px] bg-primary rounded-full absolute left-[10%] -z-10 blur-template'></div>
    </section>
  )
}

export default OurStack