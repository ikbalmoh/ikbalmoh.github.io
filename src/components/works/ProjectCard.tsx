import React, { useState } from 'react'
import { Project } from 'types/project'
import { classNames } from 'utils'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [active, setActive] = useState<boolean>(false)
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="h-[13rem] w-[22rem] scale-100 overflow-hidden rounded-md border border-gray-100 opacity-80 shadow-none transition-all duration-500 hover:z-50 hover:h-[22rem] hover:scale-105 hover:opacity-100 hover:shadow-xl"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-[13rem] w-auto object-cover"
      />
      <div
        className={classNames(
          'w-full rounded-b-md bg-white transition-all duration-1000 p-4 opacity-0',
          active ? 'block opacity-100' : 'hidden'
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
