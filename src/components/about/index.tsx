import { useRef } from 'react'
import { classNames } from 'utils'
import { motion } from 'framer-motion'
import { useScrollAnimation } from './hook'
import { FaChevronCircleRight, } from 'react-icons/fa'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { heading, about, bg } = useScrollAnimation({ ref })

  return (
    <section
      id="about"
      className="container relative z-[1] mx-auto md:min-h-[300vh]"
      ref={ref}
    >
      <div className="relative min-h-[70vh] overflow-hidden rounded-2xl p-3 md:sticky md:top-[15vh] md:h-[70vh]">
        <motion.div
          style={{ opacity: bg.opacity }}
          className="absolute inset-0 hidden rounded-3xl border-[0.75rem] border-black bg-gradient-to-br from-black to-blue-900 bg-fixed md:block"
        ></motion.div>
        <div className="h-full w-full items-center justify-center overflow-hidden rounded-2xl">
          <div className="relative h-full p-0 md:p-14">
            <motion.div
              style={{ opacity: heading.opacity }}
              className="relative hidden w-full shrink-0 grow-0 items-center rounded-xl px-3 py-5 md:absolute md:inset-0 md:flex md:h-full md:py-3"
            >
              <div className='w-full flex flex-col justify-center items-center'>
                <h3
                  className={classNames(
                    'font-medium text-center text-gray-500 md:text-white/60 text-2xl md:text-4xl p-0 md:px-6 md:max-w-xl mx-auto'
                  )}
                >
                  <span className="text-gray-800 md:text-white">Glad you’re here</span>
                </h3>
                <h2
                  className={classNames(
                    'mt-3 font-medium text-center text-gray-500 md:text-white/60 text-3xl md:text-5xl p-0 md:px-6 md:max-w-xl mx-auto'
                  )}
                >
                  Keep scrolling to know more <span className="text-gray-800 md:text-white">
                    about me
                  </span>
                </h2>
                <span className="text-gray-800 md:text-white absolute right-5 animate-pulse"><FaChevronCircleRight className='size-10' /></span>
              </div>
            </motion.div>
            <motion.div
              style={{ left: about.position, scale: about.scale }}
              className="relative w-full flex-col justify-center rounded-xl shadow-xl md:absolute md:inset-0 md:h-full md:overflow-hidden md:bg-white md:p-10 md:shadow-none"
            >
              <h1
                className="text-center text-3xl  text-gray-800 xl:text-5xl"
                data-aos="fade-up"
              >
                About <span className="text-gray-500">Me</span>
              </h1>
              <div className="mt-8 flex flex-col items-center md:mt-10 md:flex-row md:items-start">
                <div className="mb-5 mr-0 mt-2 md:mb-0 md:mr-8">
                  <img
                    data-aos="fade-up"
                    src="/images/avatar.JPG"
                    alt="ikbalmoh"
                    className="my-3 w-[120px] rounded-lg object-contain object-right-top shadow-lg md:my-0"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  className="flex flex-1 flex-col justify-center text-xl text-gray-600"
                >
                  <p>
                    Top Rated Frontend Developer on Upwork with 7 years of experience building scalable, cross-platform web and mobile applications.
                  </p>
                  <p className="mt-2">
                    I specialize in TypeScript, Dart, and frameworks like Next.js, React Native, and Flutter. Passionate about writing clean, maintainable code and delivering intuitive, reliable user experiences.
                  </p>
                  <p className="mt-5">
                    Want to talk to me? <br />
                    please email me at{' '}
                    <a
                      href="mailto:ikbalmoh.dev@gmail.com"
                      className="text-blue-600"
                    >
                      ikbalmoh.dev@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
