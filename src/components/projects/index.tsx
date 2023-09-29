import React from 'react'
import ProjectCard from './ProjectCard'

import projects from './projects.json'

export default function Projects() {
  return (
    <section
      id="work"
      className="container mx-auto mt-16 min-h-screen snap-start scroll-m-28"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        className="mx-auto mb-5 max-w-md text-center"
      >
        <h2 className="text-3xl font-normal text-black md:text-4xl">
          A small selection of my work
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-12 gap-6 xl:gap-10">
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
