import { HashRouter } from 'react-router-dom'

import { About, Contact, Experience, Hero, Navbar, Tech, Footer } from './components'

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Hero />

      <About />
      <Experience />
      <Tech/>
      <Contact />
      <Footer />
    </HashRouter>
  )
}

export default App
