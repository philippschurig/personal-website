import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import {fadeIn, slideIn, textVariant} from '../utils/motion'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <div className="flex flex-col">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {technologies.map((technology) => (
          <div className='object-contain' key={technology.name}>
            <motion.p variants={fadeIn("", "", 0.1, 1)}
                      className="text-secondary text-[17px]">
              {technology.name}
            </motion.p>

            <div className="w-full mt-3 bg-slate-800 overflow-hidden">
              <motion.div variants={slideIn("left", "", 0.3, 1)}
                          className="p-1 bg-secondary"
                          style={{width: technology.percent + '%', background: technology.color}} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-6 mt-10">
        <motion.span variants={textVariant()}
                     className="block font-semibold text-lg text-secondary">
          und mehr ...
        </motion.span>

        <motion.a href="#contact"
                  variants={textVariant()}
                  className="block w-auto px-4 py-2 bg-amber-600 hover:bg-amber-700">
          Kontaktiere mich
        </motion.a>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")