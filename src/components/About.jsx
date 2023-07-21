import React from 'react'
import { styles } from '../styles'
import { profile } from '../assets'
import { aboutMe } from '../constants'
import { SectionWrapper } from '../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const About = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto overflow-hidden'>
        <div>
          <p className={styles.sectionSubText}>Wer bin ich?</p>
          <h2 className={styles.sectionHeadText}>Über mich</h2>
        </div>

        <div className='flex items-start flex-col md:flex-row w-full gap-4 mt-10'>
          <div>
            <div className='relative mr-20 mt-10 about-img'>
              <img src={ profile } alt='Philipp Schurig' className='w-72' />
            </div>
          </div>

          <div className='overflow-hidden'>
            <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
              { aboutMe.description }
            </p>

            <div className='mt-6'>
              <ul className='list-none text-lg text-secondary'>
                <li className='mb-3 font-light'>
                  Alter: <span className='text-gray-300 font-semibold'>{ aboutMe.age }</span>
                </li>
                <li className='font-light'>
                  Email: <a className='text-gray-300 font-semibold hover:border-b border-green-500 transition-all ease-in-out duration-100' href={`mailto:${aboutMe.email}`}>{ aboutMe.email }</a>
                </li>
              </ul>

              <a href="./cv/CV_2023.pdf"
                 download="Lebenslauf.pdf"
                 className="block mt-12 px-4 py-2 outline-none border border-green-500 bg-green-500 w-fit transition-all ease-in-out duration-300 hover:bg-gray-900 rounded-lg">
                <FontAwesomeIcon icon={solid('cloud-arrow-down')}  className="mr-4"/>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')