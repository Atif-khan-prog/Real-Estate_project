import React from 'react'
import NavBar from './NavBar'

const Header = () => {
    return (
        <div className='min-h-screen mb-4 bg-cover bg-center flex items-center
    w-full overflow-hidden'
            style={{
                backgroundImage: "url('/header_img.png')"
            }} id='Header'>
            <NavBar />
            <div className='container text-center mx-auto py-4 px-6
        md:px-20 lg:px-32 text-white'>
                <h2 className="text-5xl sm:text-6xl md:text-8xl inline-block max-w-3xl">
                    Explore Homes That Fits Your Dream
                </h2>

                <div className='space-x-6 mt-16'>
                    <a href="#projects" className='border border-white px-8 py-3
                    rounded hover:bg-cyan-400 hover:border-none'>Projects</a>
                    <a href="#contact" className=' bg-cyan-500 px-8 py-3
                    rounded'>Contact US</a>
                </div>
            </div>
        </div>
    )
}

export default Header