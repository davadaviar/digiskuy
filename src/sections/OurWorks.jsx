import React from 'react';
import { ourWorks } from '../constants';
import CardWorks from '../components/CardWorks';
import Tilt from 'react-parallax-tilt';

const OurWorks = () => {
  return (
    <div className='our-works mt-24 px-24 text-center relative'>
        <h2 className='font-heading text-[64px]'>{ourWorks.heading}</h2>
        <div className='works-container w-3/4 mx-auto mt-14 grid grid-rows-2 grid-cols-2 gap-8'>
            {
                ourWorks.works.map((work) => (
                    <Tilt>
                        <CardWorks img={work.img} altText={work.altText} />
                    </Tilt>
                ))
            }
        </div>
        <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute top-60 left-[30%] -z-10 blur-template'></div>
    </div>
  )
}

export default OurWorks