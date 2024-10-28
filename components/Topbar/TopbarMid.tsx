import Link from 'next/link'
import React from 'react'
import { BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { GrContactInfo, GrServices } from 'react-icons/gr'

export const TopbarMid = () => {
    return (
        <div className=' space-x-2 dark:text-gray-300 hidden sm:flex text-mediumblue'>
            <Link href="#top" className="topbar-icon">
                <FaHome className="h-5 w-5" />
                <p>Home</p>
            </Link>

            <Link href="#about" className="topbar-icon">
                <BsInfoCircleFill className="h-5 w-5" />
                <p>About</p>
            </Link>

            <Link href="#services" className="topbar-icon">
                <GrServices className="h-5 w-5" />
                <p>Services</p>
            </Link>

            <Link href="#contact" className="topbar-icon">
                <GrContactInfo className="h-5 w-5" />
                <p>Contact</p>
            </Link>
        </div>
    )
}
