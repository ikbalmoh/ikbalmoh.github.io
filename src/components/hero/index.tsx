import { useRef } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { classNames } from 'utils'
import ClientMarquee from './ClientMarquee'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lottie from 'lottie-react'
import hello from '../../assets/hello.json'
import Skills from './Skills'

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1]
const DURATION: number = 1.5

const aboutItems = [
  { label: 'Based in', value: 'Indonesia' },
  { label: 'Focus', value: 'Frontend Web & Mobile' },
  { label: 'Experience', value: '5+ years' }
]

const techStack = ['React', 'React Native', 'TypeScript', 'Flutter', 'Next.js']

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Scrolling animations mapping
  const textX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-120%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

  const photoX = useTransform(scrollYProgress, [0, 0.3], ['0%', '-120%'])

  const aboutX = useTransform(scrollYProgress, [0, 0.3], ['100%', '0%'])
  const aboutOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  const opacity = useTransform(scrollYProgress, [0.55, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 0.6])

  return (
    <section
      id="home"
      className={classNames('h-[170vh] relative z-0 mx-auto text-gray-500')}
      ref={ref}
    >
      <motion.div
        style={{ opacity, scale }}
        className={classNames(
          'transform container fixed inset-0 z-0 mx-auto flex flex-col items-start justify-center h-[95vh] scale-100 pb-5'
        )}
        transition={{ duration: DURATION, ease: EASING }}
      >
        <div className="flex w-full flex-1 flex-col-reverse items-center justify-center pt-5 md:flex-row md:flex-nowrap gap-8">
          {/* Left: text content */}
          <motion.div
            style={{
              x: textX,
              opacity: textOpacity
            }}
            className="flex h-full w-full flex-col items-start justify-center md:w-1/2"
          >
            <Lottie animationData={hello} className="w-40 h-20" />
            <h1
              className={classNames('mt-5 text-3xl md:text-4xl font-medium')}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              I&apos;m a{' '}
              <span className="font-semibold text-gray-800">Frontend Web</span>{' '}
              & <span className="font-semibold text-gray-800">Mobile App</span>{' '}
              Developer
            </h1>
            <Skills />
            <div
              className="mt-8 flex items-center gap-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            ></div>
          </motion.div>

          {/* Right: photo ↔ about panel */}
          <div className="relative mb-5 hidden md:block w-full md:mb-0 md:w-1/2 h-full">
            {/* Photo */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center"
              style={{
                x: photoX
              }}
            >
              <img
                src="/images/ikbalmoh.dev.webp"
                alt="Ikbal Moh"
                className="w-full h-auto object-contain"
              />
              <div className="h-0.5 bg-gray-100 w-full shadow-lg" />
            </motion.div>

            {/* About panel */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center gap-6 px-2"
              style={{
                x: aboutX,
                opacity: aboutOpacity
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                    About me
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Ikbal Moh
                  </h2>
                </div>
              </div>

              {/* Info rows */}
              <div className="flex flex-col gap-2">
                {aboutItems.map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="w-24 text-xs text-gray-400 shrink-0">
                      {label}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ikbalmoh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <AiFillGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/ikbalmoh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <AiFillLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* CTA */}
              <a
                href="#about"
                className="self-start rounded-full bg-gray-800 px-5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-700"
              >
                See my work
              </a>
            </motion.div>
          </div>
        </div>
        <ClientMarquee />
      </motion.div>
      <div className="h-[95vh]"></div>
    </section>
  )
}
