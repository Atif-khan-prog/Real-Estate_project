import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projectsData.length)
    }
    const previousProject = () => {
        setCurrentIndex((prev) => prev === 0 ? projectsData.length - 1 : prev - 1);
    }



    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth > '1024') {
                setCardsToShow(projectsData.length)
            } else {
                setCardsToShow(1)
            }
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);
    return (
        <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            className='container mx-auto 
py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
            id='projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-20 text-center'>Projects
                <span className='underline underline-offset-4
             decoration-1 under font-light px-1'>Completed</span></h1>
            <p className='text-center text-gray-500 md-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Projects</p>

            {/* -Sider Buttons- */}
            <div className='flex justify-end items-center mb-8'>
                <button className='p-3 bg-gray-200 rounded-2xl mr-2 text-white'
                    aria-label='Previous Project' onClick={previousProject}>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>

                <button className='p-3 bg-gray-200 rounded-2xl mr-2 text-white'
                    aria-label='Next Project' onClick={nextProject}>
                    <img src={assets.right_arrow} alt="Nexg" />
                </button>
            </div>
            {/* Slider Container  */}
            <div className="overflow-hidden">
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
                    }}>
                    {projectsData.map((item, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 '>
                            <img src={item.image} alt='item.title' className='w-full
                            h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shodow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>
                                        {item.title}
                                    </h2>
                                    <p className='text-gray-500 text-sm'>
                                        {item.price} <span className='px-1'>|</span> {item.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </motion.div>
    )
}

export default Projects