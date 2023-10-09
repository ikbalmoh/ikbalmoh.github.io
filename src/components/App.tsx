import Header from './header'
import Hero from './hero'
import About from './about'
import Works from './works'
import AOS from 'aos'

import 'aos/dist/aos.css'

AOS.init()

const App = () => {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth bg-white pb-32 font-exo">
      <Header />
      <Hero />
      <Works />
      <About />
    </main>
  )
}

export default App
