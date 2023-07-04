import { motion } from 'framer-motion'
import { Element, Link } from 'react-scroll'

const Hero = () => {
  return (
    <Element name="home" className="relative w-full h-screen mx-auto z-10">
      <div className={`absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center`}>
        <div className="sm:px-16 px-6">
          <h1 className='text-white text-7xl lg:text-9xl font-light mb-6'>Hallo!</h1>
          <h2 className='text-white text-3xl md:text-5xl lg:text-7xl font-normal mb-4'>Ich bin <span className='font-bold'>Philipp Schurig</span></h2>
          <p className='text-white text-2xl lg:text-3xl'>Full-Stack Entwickler</p>
        </div>
      </div>

      <div className="absolute bottom-24 w-full flex justify-center items-center">
        <Link offset={-60} spy to="about" className="cursor-pointer">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-white-100 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-white-100 mb-1" />
          </div>
        </Link>
      </div>
    </Element>
  )
}

export default Hero