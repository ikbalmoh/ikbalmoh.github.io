import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import styles from './styles.module.css'
import { classNames } from 'utils'
import ClientMarquee from './ClientMarquee'
import { skills } from './constants'
import LottieAnimation from './LottieAnimation'

export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex h-[70vh] snap-start flex-col items-start justify-center text-gray-500 md:h-[80vh]"
    >
      <div className="flex w-full flex-1 flex-col items-start justify-start md:flex-row">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="h-full w-full md:w-1/2"
        >
          <div className="flex h-full flex-wrap">
            <div className="flex flex-col items-start justify-center">
              <div className="flex flex-wrap">
                <h2 className="mr-2 text-xl font-medium md:text-2xl">
                  Hi there
                </h2>
                <h2
                  className={classNames(
                    styles.wave,
                    'text-xl font-medium md:text-2xl'
                  )}
                >
                  👋🏻
                </h2>
              </div>
              <h1
                className={classNames('mt-1 text-3xl md:text-4xl font-medium')}
              >
                I&apos;m a{' '}
                <span className="font-semibold text-gray-800">
                  Frontend Web
                </span>{' '}
                &{' '}
                <span className="font-semibold text-gray-800">Mobile App</span>{' '}
                Developer
              </h1>
              <div className="mt-3 flex h-8 overflow-hidden text-xl">
                <h3 className="mr-2 text-2xl">expert in</h3>
                <div
                  className={classNames(
                    styles.rolling,
                    'flex flex-col items-start gap-1'
                  )}
                >
                  {skills.map((skill, idx) => (
                    <h3
                      key={skill + idx}
                      className="h-8 bg-gray-800 px-2 text-2xl font-medium text-white"
                    >
                      {skill}
                    </h3>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  href="https://www.linkedin.com/in/ikbalmoh"
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-700 transition-colors duration-200 hover:text-blue-600"
                >
                  <AiFillLinkedin size={30} />
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  href="https://github.com/ikbalmoh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 transition-colors duration-200 hover:text-blue-600"
                >
                  <AiFillGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center md:w-1/2">
          <LottieAnimation />
        </div>
      </div>
      <ClientMarquee />
    </section>
  )
}
