import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { profile } from '../assets'
import { aboutMe } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { HobbyList, SectionWrapper } from '../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const About = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto overflow-hidden'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Wer bin ich?</p>
          <h2 className={styles.sectionHeadText}>Über mich</h2>
        </motion.div>

        <div className='flex items-start flex-col md:flex-row w-full gap-4 mt-10'>
          <div>
            <motion.div variants={fadeIn("right", "", 0.2, 1)}
                        className='relative mr-20 mt-10 about-img'>
              <img src={ profile } alt='Philipp Schurig' className='w-72' />
            </motion.div>

            <motion.a href="./cv/CV_2023.pdf"
                      download="Lebenslauf.pdf"
                      variants={fadeIn("", "", 0.2, 1)}
                      className="block btn-primary mt-12 mx-auto px-6 py-4 outline-none w-fit rounded-lg">
              <FontAwesomeIcon icon={solid('cloud-arrow-down')}  className="mr-4"/>
              Download CV
            </motion.a>
          </div>

          <div className='overflow-hidden'>
            <motion.p variants={fadeIn("", "", 0.2, 1)}
                      className="text-secondary text-[17px] max-w-3xl leading-[30px]">
              { aboutMe.description }
            </motion.p>

            <motion.div variants={fadeIn("", "", 0.2, 1)} className='mt-8'>
              <ul className='list-none text-lg text-secondary'>
                <li className='mb-3 font-light'>
                  <span className='font-bold text-teal-500'>Name:</span> { aboutMe.name }
                </li>
                <li className='mb-3 font-light'>
                  <span className='font-bold text-teal-500'>Geboren am:</span> { aboutMe.birthdate }
                </li>
                <li className='font-light'>
                  <span className='font-bold text-teal-500'>Email:</span> <a href={`mailto:${aboutMe.email}`}>{ aboutMe.email }</a>
                </li>
              </ul>
            </motion.div>

            <HobbyList />
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')