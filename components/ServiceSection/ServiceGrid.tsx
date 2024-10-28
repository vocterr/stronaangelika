import { Montserrat } from '@next/font/google';
import React from 'react'
import { ServicesColumn } from '../Home/MainContent/AboutSection/GridAbout/ServicesColumn';
import { CommunicationColumn } from './ServiceGrid/CommunicationColumn';
import { WebsiteColumn } from './ServiceGrid/WebsiteColumn';
import { QRColumn } from './ServiceGrid/QRColumn';

const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ["latin"],
  });

export const ServiceGrid = () => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-48 gap-y-6 lg:gap-y-0  items-center mt-10 ${montserrat.className}`}>
        

            <CommunicationColumn/>
            
            
            <WebsiteColumn/>
            
            
            <QRColumn/>


    </div>
  )
}
