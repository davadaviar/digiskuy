import React from 'react';
import { navbar } from '../constants';

const Button = () => {
  return (
    <a 
        href='#' 
        className='cta text-[16px] md:text-[18px] px-3 py-2 md:px-5 md:py-2 bg-primary drop-shadow-normal text-center'
    >
        {navbar.cta}
    </a>
  )
}

export default Button