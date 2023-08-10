import React from 'react';
import { mail } from '../assets/icons';
import { useParallax } from 'react-scroll-parallax';

const HaveProject = () => {

  const parallaxEasingCaption = useParallax({
    easing: 'easeOutQuad',
    translateX: [100, -100],
  });

  return (
    <section className='have-project relative text-center w-3/4 mx-auto mt-28 md:mt-36'>
        <h1 
          ref={parallaxEasingCaption.ref}
          className='font-heading text-[40px] md:text-[120px] md:leading-[150px]'>
            <span className='text-primary'>Have a project?</span> Let's Discuss
        </h1>
        <div className='get-in__touch mt-12 md:mt-24'>
            <img 
              className='w-[60px] h-[60px] md:w-[130px] md:h-[120px] mx-auto px-2 py-2 bg-primary drop-shadow-normal' 
              src={mail} 
              alt='mail' 
            />
        </div>
        <div className='bg-blur w-[300px] h-[300px] bg-primary rounded-full absolute left-[20%] -z-10 blur-template'></div>
    </section>
  )
}

export default HaveProject