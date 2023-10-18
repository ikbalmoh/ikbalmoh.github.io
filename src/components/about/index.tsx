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
        'container relative z-[1] mx-auto md:min-h-[300vh]'
      )}
      ref={ref}
    >
      <div
        className={classNames(
          styles['about-wrapper'],
          'md:sticky md:top-[15vh] min-h-[70vh] md:h-[70vh] overflow-hidden rounded-2xl p-3'
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
                'absolute inset-0 hidden md:flex h-full w-full shrink-0 grow-0 items-center p-3 rounded-xl'
              )}
            >
              <h2
                className={classNames(
                  'font-medium text-center text-gray-500 md:text-white/60 text-4xl md:text-6xl p-0 md:px-6 md:max-w-xl mx-auto'
                )}
              >
                <span className="text-gray-800 md:text-white">Hello,</span>
                <br />
                Nice to <span className="text-gray-800 md:text-white">
                  See
                </span>{' '}
                You
              </h2>
            </div>
            <div className={styles['about-container']}>
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
                    I&apos;m a passionate{' '}
                    <span className="font-medium">Frontend Web</span> and{' '}
                    <span className="font-medium">Mobile App</span> Developer
                    with 5+ years of experience building scalable web and mobile
                    applications.
                  </p>
                  <p className="mt-2">
                    Proficient in various frameworks such as{' '}
                    <span className="font-medium">
                      Next.js / React.js, Vue.js, React Native, Flutter, and
                      Laravel
                    </span>
                    {', '}I continuously staying updated with the latest
                    industry trends, I strive to deliver high-quality code and
                    exceptional user experiences.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
