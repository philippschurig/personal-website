import { close } from '../assets'

const Modal = (props) => {
  return (
    <div className={`${!props.isShow ? 'inactive' : 'active'} fixed top-0 bottom-0 right-0 left-0 modal p-4`}>
      <img src={close} alt='close' onClick={props.onClose} className='absolute right-10 w-10 h-10 object-contain cursor-pointer z-50' />
      <div className='flex justify-center items-center h-screen w-full'>
        <div className='w-full lg:w-3/4 h-5/6 bg-gray-800 px-12 py-8 rounded-xl '>
          <div className='h-full w-full overflow-y-scroll overflow-x-hidden'>
            { props.children }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal