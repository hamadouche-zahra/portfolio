import React from 'react'
import Title from './../layouts/Title'
import { FaCode, FaServer, FaMobile, FaLaptopCode } from 'react-icons/fa'
import { Link } from 'react-scroll'

function About() {
  return (
    <section id='about' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center'>
        <Title title="" des="À Propos"/>
      </div>
      
      <div className='max-w-6xl mx-auto'>
        {/* Introduction */}
        <div className='text-center mb-16'>
          <p className='text-lg md:text-xl font-bodyFont leading-8 tracking-wide text-gray-300 max-w-4xl mx-auto'>
            Développeuse web et mobile passionnée, spécialisée dans la création d'applications innovantes et performantes. 
            Je transforme vos idées en solutions numériques élégantes avec une attention particulière aux détails et à l'expérience utilisateur.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {/* Frontend */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-center w-16 h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-4 mx-auto'>
              <FaCode className='text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-xl font-bold text-white mb-3 text-center'>Frontend</h3>
            <p className='text-gray-400 text-sm text-center leading-6'>
              React.js, HTML5, CSS3, Tailwind CSS,TypeScript Bootstrap - Interfaces utilisateur modernes et réactives
            </p>
          </div>

          {/* Backend */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-center w-16 h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-4 mx-auto'>
              <FaServer className='text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-xl font-bold text-white mb-3 text-center'>Backend</h3>
            <p className='text-gray-400 text-sm text-center leading-6'>
              Laravel, PHP, Node.js, Express.js - Solutions robustes et évolutives
            </p>
          </div>

          {/* Mobile */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-center w-16 h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-4 mx-auto'>
              <FaMobile className='text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-xl font-bold text-white mb-3 text-center'>Mobile</h3>
            <p className='text-gray-400 text-sm text-center leading-6'>
              Applications mobiles responsives et optimisées pour tous les appareils
            </p>
          </div>

          {/* Full Stack */}
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#FF014F] transition-all duration-300 transform hover:scale-105'>
            <div className='flex items-center justify-center w-16 h-16 bg-[#FF014F] bg-opacity-20 rounded-full mb-4 mx-auto'>
              <FaLaptopCode className='text-2xl text-[#FF014F]' />
            </div>
            <h3 className='text-xl font-bold text-white mb-3 text-center'>Full Stack</h3>
            <p className='text-gray-400 text-sm text-center leading-6'>
              Solutions complètes de A à Z avec les meilleures pratiques de développement
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className='bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-white mb-6'>Ma Mission</h3>
            <p className='text-lg font-bodyFont leading-8 tracking-wide text-gray-300 max-w-3xl mx-auto'>
              Mon objectif est de transformer vos idées en réalité numérique en utilisant les 
              <span className='text-[#FF014F] font-semibold'> meilleures pratiques de développement</span> 
              {" "}et en accordant une attention particulière aux détails. Si vous cherchez une développeuse compétente 
              pour donner vie à vos projets, n'hésitez pas à me contacter !
            </p>
            
            <div className='mt-8'>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                >
              <button className='px-8 py-4 bg-gradient-to-r from-[#FF014F] to-[#FF014F] hover:from-[#FF014F] hover:to-[#FF014F] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
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
