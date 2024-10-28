import React from 'react'
import { HeaderAboutSection } from './AboutSection/HeaderAboutSection'
import { GridAbout } from './AboutSection/GridAbout';


export const AboutSection = () => {
  return (
    <div className='mt-36 pb-36 border-b border-gray-700 flex flex-col lg:w-[90%] xl:w-3/4 2xl:w-[65%]   w-[90%] sm:w-[45%] md:w-[40%] self-center'>
       <HeaderAboutSection/>


        <GridAbout/>
        
        
    </div>
  )
}
