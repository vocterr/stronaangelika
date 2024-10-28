import React from 'react'
import { Montserrat } from '@next/font/google';


const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ["latin"],
  });


export const HeaderAboutSection = () => {
  return (
    <div  className={` relative text-center dark:text-cyan-200 lg:text-2xl text-xl font-semibold tracking-wide 2xl:-mb-2  mt-8 lg:mt-0 -mb-4   ${montserrat.className}`}>
        Meet <span className="text-blue-600">Angelika</span>: Your Partner in Efficient Logistics and Digital Transformation
        <div id='about' className='h-4 w-4 absolute -top-52 bg-transparent'></div>
      </div>
  )
}
