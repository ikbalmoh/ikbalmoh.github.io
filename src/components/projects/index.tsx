import React from 'react'
import ProjectCard from './ProjectCard'

import projects from './projects.json'

export default function Projects() {
  return (
    <section
      id="work"
      className="container mx-auto mt-16 max-w-5xl scroll-m-28"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        className="mb-5 text-center text-2xl font-semibold text-indigo-600"
      >
        Latest Projects
      </div>
      <div className="mt-8 grid grid-cols-12 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            data-aos="fade-up"
            className="col-span-12 md:col-span-6"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
