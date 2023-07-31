import * as React from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import Projects from './projects'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

const App = () => {
  return (
    <main className="flex min-h-screen flex-col pb-32">
      <Header />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App
