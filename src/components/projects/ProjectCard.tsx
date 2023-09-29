import React, { useState } from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { Project } from 'types/project'
import styles from './styles.module.css'
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
      className={classNames(styles.root, project.bg ? styles[project.bg] : '')}
    >
      <img src={project.image} alt={project.title} />
      {active ? (
        <div className="absolute inset-0 z-10 flex flex-col justify-between rounded-2xl bg-amber-100/30 px-7 py-5 backdrop-blur-sm">
          <div className="flex flex-col">
            <div className="flex items-end" data-aos="fade-down">
              <div className="mr-5 text-3xl">{project.title}</div>
              <div className="text-sm">{project.year}</div>
            </div>
            <div className="mt-5 text-base" data-aos="fade-down">
              {project.description}
            </div>
            <div className="mt-3 flex flex-wrap items-center">
              {project.tags.map((tag, idx) => (
                <div
                  data-aos="fade-down"
                  data-aos-duration={(idx + 1) * 150}
                  key={idx}
                  className="mr-3 rounded bg-indigo-600 px-3 py-1 text-xs text-white"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          {project.link ? (
            <a
              data-aos="fade-up"
              target="_blank"
              rel="noreferrer"
              href={project.link}
              className="flex w-min items-center justify-start whitespace-nowrap rounded-full border border-black px-5 py-2 text-sm transition-all hover:border-indigo-700/50 hover:bg-indigo-50 hover:text-indigo-700"
            >
              <span className="mr-3">Preview</span>
              <HiChevronRight size={20} />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
