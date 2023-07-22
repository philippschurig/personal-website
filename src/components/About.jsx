import { aboutMe } from '../constants'
import { SectionWrapper } from '../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import parse from 'html-react-parser'

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='relative flex justify-center text-center'>
        <h2 className='section-head-text select-none'>Über mich</h2>
        <p className='section-sub-text'>
          Über Mich
          <span className='border-b-4 border-themeOrange-100 px-3 mx-auto block w-24 rounded'></span>
        </p>
      </div>

      <div className='flex items-start flex-col md:flex-row w-full gap-16 mt-16 overflow-hidden'>
        <div>
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
            <h3 className='text-3xl text-gray-200 font-semibold mb-4'>Ich bin <span className='text-themeOrange-100'>Philipp Schurig,</span></h3>
            { parse(aboutMe.description) }
          </p>
        </div>

        <div className='flex-1'>
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
             className="block mt-12 px-4 py-2 outline-none border border-themeOrange-100 w-fit transition-all ease-in-out duration-300 hover:bg-themeOrange-100 rounded-lg">
            <FontAwesomeIcon icon={solid('cloud-arrow-down')}  className="mr-4"/>
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')