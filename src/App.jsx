import { HashRouter } from 'react-router-dom'

import {About, Contact, Experience, Hero, Navbar, Tech, Footer} from './components'

const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern md:bg-scroll lg:bg-fixed bg-center bg-no-repeat bg-cover">
          <Navbar/>
          <Hero/>
        </div>

        <About/>
        <Experience/>
        <Tech/>
        <Contact/>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
