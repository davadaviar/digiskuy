import React from 'react'
import { footer } from '../constants'

const Footer = () => {
  return (
    <footer className='footer-container flex flex-col gap-8 md:gap-14 mt-32 md:mt-48 px-6 md:px-24 w-full text-center'>
        <div className='footer-top flex flex-col gap-8 md:flex-row justify-between items-center'>
            <h3 className='logo font-heading text-[40px]'>Digiskuy</h3>
            <ul className='footer-link flex flex-col md:flex-row gap-4 md:gap-8'>
                {
                    footer.links.map((link) => (
                        <li className='text-[16px]'>
                            <a href={`#${link.id}`}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='socmed flex gap-3 md:gap-5'>
                {
                    footer.cta.map((icon) => (
                        <img className='w-[40px] h-[40px] md:w-[70px] md:h-[70px]' src={icon.icon} alt={icon.altText} />
                    ))
                }
            </div>
        </div>
        <hr className='text-white'/>
        <p className='text-[16px] mb-7'>Copyright © 2023 by Digiskuy</p>
    </footer>
  )
}

export default Footer