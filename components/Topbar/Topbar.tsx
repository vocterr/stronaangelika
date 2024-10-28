import React from 'react'
import { BiGlobe } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'
import { CgDarkMode } from 'react-icons/cg'
import { FaHome } from 'react-icons/fa'
import { FcAbout, FcSettings } from 'react-icons/fc'
import { FiSettings } from 'react-icons/fi'
import { GrContactInfo, GrServices } from 'react-icons/gr'
import { IoSettings } from 'react-icons/io5'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { PiGlobeFill } from 'react-icons/pi'
import { RiGlobeFill } from 'react-icons/ri'
import { SlSettings } from 'react-icons/sl'
import { TbGlobeFilled } from 'react-icons/tb'
import { TopbarLogo } from './TopbarLogo'
import { TopbarMid } from './TopbarMid'
import { TopbarRight } from './TopbarRight'

export const Topbar = () => {
  return (
    <div className="h-16 fixed w-full dark:bg-darkbackground  bg-gray-200 z-50">
            <div className="flex md:px-4 px-2 sm:px-2  max-w-screen-xl mx-auto items-center h-full border-b border-mediumblue justify-between">
              
              

                <TopbarLogo/>
              
              
              
                <TopbarMid/>
            


                <TopbarRight/>
            
            
              
            </div>
          </div>
  )
}
