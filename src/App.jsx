import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    
      <div className='w-full overflow-hidden '>
        <ToastContainer />
        <Header />
        <About />
        <Projects />
        <Testimonial />
        <Contact />
      </div>
    

  )
}

export default App