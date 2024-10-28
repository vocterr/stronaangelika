import Image from 'next/image'
import React from 'react'
import { HeaderHero } from './HeroSection/HeaderHero'
import { HeroButtons } from './HeroSection/HeroButtons'

export const HeroSection = () => {
  return (
    <div id='home' className='border border-gray-400 dark:border-black rounded-xl shadow-xl py-10 lg:w-[75%] xl:w-2/3 2xl:w-[55%]  md:w-[80%] w-[90%] flex flex-col'>
      
      
      <HeaderHero/>


      <p className='self-center text-center font-semibold dark:text-gray-400 text-gray-700 '>Customized Digital Solutions for Small Businesses and Entrepreneurs.</p>
      
      
      <Image src="/images/xd.png" alt='xd' width={150} height={200} className='rounded-full self-center py-4'/>
      
      
      <p className='text-center px-8 dark:text-gray-200 text-gray-600'>"Empowering entrepreneurs and small businesses to achieve their digital goals with modern, efficient, and affordable solutions. Helping entrepreneurs and small businesses establish a strong online presence, optimize your costs, and connect with your audience effectively."</p>
      
      
      <HeroButtons/>
    
    </div>
  )
}
