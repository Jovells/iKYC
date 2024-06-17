'use client';

import React, { useState } from 'react';
import DataGrid from './DataGrid';
import supportedTokens from '../data/tokens.json'

const P2PMarket = () => {
    const [activeTab, setActiveTab] = useState('sell');

    const handleTabClick = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    return (
        <div className='relative w-full h-auto bg-[#14161B] rounded-lg p-6 px-0 flex flex-col justify-center items-start'>
            <h1 className='text-white py-8'>iExchange P2P Market</h1>
            <div className='flex flex-row justify-center items-center mb-4'>
                <div className='flex p-1 bg-[#1D2027] border border-[#C3D5F173] rounded-lg mr-4'>
                    <div
                        className={`cursor-pointer px-6 py-1 rounded-tl-lg rounded-bl-lg ${activeTab === 'sell' ? 'bg-[#1D2027] text-white' : 'bg-[#2A2D34] text-gray-500'
                            }`}
                        onClick={() => handleTabClick('sell')}
                    >
                        Sell
                    </div>
                    <div
                        className={`cursor-pointer px-6 py-1 rounded-tr-lg rounded-br-lg ${activeTab === 'buy' ? 'bg-[#1D2027] text-white' : 'bg-[#2A2D34] text-gray-500'
                            }`}
                        onClick={() => handleTabClick('buy')}
                    >
                        Buy
                    </div>
                </div>
                {
                    supportedTokens.map((items, i) => (
                        <div
                            key={i}
                            className="cursor-pointer px-4 py-1 rounded-tl-lg rounded-bl-lg bg-transparent text-white text-sm"
                            onClick={() => { }}
                        >
                            {items.name}
                        </div>
                    ))
                }
            </div>
            {activeTab === 'sell' && (
                <div className='w-full'>
                    <DataGrid />
                </div>
            )}
            {activeTab === 'buy' && (
                <div className='w-full'>
                    <DataGrid />
                </div>
            )}
        </div>
    );
};

export default P2PMarket;
