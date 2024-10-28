"use client";

import React, { useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md'

export const DarkToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme === "dark") {
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }
  return (
    <div>
        {isDarkMode ? <BsSun onClick={toggleDarkMode} className='topbarright-icon'/> : <MdOutlineDarkMode onClick={toggleDarkMode} className='text-gray-700 md:py-[4px] py-1 rounded-full hover:bg-gray-300 cursor-pointer transition-all duration-150 hover:scale-[1.08] md:h-10 md:w-10 h-[34px] w-[34px]' /> }
    </div>
        
  )
}
