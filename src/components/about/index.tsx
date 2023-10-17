import { useRef } from 'react'
import { classNames } from 'utils'
import styles from './styles.module.css'

export default function About() {
  const ref = useRef(null)

  return (
    <section
      id="about"
      className={classNames(
        styles.root,
        'container relative z-[1] mx-auto min-h-[200vh] md:min-h-[300vh]'
      )}
      ref={ref}
    >
      <div
        className={classNames(
          styles['about-wrapper'],
          'sticky top-[15vh] min-h-[70vh] h-[90vh] md:h-[70vh] overflow-hidden rounded-2xl p-3'
        )}
      >
        <div
          className={classNames(
            'fixed inset-0 rounded-3xl border-[0.75rem] border-black bg-gradient-to-br from-black to-blue-900 bg-fixed hidden md:block',
            styles['about-bg']
          )}
        ></div>
        <div className="h-full w-full items-center justify-center overflow-hidden rounded-2xl">
          <div className="relative h-full p-0 md:p-14">
            <div
              className={classNames(
                styles['about-heading'],
                'absolute inset-0 flex h-full w-full shrink-0 grow-0 items-center p-3 rounded-xl'
              )}
            >
              <h2
                className={classNames(
                  'font-medium text-center text-gray-500 md:text-white/60 text-4xl md:text-6xl p-0 md:px-6 md:max-w-xl mx-auto'
                )}
              >
                <span className="text-gray-800 md:text-white">Hello,</span>
                <br />
                Nite to{' '}
                <span className="text-gray-800 md:text-white">Meet</span> You
              </h2>
            </div>
            <div
              className={classNames(
                styles['about-container'],
                'absolute inset-0 h-min md:h-full w-full bg-white rounded-xl md:overflow-hidden p-5 md:p-10 flex flex-col justify-center shadow-xl md:shadow-none'
              )}
            >
              <div className="text-2xl font-medium text-gray-800">
                I am Ikbal
              </div>
              <div className="mt-5 flex flex-col items-center justify-center text-xl text-gray-600">
                <p className="mt-2">
                  I&apos;m a passionate Frontend Web and Mobile App Developer
                  with 5+ years of experience building scalable web and mobile
                  applications.
                </p>
                <p>
                  Proficient in various frameworks such as Next.js, React
                  Native, Flutter, and Laravel, I Continuously staying updated
                  with the latest industry trends, I strive to deliver
                  high-quality code and exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
