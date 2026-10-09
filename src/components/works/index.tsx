import { classNames } from 'utils'
import projects from './projects.json'
import ProjectCard from './ProjectCard'
import { useRef, useState } from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { motion } from 'motion/react'

export default function Work() {
  const filters: { [key: string]: string } = {
    all: 'All',
    web: 'Web',
    mobile: 'Mobile'
  }

  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredProjects = () => {
    return activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.type === activeFilter)
  }

  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <motion.section
      ref={sectionRef}
      id="work"
      className="relative z-[1] scroll-m-10 w-full bg-white md:bg-gray-50/90 dark:bg-gray-900 dark:md:bg-gray-950/90"
    >
      <div className="container mx-auto py-10">
        <div className="flex w-full flex-col md:justify-centerpy-5">
          <div className="mx-auto my-5 px-5 text-center" data-aos="fade-up">
            <h1 className="text-center text-3xl text-gray-500 md:text-5xl dark:text-gray-300">
              My <span className="text-gray-800 dark:text-gray-100">Work</span>
            </h1>
            <h4 className="mt-5 text-center text-base font-normal text-gray-500 dark:text-gray-300">
              Selected work I've taken on in the past.
            </h4>
          </div>
          {filteredProjects().length > 0 ? (
            <div
              className={classNames(
                'grid grid-cols-12 gap-6 xl:gap-8 w-full mt-10'
              )}
            >
              {filteredProjects().map((project, i) => (
                <div
                  key={i}
                  className={
                    i === 0
                      ? 'col-span-12  md:col-span-6'
                      : 'col-span-12 md:col-span-6'
                  }
                  data-aos="zoom-in-up"
                  data-aos-duration="700"
                >
                  <ProjectCard project={project} featured={false} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[300px] flex-col items-center justify-center p-5 text-gray-500 dark:text-gray-300">
              <div data-aos="fade-up" data-aos-duration="500">
                <AiOutlineFileSearch size={60} />
              </div>
              <h1
                className="mt-5 text-center text-lg font-medium"
                data-aos="fade-up"
                data-aos-duration="700"
              >
                More projects coming soon.
              </h1>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
