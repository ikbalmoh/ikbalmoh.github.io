import { classNames } from 'utils'
import projects from './projects.json'
import ProjectCard from './ProjectCard'
import { useRef } from 'react'

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef}
      id="work"
      className="container relative z-[1] mx-auto scroll-m-14 bg-gradient-to-t from-white to-90%"
    >
      <div className="my-14 flex w-full flex-col md:justify-center">
        <div
          className="mx-auto my-5 max-w-lg px-5 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-center text-3xl text-gray-500 md:text-5xl">
            Featured <span className="text-gray-800">Work</span>
          </h1>
        </div>
        <div
          className={classNames(
            'grid grid-cols-12 gap-6 md:gap-8 mt-5 md:mt-20 w-full'
          )}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 2xl:col-span-4"
              data-aos="zoom-in-up"
              data-aos-duration="500"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
