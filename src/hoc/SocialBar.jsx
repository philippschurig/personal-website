import { socialmedia } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faInstagram, faXing, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faInstagram, faXing, faLinkedin, faGithub)

const SocialBar = ({ hover = false }) => {
  return (
    <div className='flex justify-center gap-4'>
      {socialmedia.map((socialmedia) => (
        <a href={socialmedia.link}
           target='_blank'
           aria-label={socialmedia.name}
           className={`${hover ? 'hover:text-teal-500': ''} ease-in-out duration-300`}
           key={socialmedia.name}
        >
          <FontAwesomeIcon icon={`fa-brands ${socialmedia.icon}`} size='lg' />
        </a>
      ))}
    </div>
  )
}

export default SocialBar