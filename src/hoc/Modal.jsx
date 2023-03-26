import { close } from '../assets'
import { motion } from 'framer-motion'

const Modal = (props) => {
  return (
    <motion.div className={`${!props.isShow ? 'hidden' : ''} fixed top-0 bottom-0 right-0 left-0 modal p-4`}>
      <img src={close} alt='close' onClick={props.onClose} className='absolute right-10 w-10 h-10 object-contain cursor-pointer' />
      <motion.div className='flex justify-center items-center h-screen w-full'>
        <div className='w-full lg:w-3/4 h-5/6 bg-gray-800 p-6 rounded-xl overflow-y-scroll'>
          {props.children}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal