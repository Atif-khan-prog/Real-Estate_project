import React from 'react'
import { assets, footerInfo } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
    overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start text-white'>
                <div className='w-full md:w-1/3 mb-8 md:mb-8'>
                    <img src={assets.logo_dark} alt="Logo" />
                    <p className='text-gray-400 mt-4'>
                        {footerInfo.info}
                    </p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>
                        Company
                    </h3>
                    <ul className='text-gray-500 flex flex-col space-x-2.5 gap-1.5'>
                        <a href="#header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className=' w-full md:w-1/3 '>
                    <h3 className='text-white text-lg font-bold mb-4'>
                        Subscribe To Our Newsletter
                    </h3>
                    <p className='text-gray-400 mx-w-80'>
                        {footerInfo.newsInfo}
                    </p>
                    <div className='flex gap-2 mt-3'>
                        <input type="email" placeholder='Enter Your Email' 
                        className='p-2 rounded bg-gray-800 text-gray-400 border
                        border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button className='py-2 px-4 mx-2 cursor-pointer hover:bg-blue-400 rounded bg-blue-500'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center
            text-gray-500'>
                {footerInfo.copyright}
            </div>
        </div>
    )
}

export default Footer