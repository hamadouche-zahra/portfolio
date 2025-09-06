import React from 'react'
import Title from './../layouts/Title'
import { FaCode, FaServer, FaMobile, FaLaptopCode } from 'react-icons/fa'
import { Link } from 'react-scroll'

function About() {
  return (
    <section id='about' className='w-full py-12 sm:py-16 md:py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
        <Title title="" des="À Propos"/>
      </div>
      
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Introduction */}
        <div className='text-center mb-12 sm:mb-14 md:mb-16'>
          <p className='text-base sm:text-lg md:text-xl font-bodyFont leading-7 sm:leading-8 tracking-wide text-gray-300 max-w-4xl mx-auto px-2'>
            Développeuse web et mobile passionnée, spécialisée dans la création d'applications innovantes et performantes. 
            Je transforme vos idées en solutions numériques élégantes avec une attention particulière aux détails et à l'expérience utilisateur.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16'>
          {/* Frontend */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF014F]/10'>
            <div className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-3 sm:mb-4 mx-auto'>
              <FaCode className='text-lg sm:text-xl md:text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center'>Frontend</h3>
            <p className='text-gray-400 text-xs sm:text-sm text-center leading-5 sm:leading-6'>
              React.js, HTML5, CSS3, Tailwind CSS, TypeScript, Bootstrap - Interfaces utilisateur modernes et réactives
            </p>
          </div>

          {/* Backend */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF014F]/10'>
            <div className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-3 sm:mb-4 mx-auto'>
              <FaServer className='text-lg sm:text-xl md:text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center'>Backend</h3>
            <p className='text-gray-400 text-xs sm:text-sm text-center leading-5 sm:leading-6'>
              Laravel, PHP, Node.js, Express.js - Solutions robustes et évolutives
            </p>
          </div>

          {/* Mobile */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF014F]/10'>
            <div className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-3 sm:mb-4 mx-auto'>
              <FaMobile className='text-lg sm:text-xl md:text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center'>Mobile</h3>
            <p className='text-gray-400 text-xs sm:text-sm text-center leading-5 sm:leading-6'>
              Applications mobiles responsives et optimisées pour tous les appareils
            </p>
          </div>

          {/* Full Stack */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF014F]/10'>
            <div className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-3 sm:mb-4 mx-auto'>
              <FaLaptopCode className='text-lg sm:text-xl md:text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center'>Full Stack</h3>
            <p className='text-gray-400 text-xs sm:text-sm text-center leading-5 sm:leading-6'>
              Solutions complètes de A à Z avec les meilleures pratiques de développement
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className='bg-gradient-to-r from-gray-800 to-gray-900 p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300'>
          <div className='text-center'>
            <h3 className='text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 md:mb-6'>Ma Mission</h3>
            <p className='text-base sm:text-lg font-bodyFont leading-7 sm:leading-8 tracking-wide text-gray-300 max-w-3xl mx-auto px-2'>
              Mon objectif est de transformer vos idées en réalité numérique en utilisant les 
              <span className='text-[#FF014F] font-semibold'> meilleures pratiques de développement</span> 
              {" "}et en accordant une attention particulière aux détails. Si vous cherchez une développeuse compétente 
              pour donner vie à vos projets, n'hésitez pas à me contacter !
            </p>
            
            <div className='mt-6 sm:mt-7 md:mt-8'>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
              >
                <button className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#FF014F] to-[#FF014F] hover:from-[#FF014F] hover:to-[#FF014F] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FF014F]/25 text-sm sm:text-base'>
                  Discutons de votre projet
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About