import { classNames } from 'utils'
import styles from './styles.module.css'
import projects from './projects.json'
import ProjectCard from './ProjectCard'

export default function index() {
  return (
    <section
      id="works"
      className="flex min-h-screen flex-col justify-center overflow-x-hidden"
    >
      <div className="mx-auto my-10 max-w-lg text-center">
        <h1 className="text-5xl text-gray-500" data-aos="fade-up">
          Small <span className="text-gray-800">selection</span> of my{' '}
          <span className="text-gray-800">work</span>
        </h1>
      </div>
      <div
        className={classNames(
          styles['work-track'],
          'mt-5 flex flex-col md:flex-row gap-6 md:gap-8 px-10 lg:px-36 z-20'
        )}
      >
        {projects.map((project, i) => (
          <div
            data-aos="fade-left"
            data-aos-duration={500}
            key={i}
            className="shrink-0 grow-0"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
