import Link from 'next/link'
import React from 'react'

export const HeroButtons = () => {
  return (
    <div className='flex justify-between items-center sm:w-[90%] lg:w-4/5 sm:space-x-2 w-[95%] self-center sm:mt-16 mt-8 font-semibold'>
        
        
        <a href='#about' className='herobutton hidden text-center sm:flex justify-center'>
          Learn More About Me
        </a>
        <a href='#services' className='herobutton hidden sm:flex justify-center'>
          Explore My Services
        </a>
        <a href='#contact' className='herobutton hidden sm:flex justify-center'>
          Get in Touch
        </a>

        
        
        
        <div className='flex space-x-2 w-full sm:hidden '>
          
          
          <a href='#about' className=' herobutton text-center'>
            About Me
          </a>

          <a href='#services' className=' herobutton text-center'>
            My Services
          </a>

          <a href="#contact" className=' herobutton text-center'>
          Get in Touch
          </a>
        
        
        </div>

        
      </div>
  )
}
