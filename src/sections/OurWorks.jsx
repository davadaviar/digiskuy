import React from 'react';
import { ourWorks } from '../constants';
import CardWorks from '../components/CardWorks';
import Tilt from 'react-parallax-tilt';

const OurWorks = () => {
  return (
    <section className='our-works mt-12 md:mt-24 px-6 md:px-24 text-center relative' id='4'>
        <h2 className='font-heading text-[40px] md:text-[64px]'>{ourWorks.heading}</h2>
        <div className='works-container w-3/4 mx-auto mt-7 md:mt-14 grid md:grid-rows-2 md:grid-cols-2 gap-8'>
            {
                ourWorks.works.map((work) => (
                    <Tilt>
                        <CardWorks {...work} />
                    </Tilt>
                ))
            }
        </div>
        <div className='bg-blur w-[400px] h-[400px] bg-primary rounded-full absolute top-12 left-[10%] -z-10 blur-template'></div>
    </section>
  )
}

export default OurWorks