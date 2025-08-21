import React from 'react'
import { assets, footerInfo } from '../assets/assets'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Privacy from './Privacy'
const Footer = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);
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
                        <a href="#contact" className='hover:text-white'>Contact Us</a>
                        <a className='hover:text-white cursor-pointer' onClick={() => setShowPrivacy(true)}>Privacy Policy</a>
                    </ul>
                </div>
                <div className=' w-full md:w-1/3 '>
                    <h3 className='text-white text-lg font-bold mb-4'>
                        Subscribe To Our Newsletter
                    </h3>
                    <p className='text-gray-400 mx-w-80'>
                        {footerInfo.newsInfo}
                    </p>
                    <div className='flex gap-2 mt-3 sm:mt-2'>

                        <form>
                            <input type="email" placeholder='Enter Your Email'
                                className='p-2 rounded bg-gray-800 text-gray-400 border
                        border-gray-700 focus:outline-none w-full md:w-auto' required />
                            <button className='py-2 px-4 mx-2 cursor-pointer
                         hover:bg-blue-400 rounded
                          bg-blue-500'
                                onClick={() => toast.success('Subscribed Successfully')}>Subscribe</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className='border-t border-gray-700 py-4 mt-10 text-center
            text-gray-500'>
                Copyright 2025  &copy; Muhammad Atif. All Right Reserved.
            </div>
            <Privacy open={showPrivacy} onClose={() => setShowPrivacy(false)} />
        </div>
    )
}

export default Footer