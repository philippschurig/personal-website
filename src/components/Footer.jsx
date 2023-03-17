import { SocialBar } from '../hoc'

const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="flex justify-center text-center flex-col bg-slate-800 text-white p-12">
      <SocialBar />
      <p className='mt-6'>Copyright © {currentYear()} by Philipp Schurig</p>
    </div>
  )
}

export default Footer