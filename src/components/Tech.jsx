import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { fadeIn, slideIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { styles } from '../styles'
import React from 'react'
import { Link } from 'react-scroll'

const Tech = () => {
  return (
    <div className='max-w-7xl mx-auto overflow-hidden'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Was kann ich?</p>
        <h2 className={styles.sectionHeadText}>Meine Skills</h2>
      </motion.div>

      <div className='flex flex-col mt-4 overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {technologies.map((technology) => (
            <div className='object-contain' key={technology.name}>
              <motion.p variants={fadeIn("", "", 0.1, 1)}
                        className='text-secondary text-[17px]'>
                {technology.name}
              </motion.p>

              <div className="w-full mt-3 bg-slate-800 overflow-hidden rounded-full">
                <motion.div variants={slideIn("left", "", 0.3, 1)}
                            className='p-1 bg-secondary rounded-full'
                            style={{width: technology.percent + '%', background: technology.color}} />
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start gap-6 mt-10'>
          <motion.span variants={textVariant()}
                       className='block font-semibold text-lg text-secondary'>
            und mehr ...
          </motion.span>

          <div className='flex gap-4 mt-4'>
            <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                        offset={-50}
                        className='btn-primary px-6 py-4 outline-none w-fit rounded-lg'>
              <Link offset={-60} spy to='contact' className='cursor-pointer'>
                <FontAwesomeIcon icon={regular('envelope')}  className='mr-4' />
                Kontaktiere mich
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'skills')