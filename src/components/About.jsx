import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { profile } from '../assets'
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
          <motion.div variants={fadeIn("right", "", 0.2, 1)}
                      className='relative mr-20 mt-10 about-img'>
            <img src={profile} alt='Philipp Schurig' className='w-72' />
          </motion.div>

          <div className='overflow-hidden'>
            <motion.p variants={fadeIn("", "", 0.2, 1)}
                      className="text-secondary text-[17px] max-w-3xl leading-[30px]">
              Meine Leidenschaft ist die Webentwicklung, speziell im Bereich Php und Javascript.
              Ich konzipiere und entwickle Wep-Apps, REST API's sowie klassiche Webseiten und Portale.
              Meinen Focus habe ich die letzten Jahre immer mehr auf Laravel und Vue oder React gelegt und damit einige Projekte aufgebaut, weiterentwickelt und betreut.
            </motion.p>

            <motion.div variants={fadeIn("", "", 0.2, 1)} className='mt-8'>
              <ul className='list-none text-lg text-secondary'>
                <li className='mb-3 font-light'>
                  <span className='font-bold text-teal-500'>Name:</span> {import.meta.env.VITE_NAME}
                </li>
                <li className='mb-3 font-light'>
                  <span className='font-bold text-teal-500'>Geboren am:</span> 02. April 1993
                </li>
                <li className='font-light'>
                  <span className='font-bold text-teal-500'>Email:</span> <a href='mailto:contact@philippschurig.de'>{import.meta.env.VITE_EMAIL}</a>
                </li>
              </ul>
            </motion.div>

            <HobbyList />

            <motion.a href="./cv/CV_2023.pdf"
                      download="Lebenslauf.pdf"
                      variants={fadeIn("", "", 0.2, 1)}
                      className="btn-primary mt-4 px-6 py-4 outline-none w-fit rounded-lg">
              <FontAwesomeIcon icon={solid('cloud-arrow-down')}  className="mr-4"/>
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')