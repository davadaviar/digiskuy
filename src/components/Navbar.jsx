import React, { useState } from 'react'
import { navbar } from '../constants'
import { menu } from '../assets/icons'

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar bg-white/10 w-full flex justify-between items-center px-6 py-3 md:px-24 xl:px-40 md:py-3 fixed top-0 z-10'>
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
        <img onClick={() => setOpen(!open)} className='w-[30px] h-[30px] hover:cursor-pointer md:hidden' src={menu} alt='menu-icon' />
    </nav>
  )
}

export default Navbar