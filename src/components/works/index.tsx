import { classNames } from 'utils'
import styles from './styles.module.css'
import projects from './projects.json'
import ProjectCard from './ProjectCard'
import useScrollListener from 'utils/hooks/useScrollListener'
import { useRef } from 'react'

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useScrollListener({
    sectionRef,
    propertyName: '--scroll-work'
  })

  return (
    <section
      ref={sectionRef}
      id="work"
      className="container relative z-[1] mx-auto min-h-screen scroll-m-20 bg-gradient-to-t from-white to-90% md:h-[200vh]"
    >
      <div className="my-14 flex w-full flex-col md:sticky md:top-[15vh] md:h-[70vh] md:justify-center">
        <div className="mx-auto my-10 max-w-lg px-5 text-center">
          <h1 className="text-3xl text-gray-500 md:text-5xl">
            Recent <span className="text-gray-800">Work</span>
          </h1>
        </div>
        <div
          className={classNames(
            styles['work-track'],
            'flex flex-col md:flex-row gap-6 md:gap-8 mt-5 md:mt-20 w-full'
          )}
        >
          {projects.map((project, i) => (
            <div key={i} className="shrink-0 grow-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
