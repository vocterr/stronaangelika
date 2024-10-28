import React from 'react'
import { BsGlobe } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { MdOutlineDarkMode } from 'react-icons/md'
import { DarkToggle } from './TopbarRight/DarkToggle'

export const TopbarRight = () => {
    return (
        <div className='flex md:space-x-2 sm:space-x-1 space-x-2 dark:text-gray-300 items-center'>

            <BsGlobe className='topbarright-icon' />
            <DarkToggle/>
        </div>
    )
}
