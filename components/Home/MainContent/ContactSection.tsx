import React, { Suspense } from 'react'
import { Montserrat } from 'next/font/google';
import { ContactForm } from './ContactSection/ContactForm';


const montserrat = Montserrat({
    weight: ['400', '600'],
    subsets: ["latin"],
  });


export const ContactSection = () => {
  return (
    <div className='mt-24 px-4 dark:border-black    border-gray-300 shadow-lg shadow-black py-8  border  flex flex-col lg:w-[60%] xl:w-[55%] 2xl:w-1/2   w-[90%] sm:w-[75%] md:w-[65%] self-center'>
        <div className={`text-center dark:text-cyan-200 relative mb-8 3xl:text-2xl text-lg font-semibold ${montserrat.className}`}>Reach Out for Personalized Solutions and Support
            <div id='contact' className='h-4 w-4 absolute -top-52 bg-transparent'></div>
        </div>
        
        
        
        <Suspense>
        <ContactForm/>
        </Suspense>
    </div>
  )
}
