import {aboutMe, technologies} from '../constants'
import { SectionWrapper } from '../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import parse from 'html-react-parser'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <>
      <div className='flex items-start flex-col md:flex-row w-full gap-8 lg:gap-16 overflow-hidden'>
        <div className="text-secondary text-[17px] max-w-3xl leading-[30px]">
          <h3 className='text-3xl text-gray-200 font-semibold mb-4'>
            Ich bin <span className='text-themeOrange-100'>{aboutMe.name},</span>
          </h3>
          { parse(aboutMe.description) }

          <Link to='contact'
                offset={-50}
                spy
                className="block text-gray-200 lg:mx-0 mt-6 px-4 py-2 outline-none border border-themeOrange-100 w-fit transition-all ease-in-out duration-300 hover:bg-themeOrange-100 rounded-lg cursor-pointer">
            <FontAwesomeIcon icon={solid('paper-plane')} className='mr-6' />
            Kontaktiere mich
          </Link>
        </div>

        <div className='w-full md::flex-1'>
          <ul className='list-none text-lg text-secondary'>
            <li className='text-base py-2 text-gray-200 border-b border-gray-500'>
              <span className='font-semibold mr-3'>Name:</span>{ aboutMe.name }
            </li>
            <li className='text-base py-2 text-gray-200 border-b border-gray-500'>
              <span className='font-semibold mr-3'>Email:</span>
              <a className='text-themeOrange-100 hover:text-themeOrange-300 font-light transition-all ease-in-out duration-100' href={`mailto:${aboutMe.email}`}>{ aboutMe.email }</a>
            </li>
            <li className='text-base py-2 text-gray-200 border-b border-gray-500'>
              <span className='font-semibold mr-3'>Alter:</span>{ aboutMe.age }
            </li>
            <li className='text-base py-2 text-gray-200'>
              <span className='font-semibold mr-3'>Aus:</span>{ aboutMe.location }
            </li>
          </ul>

          <a href="./cv/CV_2023.pdf"
             download="Lebenslauf.pdf"
             className="block mt-8 px-4 py-2 outline-none border border-themeOrange-100 w-fit transition-all ease-in-out duration-300 hover:bg-themeOrange-100 rounded-lg">
            <FontAwesomeIcon icon={solid('cloud-arrow-down')}  className="mr-4"/>
            Download CV
          </a>
        </div>
      </div>

      <div className='flex flex-col mt-16'>
        <div className='grid grid-cols-3 md:grid-cols-7 gap-6 justify-center items-center'>
          {technologies.map(technology => (
            <div key={`experience-point-${technology.name}`} className='flex justify-center items-center relative tooltip h-20'>
              <img src={technology.logo} alt={technology.name} className='block w-16' />
              <span className='tooltip-text absolute top-full mt-2 z-50'>{technology.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about', 'Über mich', 'Wer bin ich?')