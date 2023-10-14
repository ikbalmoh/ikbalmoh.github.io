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
      className="group w-full scale-100 overflow-hidden rounded-lg border border-gray-100 shadow-none transition-all duration-500 will-change-transform hover:scale-105 hover:shadow-xl md:w-auto"
    >
      <div
        style={{
          background: `linear-gradient(to right, ${project.gradient.join(
            ', '
          )})`
        }}
        className={'flex h-[12rem] w-full items-end overflow-hidden'}
      >
        <div className="h-full w-full origin-bottom translate-y-0 scale-75 opacity-90 transition-[transform,opacity] duration-1000 will-change-transform group-hover:scale-100 group-hover:opacity-100">
          <img
            src={project.image}
            alt={project.title}
            className="h-auto w-full translate-y-0 rounded-t-md object-contain object-left-top delay-0 duration-1000 ease-in group-hover:translate-y-[calc(12rem-100%)] group-hover:delay-1000"
          />
        </div>
      </div>
      <div className={classNames('w-full bg-white relative h-24')}>
        <div className="h-10 px-3 pt-3">
          <h1 className="text-lg font-medium">{project.title}</h1>
        </div>
        <div className="h-14 overflow-hidden">
          <div className="z-0 flex translate-y-0 flex-col delay-500 duration-500 will-change-transform group-hover:-translate-y-14">
            <div className="flex h-14 flex-col justify-between px-3">
              <div className="mt-3 flex items-start justify-between">
                <div className="mr-3 flex flex-1 flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700"
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
            <div className="p-3 text-sm text-gray-600">
              {project.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
