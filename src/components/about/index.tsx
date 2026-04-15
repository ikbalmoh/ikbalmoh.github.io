import { useRef } from 'react'
import { classNames } from 'utils'
import { motion, useTransform } from 'framer-motion'
import { useScrollAnimation } from './hook'
import { FaChevronCircleDown } from 'react-icons/fa'
import Work from 'components/works'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { heading, about, bg, scrollYProgress } = useScrollAnimation({ ref })

  return (
    <section
      id="about"
      className="container relative z-[1] mx-auto md:min-h-[300vh] scroll-m-20"
      ref={ref}
    >
      <div className="relative min-h-[70vh] overflow-hidden rounded-2xl p-3 md:sticky md:top-[15vh] md:h-[70vh]">
        <motion.div
          style={{ opacity: bg.opacity }}
          className="absolute inset-0 hidden rounded-3xl border-[0.75rem] border-[#111110] bg-[#1C1917] md:block"
        ></motion.div>
        <motion.div
          className={classNames(
            'h-full w-full items-center justify-center rounded-2xl',
            scrollYProgress < 1 && 'md:overflow-hidden'
          )}
        >
          <div className="relative h-full p-0 md:p-14">
            <motion.div
              style={{ opacity: heading.opacity }}
              className="relative hidden w-full shrink-0 grow-0 items-center rounded-xl px-3 py-5 md:absolute md:inset-0 md:flex md:h-full md:py-3"
            >
              <div className="w-full flex flex-col justify-center items-center">
                <h3
                  className={classNames(
                    'font-medium text-center text-gray-500 md:text-white/60 text-2xl md:text-4xl p-0 md:px-6 md:max-w-xl mx-auto'
                  )}
                >
                  <span className="text-gray-800 md:text-white">
                    Let me introduce myself.
                  </span>
                </h3>
                <h2
                  className={classNames(
                    'mt-3 font-medium text-center text-gray-500 md:text-white/60 text-3xl md:text-5xl p-0 md:px-6 md:max-w-xl mx-auto'
                  )}
                >
                  Keep scrolling — there&apos;s work{' '}
                  <span className="text-gray-800 md:text-white">
                    worth seeing.
                  </span>
                </h2>
                <span className="text-gray-800 md:text-white absolute bottom-5 animate-pulse">
                  <FaChevronCircleDown className="size-10" />
                </span>
              </div>
            </motion.div>
            <motion.div
              style={{ left: about.position, scale: about.scale }}
              className={classNames(
                'relative w-full flex-col justify-center rounded-xl shadow-xl md:absolute md:inset-0 md:h-full  md:bg-white md:p-10 md:shadow-none'
              )}
            >
              <Work />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
