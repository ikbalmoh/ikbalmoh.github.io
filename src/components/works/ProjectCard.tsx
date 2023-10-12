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
      className="group w-full scale-100 overflow-hidden rounded-lg border border-gray-100 opacity-90 shadow-none transition-all delay-700 duration-500 will-change-transform hover:scale-105 hover:opacity-100 hover:shadow-xl md:w-auto"
    >
      <div
        style={{
          background: `linear-gradient(to right, ${project.gradient.join(
            ', '
          )})`
        }}
        className={
          'flex h-[13rem] w-full items-end overflow-hidden px-2 pt-5 lg:px-3 xl:h-[12rem]'
        }
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full origin-bottom scale-90 rounded-t-lg object-cover object-left-top opacity-90 transition-[transform,opacity] duration-1000 group-hover:scale-110 group-hover:opacity-100"
        />
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
