import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/banner/Banner'
import Resume from './Components/resume/Resume'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'
import About from './Components/about/About'


function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
      <Navbar/>  
      <Banner/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>


      </div>
      
    </div>
  )
}

export default App
