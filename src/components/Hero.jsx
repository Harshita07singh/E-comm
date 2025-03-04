import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-blue-900'>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-gray-600'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-blue-900'></p>
                <p className='font-medium text-sm md:text-base text-violet-950'>OUR BESTSELLERS </p>
            </div>
            <h1 className = 'prata-regular text-3x1 sm:py-3 lg:text-5x1 leading-relaxed text-violet-950'>  Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base text-violet-950'> SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-blue-900'></p>

            </div>
        </div>
        </div>
        <img className='w-full sm:w-1/2 ' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero