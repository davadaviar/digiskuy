import React from 'react'
import { footer } from '../constants'

const Footer = () => {
  return (
    <footer className='footer-container flex flex-col gap-14 mt-48 px-24 w-full text-center'>
        <div className='footer-top flex justify-between items-center'>
            <h3 className='logo font-heading text-[40px]'>Digiskuy</h3>
            <ul className='footer-link flex gap-8'>
                {
                    footer.links.map((link) => (
                        <li className='text-[16px]'>
                            <a href={`#${link.id}`}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            <div className='socmed flex gap-5'>
                {
                    footer.cta.map((icon) => (
                        <img className='w-[70px] h-[70px]' src={icon.icon} alt={icon.altText} />
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