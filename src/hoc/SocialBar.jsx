import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const SocialBar = () => {
  return (
    <div className="flex justify-center gap-4">
      <a href='https://twitter.com/philipp_schurig'
         target='_blank'
         className='hover:text-amber-500 ease-in-out duration-300'>
        <FontAwesomeIcon icon={brands('twitter')} />
      </a>
      <a href='https://www.instagram.com/philipp_schurig/'
         target='_blank'
         className='hover:text-amber-500 ease-in-out duration-300'>
        <FontAwesomeIcon icon={brands('instagram')} />
      </a>
      <a href='https://www.xing.com/profile/Philipp_Schurig'
         target='_blank'
         className='hover:text-amber-500 ease-in-out duration-300'>
        <FontAwesomeIcon icon={brands('xing')} />
      </a>
      <a href='https://www.linkedin.com/in/pschurig/'
         target='_blank'
         className='hover:text-amber-500 ease-in-out duration-300'>
        <FontAwesomeIcon icon={brands('linkedin')} />
      </a>
      <a href='https://github.com/philippschurig'
         target='_blank'
         className='hover:text-amber-500 ease-in-out duration-300'>
        <FontAwesomeIcon icon={brands('github')} />
      </a>
    </div>
  )
}

export default SocialBar