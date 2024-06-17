'use client';
import React from 'react';
import Dex from './components/Dex';
import HorizontalNav from './components/HorizontalNav';

const page = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] relative flex flex-col justify-center items-center space-y-28'>
      <HorizontalNav />
      <div className='flex flex-col justify-center items-center space-y-20 pt-20'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl text-white'><span>Seamless </span> <span className='text-[#1ABCFE]'>Swaps, </span></p>
          <p className='text-4xl text-white'><span className='text-[#FFB224]'>Zero </span> <span>Hassle.</span></p>
        </div>
        <Dex />
      </div>
      <div className='w-[90%] min-h-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-6 rounded-lg'>
        center this div
      </div>
      <div className='w-full bg-[#14161B] min-h-screen'>
        kkk
      </div>
    </div>
  );
};

export default page;
