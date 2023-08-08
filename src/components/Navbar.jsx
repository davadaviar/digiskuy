import React from 'react'
import { navbar } from '../constants'
import { menu } from '../assets/icons'

const Navbar = () => {
  return (
    <nav className='navbar w-full flex justify-between items-center px-6 py-7 md:px-24 md:py-10 fixed top-0 z-10'>
        <h3 className='logo font-heading text-[30px] md:text-[40px]'>Digiskuy</h3>
        <ul className='navlink hidden md:flex gap-8'>
            {
                navbar.links.map((link) => (
                    <li className='text-[20px]'>
                      <a href={`#${link.id}`}>{link.name}</a>
                    </li>
                ))
            }
        </ul>
        <a href='#' className='cta hidden md:block px-5 py-3 bg-primary drop-shadow-normal'>{navbar.cta}</a>
        <img className='w-[30px] h-[30px] md:hidden' src={menu} alt='menu-icon' />
    </nav>
  )
}

export default Navbar