import React from 'react'
import Team from '../components/Team'
import { ourTeam } from '../constants'

const OurTeam = () => {
  return (
    <section className='our-team mt-24 px-24 relative'>
        <div className='team-header flex justify-between items-center'>
            <h2 className='font-heading text-[64px]'>{ourTeam.heading}</h2>
            <p className='w-2/3 justify-end'>{ourTeam.body}</p>
        </div>
        <div className='team-container mt-12 grid grid-rows-1 grid-cols-4'>
            {
                ourTeam.team.map((member) => (
                    <Team
                        {...member}
                    />
                ))
            }
        </div>
        <div className='bg-blur w-[570px] h-[570px] bg-primary rounded-full absolute top-36 left-[30%] -z-10 blur-template'></div>
    </section>
  )
}

export default OurTeam