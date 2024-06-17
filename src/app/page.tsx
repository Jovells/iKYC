'use client';
import React from 'react'
import Dex from './components/Dex'
import HorizontalNav from './components/HorizontalNav'

const page = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9]'>
      <HorizontalNav />
      <div className='flex flex-col justify-center items-center space-y-20 pt-28'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl text-white'><span>Seamless </span> <span className='text-[#1ABCFE]'>Swaps, </span></p>
          <p className='text-4xl text-white'><span className='text-[#FFB224]'>Zero </span> <span>Hassle.</span></p>
        </div>
        <Dex />
      </div>
    </div>
  )
}

export default page