import React, { useState } from 'react'
import {navLinksdata} from './../constants/index'
import {FiMenu} from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-scroll'

function Navbar() {
 
  const [showMenu,setShowMenu]=useState(false)
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600' >
      <div className="text-3xl font-extrabold bg-gradient-to-r from-[#ff014f] via-pink-500 to-purple-600 bg-clip-text text-transparent">
       Hamadouche Fatima Zohra
      </div>

      <div>
        <ul className='hidden md:inline-flex flex items-center gap-6 lg:gap-10'>
          {
            navLinksdata.map(({_id,title,link})=>(
              <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
              hover:text-designColor duration-300'
               key={_id}>
                <Link    activeClass="active"
                to={link}
                spy={true} 
                smooth={true}
                offset={-70}
                duration={500}
                >
               {title}
                </Link>
               </li>
            ))
          }
        </ul>
        <span  onClick={()=>setShowMenu(!showMenu)}className='text-xl md:hidden bg-black  w-10 h-10 
        inline-flex items-center justify-center rounded-full cursor-pointer text-designColor'>
          <FiMenu/>
        </span>
        {
          showMenu &&(
            <div className='w-[80%] h-auto  overflow-scroll absolute mt-2 left-0 bg-gray-900 p-4 scrollbar-hide'>
             <div>
              <div>
                
                <ul className='flex flex-col gap-4 p-6 relative'>
                  {
                 navLinksdata.map((item)=>(
                  <li  className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                  hover:text-designColor duration-300 '  key={item._id}>
                     <Link   onClick={()=>setShowMenu(false)} 
                      activeClass="active"
                     to={item.link}
                     spy={true} 
                     smooth={true}
                     offset={-70}
                     duration={500}
                     >
               {item.title}
                </Link>
                  </li>
                 ))
                  }
                </ul>
                <span onClick={()=>setShowMenu(false)}
              className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'
              >
              <MdClose/>
              </span>
              </div>
              </div>
             
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar