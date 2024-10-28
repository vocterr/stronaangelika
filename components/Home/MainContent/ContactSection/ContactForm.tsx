import React from 'react'

export const ContactForm = () => {
  return (
    <form className='flex flex-col '>
        <label htmlFor="First Name" className='ml-4 text-gray-700  dark:text-gray-500'> First Name</label>
        <input
            className='rounded-full px-4 py-3  dark:text-gray-200 bg-transparent border border-black mb-6 dark:focus:outline-none'
        />
        <label htmlFor="Last Name" className='ml-4 text-gray-700 dark:text-gray-500'> Last Name</label>
        <input
            className='rounded-full dark:text-gray-200 px-4 py-3 bg-transparent border border-black mb-6 dark:focus:outline-none'
        />
        <label htmlFor="Email" className='ml-4 text-gray-700 dark:text-gray-500'> Email</label>
        <input
            className='rounded-full px-4 py-3 dark:text-gray-200 bg-transparent border border-black mb-6 dark:focus:outline-none'
        />
        <label htmlFor="Message" className='ml-4 text-gray-700 dark:text-gray-500 '>Message</label>
        <textarea
            className=' rounded-lg px-8 py-3 h-64 dark:text-gray-200  bg-transparent border border-black mb-6 custom-scrollbar dark:focus:outline-none'
        />
        <button className='bg-gradient-to-r from-orange-700 to-orange-500 font-semibold hover:scale-[1.05] transition transform  duration-150 rounded-full 2xl:w-1/5 w-1/2 sm:w-[40%] lg:w-[30%] py-2 self-center'>Send Message</button>
        </form>
  )
}
