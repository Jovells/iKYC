'use client';
import { GoldCoins, Logo } from '@/assets/index';
import React from 'react';
import Dex from './components/Dex';
import HorizontalNav from './components/HorizontalNav';
import Image from 'next/image'
import P2PMarket from './components/P2PMarket';

const page = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#000000] to-[#3384D9] relative flex flex-col justify-center items-center'>
      <HorizontalNav />
      <div className='flex flex-col justify-center items-center space-y-20 pt-28'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl text-white'><span>Seamless </span> <span className='text-[#1ABCFE]'>Swaps, </span></p>
          <p className='text-4xl text-white'><span className='text-[#FFB224]'>Zero </span> <span>Hassle.</span></p>
        </div>
        <Dex />
      </div>
      <div className='absolute bg-[#141618] border border-[#C3D5F140] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pl-0 rounded-lg w-[90%] h-[150px] z-50'>
        <div className="relative h-full pl-6">
          <div className='h-full flex flex-col justify-center'>
            <div className='flex flex-col justify-center'>
              <Image
                src={Logo}
                alt="logo"
                width={100}
                height={100}
              />
              <div className='ml-2'>
                <h1 className='text-white text-xl'>Smart Contract, Trade Immediately with return.</h1>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <Image src={GoldCoins} alt="bg" height={150} className='absolute right-0 top-0' />
        </div>
        <div className='w-full mt-6'>
          <P2PMarket />
        </div>
      </div>
      <div className='w-full bg-[#14161B] min-h-screen mt-28 pt-24'>
      </div>
    </div>
  );
};

export default page;
