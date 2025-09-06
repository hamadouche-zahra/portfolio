import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { Link } from 'react-scroll'

function Banner() {
    const [text] = useTypewriter({
        words: ['Software Engineer.', 'Full Stack Developer.'],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });

    return (
        <section 
            id='home' 
            className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden'
        > 
            {/* Animated background elements - Hidden on mobile for performance */}
            <div className='hidden md:block absolute top-16 left-8 lg:top-20 lg:left-20 w-2 h-2 bg-designColor rounded-full animate-pulse opacity-60'></div>
            <div className='hidden md:block absolute top-32 right-16 lg:top-40 lg:right-32 w-2 lg:w-3 h-2 lg:h-3 bg-blue-400 rounded-full animate-bounce opacity-40'></div>
            <div className='hidden md:block absolute bottom-24 left-8 lg:bottom-32 lg:left-16 w-2 h-2 bg-designColor rounded-full animate-pulse opacity-50'></div>
            <div className='hidden lg:block absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full animate-ping opacity-30'></div>
            <div className='hidden md:block absolute bottom-32 right-20 lg:bottom-40 lg:right-40 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500 opacity-40'></div>

            {/* Main content container */}
            <div className='max-w-7xl mx-auto z-10 w-full'>
                {/* Decorative circles - Responsive sizing */}
                <div className='relative flex justify-center mb-8 md:mb-12'>
                    <div className='hidden sm:block absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border border-designColor opacity-20 animate-spin-slow'></div>
                    <div className='hidden sm:block absolute w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full border border-blue-400 opacity-10 animate-spin-reverse'></div>  
                </div>

                {/* Text content */}
                <div className='space-y-4 md:space-y-6 lg:space-y-8'>
                    {/* Greeting */}
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight'>
                        Bonjour, je suis
                    </h1>
                    
                    {/* Name */}
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2'>
                        <span className='text-designColor bg-gradient-to-r from-designColor to-pink-500 bg-clip-text text-transparent'>
                            Hamadouche Fatima Zahra
                        </span>
                    </h1>
                    
                    {/* Typewriter text */}
                    <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 min-h-[2em] flex items-center justify-center'>
                        <span className='text-designColor'>{text}</span>
                        <span className='animate-pulse text-designColor'>|</span>
                    </div>
                    
                    {/* Description */}
                    <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2'>
                       Développeuse web et mobile, je crée des applications élégantes, performantes et immersives, centrées sur l'expérience utilisateur.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-8 lg:mt-10 px-2'>
                        <Link 
                            to="resume" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                        >
                            <button className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-designColor to-pink-500 hover:from-pink-500 hover:to-designColor text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-designColor/25 flex items-center justify-center gap-2 text-sm sm:text-base'>
                                Voir mes projets
                                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                </svg>
                            </button>
                        </Link>
                        
                        <Link 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                        >
                            <button className='w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-designColor text-designColor hover:bg-designColor hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base'>
                                <MdEmail className='w-4 h-4 sm:w-5 sm:h-5' />
                                Me contacter
                            </button>
                        </Link>
                    </div>
                    
                    {/* Social links */}
                    <div className='flex justify-center gap-4 sm:gap-6 mt-8 md:mt-10 lg:mt-12'>
                        <a 
                            href='https://github.com/hamadouche-zahra' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor hover:shadow-lg hover:shadow-designColor/25 group'
                            aria-label='GitHub Profile'
                        >
                            <FaGithub className='w-4 h-4 sm:w-5 sm:h-5 text-designColor group-hover:text-white transition-colors duration-300' />
                        </a>
                        <a 
                            href='https://www.linkedin.com/in/fatima-zohra-hamadouche-920300220' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor hover:shadow-lg hover:shadow-designColor/25 group'
                            aria-label='LinkedIn Profile'
                        >
                            <FaLinkedinIn className='w-4 h-4 sm:w-5 sm:h-5 text-designColor group-hover:text-white transition-colors duration-300' />
                        </a>
                        <Link 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                        >
                            <button 
                                className='w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 backdrop-blur-sm border border-designColor rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor hover:shadow-lg hover:shadow-designColor/25 group'
                                aria-label='Contact Email'
                            >
                                <MdEmail className='w-4 h-4 sm:w-5 sm:h-5 text-designColor group-hover:text-white transition-colors duration-300' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner