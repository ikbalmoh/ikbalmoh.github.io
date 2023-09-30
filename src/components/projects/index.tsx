import React from 'react'
import ProjectCard from './ProjectCard'

import projects from './projects.json'

export default function Projects() {
  return (
    <section id="work" className="min-h-screen scroll-m-16">
      <div className="container mx-auto">
        <div className="relative mx-auto my-5 max-w-md text-center">
          <h2 className="sticky top-14 text-2xl font-medium text-black md:text-3xl">
            A small selection of my work
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-6 xl:gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              data-aos="zoom-in-up"
              className="col-span-12 md:col-span-6"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
