import React from 'react'
import { Montserrat } from '@next/font/google';
import { ExperienceColumn } from './GridAbout/ExperienceColumn';
import { SkillsColumn } from './GridAbout/SkillsColumn';
import { ServicesColumn } from './GridAbout/ServicesColumn';


const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ["latin"],
  });


export const GridAbout = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 xl:gap-x-32 2xl:gap-x-32 gap-y-6 lg:gap-y-0  items-center mt-10 ${montserrat.className}`}>
           
           
            <ExperienceColumn/>

            <SkillsColumn/>

            <ServicesColumn/>
        
        
    </div>
  )
}
