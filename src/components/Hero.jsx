import { Link } from 'react-scroll'
import { profile } from '../assets'
import Typed from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Hero = () => {
  return (
    <section id='home' className='h-screen w-screen relative bg-themeGrey-300 overflow-hidden'>
      <div className='flex h-screen py-24'>
        <div className='flex items-center flex-col-reverse lg:flex-row text-center lg:text-left lg:justify-between container my-auto mx-auto px-4 home-section'>
          <div className='z-[1] mt-12 lg:mt-0'>
            <p className='text-white text-6xl lg:text-6xl font-light mb-6'>Hallo!</p>
            <h1 className='text-white font-light text-3xl md:text-5xl lg:text-6xl mb-4'>
              Ich bin <Typed
              strings={[
                'Philipp Schurig',
                'Webentwickler',
                'Laravel Enthusiast'
              ]}
              typeSpeed={95}
              backSpeed={50}
              loop
              className='font-bold text-themeOrange-100'>
            </Typed>
            </h1>

            <Link to={'contact'}
                  offset={-50}
                  spy
                  className="block mx-auto lg:mx-0 mt-12 px-4 py-2 outline-none border border-themeOrange-100 w-fit transition-all ease-in-out duration-300 hover:bg-themeOrange-100 rounded-lg cursor-pointer">
              Kontaktiere mich
            </Link>
          </div>
          <div className='mx-auto lg:mx-0 block'>
            <div className='hero-profile'></div>
          </div>
        </div>

        <Link to='about'
              offset={-50}
              spy
              className='absolute bottom-6 left-1/2 cursor-pointer h-12 block'>
          <FontAwesomeIcon icon={solid('chevron-down')}  className="text-2xl hero-down"/>
        </Link>
      </div>
    </section>
  )
}

export default Hero