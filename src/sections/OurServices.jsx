import React from 'react';
import CardService from '../components/CardService';
import { services } from '../constants';
import Tilt from 'react-parallax-tilt';
import { useParallax } from "react-scroll-parallax";

const OurServices = () => {

    const parallaxEasing = useParallax({
        easing: "easeOutQuad",
        translateX: [50, -100],
    });

    const parallaxCardEasing = useParallax({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, -100],
        translateY: [100],
    });

  return (
    <div className='our-services mt-12 md:mt-24 px-6 md:px-24' id='3'>
        <h2 
            ref={parallaxEasing.ref}
            className='font-heading text-[24px] md:text-[64px]'
        >
            {services.heading}
        </h2>
        <div 
            ref={parallaxCardEasing.ref}
            className='service-cards mt-7 md:mt-14 flex flex-1 flex-col gap-7 md:flex-row justify-between'
        >
            {
                services.provides.map((provide) => (
                    <Tilt>
                        <CardService 
                            {...provide}
                        />
                    </Tilt>
                ))
            }
        </div>
    </div>
  )
}

export default OurServices