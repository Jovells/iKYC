'use client';

import { AngleDown, Eth, Settings, SwapIcon } from '@/assets/index';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';



const Dex = () => {
    const [activeTab, setActiveTab] = useState('swap'); // State to manage active tab

    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    return (
        <div className='relative w-[500px] h-auto bg-[#14161B] rounded-lg p-6 flex flex-col justify-center items-center'>
            <div className='w-full flex flex-row justify-between items-center mb-4'>
                <div className='flex flex-row'>
                    <div
                        className={`cursor-pointer px-4 py-2 pl-0 rounded-tl-lg rounded-bl-lg ${activeTab === 'swap' ? 'bg-transparent text-white' : 'bg-transparent text-gray-500'
                            }`}
                        onClick={() => handleTabClick('swap')}
                    >
                        Swap
                    </div>
                    <div
                        className={`cursor-pointer px-4 py-2  pl-0rounded-tr-lg rounded-br-lg ${activeTab === 'limit' ? 'bg-transparent text-white' : 'bg-transparent text-gray-500'
                            }`}
                        onClick={() => handleTabClick('limit')}
                    >
                        Limit
                    </div>
                </div>
                <Image
                    src={Settings}
                    alt="settings"
                    width={20}
                    height={20}
                />
            </div>
            <div className='w-full'>
                <div className='flex flex-col mt-2 px-3 py-3 bg-[#1D2027] rounded-lg'>
                    <div className='text-gray-500'>Sell</div>
                    <div className='flex flex-row justify-between items-center py-3'>
                        <input type="text" value={0} className="bg-transparent outline-none border-none text-white" />
                        <div className='flex flex-row justify-between items-center space-x-3'>
                            <Image
                                src={Eth}
                                alt="icon"
                                width={15}
                                height={50}
                            />
                            <div className='text-white'>
                                ETH
                            </div>
                            <Image
                                src={AngleDown}
                                alt="dropdown"
                                width={20}
                                height={20}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <Image
                src={SwapIcon}
                alt="Logo"
                width={50}
                height={50}
                className="absolute z-50 flex justify-center items-start"
            />
            <div className='w-full'>
                <div className='flex flex-col mt-2 px-3 py-3 bg-[#1D2027] rounded-lg'>
                    <div className='text-gray-500'>Buy</div>
                    <div className='flex flex-row justify-between items-center py-3'>
                        <input type="text" value={0} className="bg-transparent outline-none border-none text-white" />
                        <div className='flex flex-row justify-between items-center space-x-3'>
                            <Image
                                src={Eth}
                                alt="icon"
                                width={15}
                                height={15}
                            />
                            <div className='text-white'>
                                ETH
                            </div>
                            <Image
                                src={AngleDown}
                                alt="dropdown"
                                width={20}
                                height={20}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <Button text='Connect Wallet' className='w-full mt-3' />
        </div>
    );
};

export default Dex;
