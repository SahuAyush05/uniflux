import React from 'react'
import Header from '../components/Header'

const Landing = () => {
  return (
    <div>
        <Header/>
        <div className='flex items-center justify-center text-white flex-col gap-2 pt-64'>
           <p className='text-5xl'>The <span className='text-[1.4em]'> INTEROPERABILITY </span></p>
           <p className='text-5xl'>Layer of Upskilling </p>
           <p className='pt-4'>Connecting youth to resources  and oppotunities on global scale </p>
        </div>
    </div>
  )
}

export default Landing