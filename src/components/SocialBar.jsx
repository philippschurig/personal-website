import { socialMedia } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faXing, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faXing, faLinkedin, faGithub)

const SocialBar = () => {
  return (
    <div className='hidden md:block absolute bottom-0 right-4 z-[50] text-center'>
      <ul>
        {socialMedia.map((socialMedia) => (
        <li key={socialMedia.name} className='mb-2'>
          <a href={socialMedia.link} target='_blank' aria-label={socialMedia.name}>
            <FontAwesomeIcon icon={`fa-brands ${socialMedia.icon}`}
                             size='xl'
                             className='hover:text-themeOrange-100 transition-all ease-in-out duration-300' />
          </a>
        </li>
        ))}
      </ul>
      <span className='inline-block border-l-4 border-themeOrange-100 h-12'></span>
    </div>
  )
}

export default SocialBar