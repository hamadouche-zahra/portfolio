import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { Link } from 'react-scroll'


function Banner() {
    const [text] = useTypewriter({
        words: ['Software Engineer.', 'Full Stack Developer.'],
        loop: true,
        typeSpeed:40,
        deleteSpeed:20,
        delaySpeed:2000,
    });

    return (
        <section id='home' className='w-full min-h-screen bg-gradient-to-br flex flex-col justify-center items-center text-center px-4 relative overflow-hidden'> 
            {/* Animated background elements */}
            <div className='absolute top-20 left-20 w-2 h-2 bg-designColor rounded-full animate-pulse opacity-60'></div>
            <div className='absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40'></div>
            <div className='absolute bottom-32 left-16 w-2 h-2 bg-designColor rounded-full animate-pulse opacity-50'></div>
            <div className='absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full animate-ping opacity-30'></div>
            <div className='absolute bottom-40 right-40 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500 opacity-40'></div>

            {/* Main content container */}
            <div className='max-w-4xl mx-auto z-10'>

            <div className='relative  flex justify-center'>
                    {/* Decorative circles */}
                    <div className='absolute w-[280px] h-[280px] rounded-full border border-designColor opacity-20 animate-spin-slow'></div>
                    <div className='absolute w-[320px] h-[320px] rounded-full border border-blue-400 opacity-10 animate-spin-reverse'></div>  
            </div>
                {/* Text content */}
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                        Bonjour, je suis
                    </h1>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                        <span className='text-designColor bg-gradient-to-r from-designColor to-[#ff4d7a] bg-clip-text text-transparent'>
                            Hamadouche Fatima Zahra
                        </span>
                    </h1>
                    
                    <p className='text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                       Développeuse web et mobile, je crée des applications élégantes, performantes et immersives, centrées sur l’expérience utilisateur.
                    </p>

                    {/* Buttons */}
                    <Link 
                        to="resume" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                       >
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-8'>
                        <button className='px-8 py-4  bg-gradient-to-r from-designColor to-designColor hover:from-designColor hover:to-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2'>
                            Voir mes projets
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                        </button>
                        
                       <Link 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                       >
                        <button className='px-8 py-4 border border-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2'>
                        <MdEmail className='w-5 h-5' />
                        Me contacter
                      </button>
                  </Link>
                    </div>
                    </Link>
                    {/* Social links */}
                    <div className='flex justify-center gap-6 mt-10'>
                        <a 
                            href='https://github.com/hamadouche-zahra' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='w-12 h-12 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'>
                            <FaGithub className='w-5 h-5  text-designColor group-hover:text-white' />
                        </a>
                        <a 
                            href='https://www.linkedin.com/in/fatima-zohra-hamadouche-920300220' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='w-12 h-12 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'>
                            <FaLinkedinIn className='w-5 h-5  text-designColor group-hover:text-white' />
                        </a>
                        <a href='#' className='w-12 h-12 bg-gray-800 border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor group'>
                            <MdEmail className='w-5 h-5  text-designColor group-hover:text-white' />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner