import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const HobbyList = () => {
  return (
    <>
      <motion.div variants={slideIn("left", "", 0.3, 1)}
                  className='pt-4'>
        <h4 className='text-lg font-bold text-teal-500'>Interessen</h4>
        <div className='flex flex-row gap-6 mt-4'>
          <div className='hobby-container'>
            <div className='flex justify-center items-center border border-teal-500 h-16 w-16 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white ease-in-out duration-300'>
              <FontAwesomeIcon icon={solid('music')} className='h-6' />
            </div>
            <span className='description'>Musik</span>
          </div>
          <div className='hobby-container'>
            <div className='flex justify-center items-center border border-teal-500 h-16 w-16 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white ease-in-out duration-300'>
              <FontAwesomeIcon icon={solid('mug-saucer')} className='h-6' />
            </div>
            <span className='description'>Kaffee</span>
          </div>
          <div className='hobby-container'>
            <div className='flex justify-center items-center border border-teal-500 h-16 w-16 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white ease-in-out duration-300'>
              <FontAwesomeIcon icon={solid('kitchen-set')} className='h-6' />
            </div>
            <span className='description'>Kochen</span>
          </div>
          <div className='hobby-container'>
            <div className='flex justify-center items-center border border-teal-500 h-16 w-16 rounded-full text-teal-500 hover:bg-teal-500 hover:text-white ease-in-out duration-300'>
              <FontAwesomeIcon icon={solid('gamepad')} className='h-6' />
            </div>
            <span className='description'>Spielen</span>
          </div>
        </div>
      </motion.div></>
  )
}

export default HobbyList