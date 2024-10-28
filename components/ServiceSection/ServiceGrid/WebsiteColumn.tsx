import React from 'react'

export const WebsiteColumn = () => {
  return (
    <div className='servicediv pt-6 pb-4 2xl:pb-0 px-2 bg-gray-100 '>
                <h1 className='text-center text-lg font-bold mb-6 2xl:mb-1 3xl:mb-6 dark:text-cyan-200'>Website Creation & Virtual CVs</h1>
                
                <p className='text-center text-gray-900 mb-2 dark:text-gray-400'>Custom website creation, virtual CVs, and virtual business cards to increase your digital presence.</p>

                <div className='flex mb-4 space-x-1 items-center text-green-600 self-center font-semibold'>
                    <p>Starting at</p>
                    <h2 className='text-3xl font-bold'>49€</h2>
                </div>

                <button className='servicebutton'>Learn More</button>

            </div>
  )
}
