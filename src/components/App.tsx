import { ErrorBoundary } from 'react-error-boundary'
import Header from './header'
import Hero from './hero'
import About from './about'
import Works from './works'
import AOS from 'aos'

import 'aos/dist/aos.css'

AOS.init()

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <main className="flex min-h-screen flex-col scroll-smooth bg-white pb-32 font-exo">
        <Header />
        <Hero />
        <About />
        <Works />
      </main>
    </ErrorBoundary>
  )
}

export default App
