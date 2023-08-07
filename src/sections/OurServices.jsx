import React from 'react';
import CardService from '../components/CardService';
import { services } from '../constants';
import Tilt from 'react-parallax-tilt';

const OurServices = () => {
  return (
    <div className='our-services mt-24 px-24' id='3'>
        <h2 className='font-heading text-[64px]'>{services.heading}</h2>
        <div className='service-cards mt-14 flex flex-1 justify-between'>
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