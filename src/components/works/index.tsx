import { classNames } from 'utils'
import projects from './projects.json'
import ProjectCard from './ProjectCard'
import { useRef, useState } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'

export default function Work() {
  const filters: { [key: string]: string } = {
    web: '💻 Web',
    mobile: '📱 Mobile'
  }

  const [activeFilter, setActiveFilter] = useState<string>('web')

  const filteredProjects = () => {
    return projects.filter((project) => project.type === activeFilter)
  }

  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef}
      id="work"
      className="container relative z-[1] mx-auto scroll-m-14"
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
          className="my-5 flex items-center justify-center gap-6 md:my-10"
          data-aos="fade-up"
        >
          {Object.keys(filters).map((key) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={classNames(
                'rounded-lg px-4 py-2 transition-colors duration-500',
                activeFilter === key ? 'bg-gray-100' : 'bg-transparent'
              )}
            >
              {filters[key]}
            </button>
          ))}
        </div>
        {filteredProjects().length > 0 ? (
          <div
            className={classNames('grid grid-cols-12 gap-6 xl:gap-8 w-full')}
          >
            {filteredProjects().map((project, i) => (
              <div
                key={i}
                className="col-span-12 md:col-span-6"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center p-5 text-gray-500">
            <div data-aos="fade-up" data-aos-duration="500">
              <AiOutlineFileSearch size={100} />
            </div>
            <h1
              className="mt-5 text-center text-lg font-medium"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              More work will be available soon :)
            </h1>
          </div>
        )}
      </div>
    </section>
  )
}
