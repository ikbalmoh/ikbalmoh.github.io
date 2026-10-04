import { useEffect, useRef, useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { classNames } from 'utils'
import ClientMarquee from './ClientMarquee'
import { motion, useScroll, useTransform } from 'motion/react'
import Skills from './Skills'
import DitherVeil from 'components/shared/dither-vell'
import useTheme from 'utils/hooks/useTheme'

export default function Hero() {
  const { theme } = useTheme()
  const ref = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Scrolling animations mapping
  const textX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-120%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  const photoX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-120%'])
  const photoReveal = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const photoRotate = useTransform(scrollYProgress, [0, 0.30], [0, 8])

  const aboutX = useTransform(scrollYProgress, [0, 0.3], ['100%', '0%'])
  const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0.2, 0.8] : [0.55, 1],
    [1, 0]
  )
  const scale = useTransform(
    scrollYProgress,
    isMobile ? [0.1, 1] : [0.4, 1],
    [1, 0.6]
  )

  return (
    <section
      id="home"
      className={classNames(
        'h-100vh md:h-[200vh] relative z-0 mx-auto text-gray-500 dark:text-gray-300'
      )}
      ref={ref}
    >
      <motion.div
        style={{ opacity, scale }}
        className={classNames(
          'transform container fixed inset-0 z-0 mx-auto flex flex-col items-start justify-center h-[100vh] scale-100 pb-5'
        )}
      >
        <div className="flex w-full flex-1 flex-col-reverse items-center justify-center pt-5 md:flex-row md:flex-nowrap gap-8">
          {/* Left: text content */}
          <motion.div
            style={{
              x: isMobile ? 0 : textX,
              opacity: isMobile ? 1 : textOpacity
            }}
            className="flex h-full w-full flex-col items-start justify-center md:w-1/2"
          >
            <h3 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-100">
              Hey, I'm Ikbal
            </h3>
            <h1 className='my-3 font-bold text-3xl md:text-5xl font-serif text-gray-800 dark:text-gray-100'><span className="text-gradient bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">AI</span> & Frontend Engineer</h1>
            <h2
              className={classNames('mt-3 text-xl md:text-2xl')}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              I engineer complex{' '}
              <Skills />
            </h2>
            <h2 className={classNames('text-xl md:text-2xl')}
            data-aos="fade-up"
              data-aos-duration="1500"
            >
              with a focus on{' '}
              <span className="font-semibold text-gray-800 dark:text-gray-100">the craft</span>.
            </h2>

            {/* Mobile-only bio: visible before any scrolling */}
            <div className="mt-6 block md:hidden space-y-3">
              <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-300">
                7 years across web and mobile — TypeScript, Dart, React,
                Flutter. I care less about the stack and more about the outcome:
                software people actually want to use.
              </p>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  Upwork Top Rated
                </span>
              </div>
              <a
                href="/#work"
                className="inline-block rounded-full bg-gray-800 px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
              >
                See my work
              </a>
            </div>
          </motion.div>

          {/* Right: photo ↔ about panel */}
          <div className="relative mb-5 hidden md:block w-full md:mb-0 md:w-1/2 h-full">
            {/* Photo */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center"
              style={{
                x: photoX,
                rotate: photoRotate
              }}
            >
              <DitherVeil
                src="/images/ikbalmoh-holografik.png"
                pattern="floyd"
                pixelSize={2}
                inkColor={theme === 'dark' ? '#111827' : '#ffffff'}
                paperColor={theme === 'dark' ? '#e5e7eb' : '#0f0f0f'}
                revealRadius={200}
                revealProgress={photoReveal}
                softness={0.6}
                linger={1}
                fit="cover"
                rimColor="#a78bfa"
                palette="duotone"
                levels={2}
                contrast={1.15}
                brightness={0}
                rim={0}
                reverse={false}
                wander={false}
                clickBurst
                className='w-full h-full object-contain'
            />
            </motion.div>
            {/* About panel */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center gap-6 px-2"
              style={{
                x: isMobile ? 0 : aboutX,
                opacity: aboutOpacity
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-300">
                About me
              </p>

              <div id="about-content" className="space-y-4">
                <p className="text-lg font-medium text-gray-800 leading-snug dark:text-gray-100">
                  Frontend is where design meets engineering. That&apos;s where
                  I live.
                </p>
                <p className="text-base text-gray-500 leading-relaxed dark:text-gray-300">
                  <span className="font-semibold">
                    Top Rated on Upwork | 7 Years Exp.
                  </span>{' '}
                  Whether it's TypeScript or Dart, I care less about the stack
                  and more about building software people actually want to use.
                </p>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ikbalmoh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-white"
                >
                  <AiFillGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ikbalmoh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-white"
                >
                  <AiFillLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* CTA */}
              <a
                href="/#work"
                className="self-start rounded-full bg-gray-800 px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-300"
              >
                See my work
              </a>
            </motion.div>
          </div>
        </div>
        <ClientMarquee />
      </motion.div>
      <div className="h-screen"></div>
    </section>
  )
}
