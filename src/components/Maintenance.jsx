import { styles } from '../styles'
import { SocialBar } from '../hoc'

const Maintenance = () => {
  return (
    <div className={`${styles.padding} bg-hero-pattern bg-cover bg-fixed flex justify-center items-center w-screen h-screen bg-slate-900`}>
      <div className='max-w-7xl text-center'>
        <h1 className={`${styles.sectionHeadText} font-thin uppercase`}>Bald verfügbar</h1>
        <p className={`${styles.sectionSubText}`}>Hier erscheint demnächst meine persönliche Webseite!</p>

        <div className='mt-12'>
          <SocialBar />
        </div>
      </div>
    </div>
  )
}

export default Maintenance