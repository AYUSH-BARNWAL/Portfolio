import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { mode } from './Navbar'



const HireMe = () => {
  return (
    <div className='absolute left-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-8 
    lg:left-auto lg:top-0 lg:bottom-auto lg:absolute sm:right-1'>
        <div className='w-48 h-auto flex items-center justify-center relative lg:w-24'>
          <div className='dark:b'></div>
           <Image src='/imag.svg' alt='' width={150} height={150}
               className='text-dark animate-spin-slow dark:text-light dark:fill-light fill-dark'
              /> 
           <Link href='' className='flex items-center justify-center -translate-x-1/2 -translate-y-1/2
           absolute left-1/2 top-1/2 bg-dark text-light rounded-full aspect-square p-2.5 text-lg
           hover:bg-light hover:text-dark transition-all duration-100 hover:border-2 hover:border-dark font-medium
           dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light
           dark:hover:border-light border-2 border-transparent lg:text-[9px] lg:w-12 lg:h-12 lg:p-1'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe