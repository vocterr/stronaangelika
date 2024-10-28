import React from 'react'

export const CommunicationColumn = () => {
  return (
    <div className='servicediv pt-6 pb-4 2xl:pb-0 px-2  bg-gray-100  dark:bg-darkbackground dark:border-black'>
                <h1 className='text-center text-lg font-semibold mb-6 2xl:mb-1 3xl:mb-6 dark:text-cyan-200'>Digital Communication Boost</h1>
                <p className='text-center text-gray-900 mb-2 dark:text-gray-400'>Upgrade your business communication through tailored, impactful digital strategies.</p>

                <div className='flex mb-4 space-x-1 items-center text-green-600 self-center font-semibold'>
                    <p>Starting at</p>
                    <h2 className='text-3xl font-bold'>6€</h2>
                </div>

                <button className='servicebutton'>Learn More</button>
    </div>
  )
}
