import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import React from 'react'

const Tech = () => {
  return (
    <div className='max-w-7xl mx-auto overflow-hidden'>
      <div>
        <p className={styles.sectionSubText}>Was kann ich?</p>
        <h2 className={styles.sectionHeadText}>Meine Skills</h2>
      </div>

      <div className='flex flex-col mt-10 overflow-hidden'>
        <div className='grid grid-cols-3 md:grid-cols-7 gap-6 justify-center items-center pb-10'>
          {technologies.map(technology => (
            <div key={`experience-point-${technology.name}`} className='flex justify-center items-center relative tooltip h-20'>
              <img src={technology.logo} alt={technology.name} className='block w-16' />
              <span className='tooltip-text absolute top-full mt-2 z-50'>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'skills')