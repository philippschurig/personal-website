import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <header className={`${color ? 'bg-themeOrange-400 shadow-2xl' : ''}fixed top-0 left-0 right-0 z-[999]`}>
      <nav className='container mx-auto flex items-center justify-between py-5 lg:py-3 px-4'>
        <a href='#' className={`${color ? 'text-white' : 'text-themeOrange-100'} block text-2xl font-semibold`}>Philipp</a>

        <div className='menu hidden md:flex'>
          <ul className="list-none flex justify-center items-center h-full gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link activeClass="active"
                      offset={-50}
                      spy
                      to={link.id}
                      className='block hover:bg-themeOrange-100 px-3 py-2 rounded nav-link transition-all ease-in-out duration-500 cursor-pointer'
                      onClick={() => setToggle(!toggle)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center justify-between sm:block md:hidden'>
          <div className='mobile-menu'>
            <img src={menu}
                 alt="menu"
                 className='w-[28px] h-[28px] object-contain cursor-pointer z-50'
                 onClick={() => setToggle(!toggle)} />

            <div className={`${!toggle ? 'inactive' : 'active'} p-6 fixed top-0 right-0 bottom-0 left-0`}>
              <img src={close} alt='close' onClick={() => setToggle(!toggle)} className='absolute right-10 w-10 h-10 object-contain cursor-pointer' />
              <ul className="list-none flex justify-center items-center h-full flex-col gap-10">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link activeClass="active"
                          offset={-60}
                          spy
                          to={link.id}
                          className='nav-link text-2xl font-medium hover:text-themeOrange-200 ease-in-out duration-300 cursor-pointer'
                          onClick={() => setToggle(!toggle)}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar