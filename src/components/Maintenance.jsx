// import { SocialBar } from '../hoc'

const Maintenance = () => {
  return (
    <div className={`bg-hero-pattern bg-cover bg-fixed bg-slate-900`}>
      <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <h1 className='text-white text-4xl lg:text-7xl font-light mb-6 uppercase'>Bald verfügbar!</h1>
        <h2 className='text-white lg:text-4xl font-light mb-4'>Folge mir auf Social Media</h2>
        <div className='mt-12'>
          {/*<SocialBar />*/}
        </div>
      </div>
    </div>
  )
}

export default Maintenance