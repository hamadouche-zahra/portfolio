import React from 'react'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
function Footer() {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600' >
      <div >
      <span className=' text-sm lg:text-base'>© 2025 Hamadouche Fatima Zohra. Tous droits réservés.</span>
      </div>
      <div>
        <ul className='inline-flex gap-2 lg:gap-6'>
          <li>
          <a 
           href='https://www.linkedin.com/in/fatima-zohra-hamadouche-920300220' 
           target='_blank' 
           rel='noopener noreferrer'
          >
          <span className="bannerIcon">
          <FaLinkedinIn/>
          </span>
          </a>
          </li>
          <li>
          <a href='mailto:zahrahamadouche@gmail.com'>
          <span className="bannerIcon">
          <MdEmail />
          </span>
          </a>
          </li>
          <li>
          <a  
            href='https://github.com/hamadouche-zahra' 
            target='_blank' 
            rel='noopener noreferrer'
          >
          <span className="bannerIcon">
          <FaGithub/>
          </span>
        </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer