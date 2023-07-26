import { HashRouter } from 'react-router-dom'

import { About, Contact, Hero, Navbar, Footer } from './components'
import { SocialBar } from './components'

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Hero />

      <About />
      <Contact />
      <Footer />

      <SocialBar />
    </HashRouter>
  )
}

export default App
