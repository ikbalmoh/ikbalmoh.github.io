import { ErrorBoundary } from 'react-error-boundary'
import Header from './header'
import Hero from './hero'
import About from './about'
import Works from './works'
import AOS from 'aos'
import { ThemeProvider } from 'utils/hooks/useTheme'

import 'aos/dist/aos.css'

AOS.init()

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ThemeProvider>
        <main className="flex min-h-screen flex-col scroll-smooth bg-white pb-32 font-exo dark:bg-gray-900 dark:text-gray-100">
          <Header />
          <Hero />
          {/* <About /> */}
          <Works />
        </main>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
