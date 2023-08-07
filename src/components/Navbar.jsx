import React from 'react'
import { navbar } from '../constants'

const Navbar = () => {
  return (
    <nav className='navbar w-full flex justify-between items-center px-24 py-10 fixed top-0 z-10'>
        <h3 className='logo font-heading text-[40px]'>Digiskuy</h3>
        <ul className='navlink flex flex-1 gap-8 justify-center'>
            {
                navbar.links.map((link) => (
                    <li className='text-[16px]'>{link}</li>
                ))
            }
        </ul>
        <a href='#' className='cta px-5 py-3 bg-primary drop-shadow-normal'>{navbar.cta}</a>
    </nav>
  )
}

export default Navbar