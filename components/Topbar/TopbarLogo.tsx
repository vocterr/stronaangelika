import Link from 'next/link'
import React from 'react'

export const TopbarLogo = () => {
  return (
    <Link href="#home" className='flex cursor-pointer text-mediumblue items-center text-2xl font-semibold bg-gradient-to-r from-warmorange to-mediumblue bg-clip-text text-transparent'>
                <h1 className='lg:text-3xl'>AD</h1>
                <h2 className='hidden  lg:flex'>APT</h2>
                <h1 className='lg:text-3xl'>K</h1>
                <h2 className='hidden lg:flex'>ONNEX</h2>
              </Link>
  )
}
