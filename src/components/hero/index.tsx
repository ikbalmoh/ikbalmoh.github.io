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
  const heroSkewY = useTransform(scrollYProgress, [0, 0.8], [0, 15])

  const photoX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-120%'])
  const photoReveal = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const photoRotate = useTransform(scrollYProgress, [0, 0.3], [0, 8])

  const aboutX = useTransform(scrollYProgress, [0, 0.3], ['100%', '0%'])
  const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
  const aboutSkewY = useTransform(scrollYProgress, [0, 0.3, 1], [-5, 0, 0])

  const opacity = useTransform(
    scrollYProgress,
    isMobile ? [0, 0.2, 0.8, 1] : [0, 0.5, 0.6, 1],
    [1, 1, 0.5, 0]
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
          'transform container fixed inset-0 z-0 mx-auto flex flex-col items-start justify-center h-[95vh] scale-100 pb-5'
        )}
      >
        <div className="flex w-full flex-1 flex-col-reverse items-center justify-center pt-5 md:flex-row md:flex-nowrap gap-8">
          {/* Left: text content */}
          <motion.div
            style={{
              x: isMobile ? 0 : textX,
              opacity: isMobile ? 1 : textOpacity,
              skewY: isMobile ? 0 : heroSkewY
            }}
            className="flex h-full w-full flex-col items-start justify-center md:w-3/5"
          >
            {/* Mobile photo: visible only on mobile above the hero text */}
            <div
              className="mb-4 md:hidden text-center w-full flex items-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="relative h-36 w-36 sm:w-44 sm:h-44 mx-auto">
                <DitherVeil
                  src="/images/ikbalmoh-holografik.png"
                  pattern="floyd"
                  pixelSize={2}
                  inkColor={theme === 'dark' ? '#030712' : '#ffffff'}
                  paperColor={theme === 'dark' ? '#e5e7eb' : '#0f0f0f'}
                  revealRadius={120}
                  revealProgress={photoReveal}
                  softness={0.6}
                  linger={1}
                  fit="contain"
                  rimColor="#a78bfa"
                  palette="duotone"
                  levels={2}
                  contrast={1.15}
                  brightness={0}
                  rim={0}
                  reverse={false}
                  wander={false}
                  clickBurst
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h3
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-100"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Hey, I'm{' '}
              <span className="font-semibold  text-gray-800 dark:text-gray-100">
                Ikbal
              </span>
            </h3>
            <h1
              className="my-3 font-bold text-3xl md:text-5xl font-serif text-gray-800 dark:text-gray-100"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <span className="text-gradient bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                Full-Stack AI
              </span>{' '}
              <br />
              Engineer
            </h1>
            <h2
              className={classNames('mt-3 text-xl md:text-2xl')}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              I build reliable, user-focused
              <br />
              <Skills /> applications and
              <br />
              <span className="font-bold text-gradient bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                AI capabilities
              </span>{' '}
              into real-world products.
            </h2>

            {/* Mobile-only bio: visible before any scrolling */}
            <div className="mt-6 block md:hidden space-y-3">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                  Upwork Top Rated
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-300">
                <span className="font-medium text-gray-800 dark:text-gray-100">Ikbal Moh</span> — 8+ years building scalable web & mobile apps. Now engineering
                intelligent, LLM-powered products, AI agents, and intuitive user
                experiences.
              </p>
            </div>
          </motion.div>

          {/* Right: photo ↔ about panel */}
          <div
            className="relative mb-5 hidden md:block w-full md:mb-0 md:w-1/2 h-full"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
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
                inkColor={theme === 'dark' ? '#030712' : '#ffffff'}
                paperColor={theme === 'dark' ? '#e5e7eb' : '#0f0f0f'}
                revealRadius={200}
                revealProgress={photoReveal}
                softness={0.6}
                linger={1}
                fit="contain"
                rimColor="#a78bfa"
                palette="duotone"
                levels={2}
                contrast={1.15}
                brightness={0}
                rim={0}
                reverse={false}
                wander={false}
                clickBurst
                className="w-full h-full object-contain"
              />
            </motion.div>
            {/* About panel */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center gap-6 px-2"
              style={{
                x: isMobile ? 0 : aboutX,
                opacity: aboutOpacity,
                skewY: isMobile ? 0 : aboutSkewY
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-300">
                About me
              </p>

              <div id="about-content" className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Ikbal Moh
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Full-Stack AI Engineer
                  </p>
                </div>
                <p className="text-base text-gray-500 leading-relaxed dark:text-gray-300">
                  <span className="font-semibold text-gray-700 dark:text-gray-200">
                    Top Rated on Upwork · 8+ years experience.
                  </span>{' '}
                  Specializing in full-stack architecture and applied AI — turning
                  complex LLM capabilities, autonomous agents, and RAG into
                  reliable, production-grade web and mobile applications.
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
                View my projects
              </a>
            </motion.div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="w-full text-center"
        >
          <ClientMarquee />
        </div>
      </motion.div>
      <div className="h-screen"></div>
    </section>
  )
}
