import React from 'react'
import { mail } from '../assets/icons'

const HaveProject = () => {
  return (
    <section className='have-project relative text-center w-3/4 mx-auto mt-36'>
        <h1 className='font-heading text-[120px] leading-[150px]'>
            <span className='text-primary'>Have a project?</span> Let's Discuss
        </h1>
        <div className='get-in__touch mt-24'>
            <img className='w-[130px] h-[120px] mx-auto px-2 py-2 bg-primary drop-shadow-normal' src={mail} alt='mail' />
        </div>
        <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute top-44 left-[30%] -z-10 blur-template'></div>
    </section>
  )
}

export default HaveProject