import React from 'react'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
function Footer() {
  return (
   <footer className='w-full py-4 sm:py-6  border-t border-gray-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6'>
          {/* Copyright */}
          <div className='text-center sm:text-left'>
            <span className='text-xs sm:text-sm lg:text-base text-gray-300 font-light'>
              © 2025 Hamadouche Fatima Zahra. Tous droits réservés.
            </span>
          </div>
          
          {/* Social Links */}
          <div className='flex items-center'>
            <ul className='flex gap-3 sm:gap-4 lg:gap-6'>
              <li>
                <a 
                  href='https://www.linkedin.com/in/fatima-zohra-hamadouche-920300220' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='group'
                  aria-label='LinkedIn Profile'
                >
                  <span className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor hover:border-designColor hover:shadow-lg hover:shadow-designColor/25 group-hover:rotate-12'>
                    <FaLinkedinIn className='w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-gray-300 group-hover:text-white transition-colors duration-300' />
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href='mailto:zahrahamadouche@gmail.com'
                  className='group'
                  aria-label='Send Email'
                >
                  <span className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor hover:border-designColor hover:shadow-lg hover:shadow-designColor/25 group-hover:rotate-12'>
                    <MdEmail className='w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-gray-300 group-hover:text-white transition-colors duration-300' />
                  </span>
                </a>
              </li>
              <li>
                <a  
                  href='https://github.com/hamadouche-zahra' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='group'
                  aria-label='GitHub Profile'
                >
                  <span className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-designColor hover:border-designColor hover:shadow-lg hover:shadow-designColor/25 group-hover:rotate-12'>
                    <FaGithub className='w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 text-gray-300 group-hover:text-white transition-colors duration-300' />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
     
      </div>
    </footer>
  )
}

export default Footer