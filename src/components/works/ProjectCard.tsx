import { useRef } from 'react'
import { Project } from 'types/project'
import { classNames } from 'utils'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className="w-full scale-100 overflow-hidden rounded-lg border border-gray-100 opacity-90 shadow-none transition-all duration-500 will-change-transform hover:scale-105 hover:border-gray-800 hover:opacity-100 hover:shadow-xl md:w-auto"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-[13rem] w-full object-cover object-left-top md:h-[15rem]"
      />
      <div
        className={classNames(
          'w-full rounded-b-lg bg-white transition-all duration-1000 p-4'
        )}
      >
        <h1 className="text-lg font-medium">{project.title}</h1>
        <div className="w-full max-w-xs text-gray-600">
          <p>{project.description}</p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex flex-1 items-center gap-2">
            {project.tags.map((tag) => (
              <span
                className="rounded-md bg-gray-200 px-3 py-1 text-xs"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          {project.client ? (
            <img
              src={`/images/clients/${project.client}.png`}
              alt={project.client}
              className="h-8 w-auto object-contain"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
