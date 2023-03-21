import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import {SocialBar} from "../hoc";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <nav className={`${color ? 'theme-nav-gradient py-5' : 'py-8'} fixed w-full top-0 py-5 sm:px-16 px-6 ease-in-out duration-300 z-50`}>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <SocialBar />

        <div className='menu'>
          <img src={menu}
               alt="menu"
               className='w-[28px] h-[28px] object-contain cursor-pointer z-50'
               onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'inactive' : 'active' } p-6 fixed top-0 right-0 bottom-0 left-0`}>
            <img src={close} alt='close' onClick={() => setToggle(!toggle)} className='absolute right-10 w-10 h-10 object-contain cursor-pointer' />
            <ul className="list-none flex justify-center items-center h-full flex-col gap-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link activeClass="active" offset={-60} spy hashSpy to={link.id}
                        className='nav-link text-2xl font-medium cursor-pointer hover:text-teal-500 ease-in-out duration-300 cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar