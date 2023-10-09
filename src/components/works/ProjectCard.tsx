import { Project } from 'types/project'
import { classNames } from 'utils'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="w-full scale-100 overflow-hidden rounded-lg border border-gray-100 opacity-90 shadow-none transition-all duration-500 hover:opacity-100 hover:shadow-xl md:w-[22rem]">
      <img
        src={project.image}
        alt={project.title}
        className="h-[13rem] w-auto object-cover"
      />
      <div
        className={classNames(
          'w-full rounded-b-lg bg-white transition-all duration-1000 p-4'
        )}
      >
        <h1 className="text-lg font-medium">{project.title}</h1>
        <div className="w-full text-gray-600">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}
