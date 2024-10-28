import { Montserrat } from '@next/font/google';
import React from 'react'


const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ["latin"],
  });
  

export const ServiceHeader = () => {
  return (
    <div className={`text-center dark:text-cyan-200 relative lg:text-2xl text-xl font-semibold tracking-wide 2xl:-mb-2  mt-8 lg:mt-0 -mb-4   ${montserrat.className}`}>
      Explore a variety of customized solutions tailored to your digital needs.
      <div id='services' className='h-4 w-4 absolute -top-52 bg-transparent'></div>
    </div>
  )
}
