import useScrollListener from 'utils/hooks/useScrollListener'
import { useRef } from 'react'
import { classNames } from 'utils'
import styles from './styles2.module.css'

function Portfolio() {
  return (
    <div className="grid w-full grid-cols-12 gap-8 p-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          className="col-span-6 h-[200px] rounded-lg bg-gray-200"
          key={i}
        ></div>
      ))}
    </div>
  )
}

export default function Works() {
  const ref = useRef(null)

  useScrollListener({
    propertyName: '--scroll-works',
    sectionRef: ref
  })

  return (
    <section
      id="works"
      className="container relative z-[1] mx-auto h-[200vh] scroll-m-20 py-6"
      ref={ref}
    >
      <div
        className={classNames(
          styles['work-wrapper'],
          'sticky top-[15vh] h-[70vh] overflow-hidden rounded-2xl p-3'
        )}
      >
        <div className="fixed inset-0 rounded-3xl border-[0.75rem] border-black bg-gradient-to-br from-black to-blue-900 bg-fixed"></div>
        <div className="h-full w-full items-center justify-center overflow-hidden rounded-2xl">
          <div className="relative h-full p-14">
            <div
              className={classNames(
                styles['work-heading'],
                'absolute inset-0 flex h-full w-full shrink-0 grow-0 items-center p-3 rounded-xl'
              )}
            >
              <h2
                className={classNames(
                  'font-medium text-center text-white/60 text-4xl md:text-6xl px-6 md:max-w-xl mx-auto'
                )}
              >
                Highly <span className="text-white">dedicated</span> to all my{' '}
                <span className="text-white">work</span>
              </h2>
            </div>
            <div
              className={classNames(
                styles['work-container'],
                'absolute inset-0 h-full w-full shrink-0 grow-0 bg-white rounded-xl overflow-hidden'
              )}
            >
              <Portfolio />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
