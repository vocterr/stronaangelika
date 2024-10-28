import React from 'react'
import { Montserrat } from '@next/font/google';
import { ServiceGrid } from '@/components/ServiceSection/ServiceGrid';
import { ServiceHeader } from '@/components/ServiceSection/ServiceHeader';


const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ["latin"],
  });

export const ServicesSection = () => {
  return (
    <div className=' mt-24  border-b border-black pb-36  flex flex-col lg:w-[90%] xl:w-3/4 2xl:w-[81%]   w-[73%] sm:w-[43%] md:w-[35%] self-center'>
        
            
            <ServiceHeader/>

            <ServiceGrid/>
            
            

        </div>
  )
}
