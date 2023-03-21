import { HashRouter } from 'react-router-dom'

import {About, Contact, Experience, Hero, Navbar, Tech, Footer} from './components'

const App = () => {
  return (
    <HashRouter>
      <div className="relative z-0 bg-slate-900">
        <div className="bg-hero-pattern bg-fixed bg-no-repeat bg-auto md:bg-cover">
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
