import React from 'react';
import CardService from '../components/CardService';
import { services } from '../constants';
import Tilt from 'react-parallax-tilt';

const OurServices = () => {
  return (
    <div className='our-services mt-24 px-24'>
        <h2 className='font-heading text-[64px]'>{services.heading}</h2>
        <div className='service-cards mt-14 flex flex-1 justify-between'>
            {
                services.provides.map((provide) => (
                    <Tilt>
                        <CardService 
                            title={provide.title} 
                            img={provide.img} 
                            altText={provide.altText}
                        />
                    </Tilt>
                ))
            }
        </div>
    </div>
  )
}

export default OurServices