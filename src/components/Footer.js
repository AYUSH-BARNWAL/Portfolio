import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-dark font-medium text-lg dark:border-light sm:text-base z-10 '>
        <Layout classname='!py-8 flex items-center justify-between dark:text-light text-dark lg:flex-col lg:!py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className="flex items-center lg:py-2">
                Build with &nbsp; <span className='text-2xl text-primary dark:text-primaryDark'>&#x3C;&#x2F;&#x3E;</span>&nbsp; by Ayush Raj
            </div>
        </Layout>
    </footer>
  )
}

export default Footer