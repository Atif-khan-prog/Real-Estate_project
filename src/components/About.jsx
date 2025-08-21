import React from 'react'
import { assets,footerInfo } from '../assets/assets'
import {motion} from 'framer-motion'
import { toast } from 'react-toastify'
const About = () => {
    return (
        <motion.div 
        initial={{opacity: 0, x:200}}
                transition={{duration: 1}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once:true}}
        className='flex flex-col justify-center items-center
    container mx-auto p-14 md:px-20 lg:pd-32
     w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold
        mb-2'>About <span className='underline underline-offset-4 decoration-1
        under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
            <div className='flex flex-col md:flex-row items-center
        md:items-start md:gap-20'>
                <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-md' />
                <div className='flex flex-col items-center md:items-start
            mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full
                2xl:pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gray-800'>10+</p>
                            <p>Years Of Experience</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>12+</p>
                            <p>Projects Completed</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>20+</p>
                            <p>Mn. Sq. Ft. Delivered</p>
                        </div>

                        <div>
                            <p className='text-4xl font-medium text-gray-800'>25+</p>
                            <p>On Going Projects </p>
                        </div>

                    </div>
                    <p className='my-10 max-w-lg'>
                        {footerInfo.info}</p>
                    <button className='bg-blue-600 text-white py-2 px-7 rounded cursor-pointer' onClick={() => toast.info('comming soon')}>Learn More</button>

                </div>
            </div>
        </motion.div>
    )
}

export default About