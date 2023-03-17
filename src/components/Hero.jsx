import { motion } from 'framer-motion'
import { Element, Link } from 'react-scroll'

import { styles } from '../styles'

const Hero = () => {
  return (
    <Element name="home" className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-col justify-center items-center gap-5`}>
        <div className="flex flex-row justify-center items-center mt-5">
          <div className="w-1 sm:w-80 w-40 h-4 amber-gradient" />
        </div>

        <div className="text-center">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, ich bin <span className="text-amber-500">Philipp</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Ich programmiere Webanwendungen and Webseiten
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <Link offset={-50} spy hashSpy to="about" className="cursor-pointer">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-amber-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-amber-600 mb-1" />
          </div>
        </Link>
      </div>
    </Element>
  )
}

export default Hero