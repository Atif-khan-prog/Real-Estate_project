import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const NavBar = () => {
  const [crossBtn, setCrossBtn] = useState(false);
  useEffect(() =>{
    if(crossBtn)  document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  },[crossBtn])

  const closeMenu = () =>{
     setCrossBtn(false)
  }
  

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />

        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="menu">Home</a>
          <a href="#About" className="menu">About</a>
          <a href="#Projects" className="menu">Projects</a>
          <a href="#Testimonials" className="menu">Testimonials</a>
        </ul>

        <button onClick={() => toast.info('Coming Soon')}
        className="hidden md:block bg-white text-black px-8 py-2 rounded-full cursor-pointer hover:bg-gray-200">
          Sign Up
        </button>

        {/* Mobile menu button */}
        <button onClick={() => setCrossBtn(true)}>
          <img src={assets.menu_icon} className="md:hidden w-7" alt="menu" />
        </button>
      </div>

      {/* -----------------------Mobile Menu ------------------- */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-white transition-all duration-300 ease-in-out transform ${
          crossBtn ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <button onClick={closeMenu}>
            <img src={assets.cross_icon} className="w-6" alt="close" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium cursor-pointer">
          <a href="#Header" className="px-4 py-2 rounded-full inline-block" onClick={closeMenu}>Home</a>
          <a href="#About" className="px-4 py-2 rounded-full inline-block" onClick={closeMenu}>About</a>
          <a href="#Projects" className="px-4 py-2 rounded-full inline-block" onClick={closeMenu}>Projects</a>
          <a href="#Testimonials" className="px-4 py-2 rounded-full inline-block" onClick={closeMenu}>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
