import Link from 'next/link'
import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { GrContactInfo, GrServices } from 'react-icons/gr'

export const Bottombar = () => {
  return (
    <div className='fixed dark:bg-darkbackground dark:text-cyan-200 bg-gray-200 z-50 bottom-0 w-full justify-center  text-black font-semibold flex sm:hidden'>
            <Link href="#top" className="bottombar-icon ">
                <FaHome className="h-7 w-7  relative bottom-1" />
                <p className='absolute bottom-0 text-sm z-50'>Home</p>
            </Link>

            <Link href="#about" className="bottombar-icon">
                <BsInfoCircleFill className="h-7 w-7 relative bottom-1" />
                <p className='absolute bottom-0 text-sm'>About</p>
            </Link>

            <Link href="#services" className="bottombar-icon">
                <GrServices className="h-7 w-7 relative bottom-1" />
                <p className='absolute bottom-0 text-sm'>Services</p>
            </Link>

            <Link href="#contact" className="flex py-4 relative w-1/4 border-black dark:hover:bg-gray-800  items-center font-semibold cursor-pointer hover:bg-blue-300 transition-colors transform duration-150 flex-col ">
                <GrContactInfo className="h-7 w-7 relative bottom-1" />
                <p className='absolute bottom-0 text-sm'>Contact</p>
            </Link>
    </div>
  )
}
