import React from 'react'
import { companies } from '../constants'

const Companies = () => {
  return (
    <div className='text-xl bg-[#1D1E2F] w-full lg:px-14 px-10 py-10'>
        <div className='flex justify-evenly items-center flex-wrap gap-5 lg:gap-10'>
            {companies.map((company, index) => (
                company.id === '2' ? <img src={company.src} alt={company.title} key={company.id} className='w-[70px] lg:w-[100px]' /> : <img src={company.src} alt={company.title} key={company.id} className='w-[100px] lg:w-[150px] ' />
            ))}
        </div>
    </div>
  )
}

export default Companies