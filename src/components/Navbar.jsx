import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = ({...components}) => {
  const [toggle, setToggle] = useState(false)
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <nav className={`${styles.paddingX} ${color ? 'bg-slate-900' : ''} w-full flex items-center py-5 fixed top-0 z-20 ease-in-out duration-300`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="/"
              className="flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Philipp Schurig
          </p>
        </a>

        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link activeClass="active"
                    spy
                    offset={-50}
                    to={link.id}
                    className='nav-link font-medium text-[18px] cursor-pointer ease-in-out duration-300'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center menu">
          <img src={toggle ? close : menu}
               alt="menu"
               className="w-[28px] h-[28px] object-contain cursor-pointer"
               onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'inactive' : 'active' } p-6 bg-amber-500 absolute top-full right-0 min-w-full z-10`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link activeClass="active" offset={-50} spy hashSpy to={link.id}
                        className='nav-link text-[18px] font-medium cursor-pointer ease-in-out duration-300 cursor-pointer'
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