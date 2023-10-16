import { useRef } from 'react'
import { classNames } from 'utils'
import styles from './styles.module.css'

const aboutText = [
  "I'm a passionate Frontend Web and Mobile App Developer with 5+ years of experience building scalable web and mobile applications. ",
  'Proficient in various frameworks such as Next.js, React Native, Flutter, and Laravel, I Continuously staying updated with the latest industry trends, I strive to deliver high-quality code and exceptional user experiences.'
]

export default function About() {
  const ref = useRef(null)

  return (
    <section
      id="about"
      className={classNames(
        styles.root,
        'container relative z-[1] mx-auto min-h-[300vh]'
      )}
      ref={ref}
    >
      <div
        className={classNames(
          styles['about-wrapper'],
          'sticky top-[15vh] min-h-[70vh] h-[70vh] overflow-hidden rounded-2xl p-3'
        )}
      >
        <div
          className={classNames(
            'fixed inset-0 rounded-3xl border-[0.75rem] border-black bg-gradient-to-br from-black to-blue-900 bg-fixed',
            styles['about-bg']
          )}
        ></div>
        <div className="h-full w-full items-center justify-center overflow-hidden rounded-2xl">
          <div className="relative h-full p-14">
            <div
              className={classNames(
                styles['about-heading'],
                'absolute inset-0 flex h-full w-full shrink-0 grow-0 items-center p-3 rounded-xl'
              )}
            >
              <h2
                className={classNames(
                  'font-medium text-center text-white/60 text-4xl md:text-6xl px-6 md:max-w-xl mx-auto'
                )}
              >
                <span className="text-white">Nice</span> to Meet You
              </h2>
            </div>
            <div
              className={classNames(
                styles['about-container'],
                'absolute inset-0 h-full w-full bg-white rounded-xl overflow-hidden p-10 flex flex-col justify-center'
              )}
            >
              <div className="text-2xl text-gray-800">Hi, I&apos;m Ikbal</div>
              <div className="mt-5 flex flex-col items-center justify-center text-xl text-gray-600">
                {aboutText.map((text, i) => (
                  <p className="mt-2" key={i}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
