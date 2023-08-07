import React from 'react'
import { mail } from '../assets/icons'

const HaveProject = () => {
  return (
    <section className='have-project text-center w-3/4 mx-auto mt-36'>
        <h1 className='font-heading text-[120px] leading-[150px]'>
            <span className='text-primary'>Have a project?</span> Let's Discuss
        </h1>
        <div className='get-in__touch mt-24'>
            <img className='w-[130px] h-[120px] mx-auto px-2 py-2 bg-primary drop-shadow-normal' src={mail} alt='mail' />
        </div>
    </section>
  )
}

export default HaveProject