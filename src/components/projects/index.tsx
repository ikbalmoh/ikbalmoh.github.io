import React from 'react'
import ProjectCard from './ProjectCard'

import projects from './projects.json'

export default function Projects() {
  return (
    <section id="work" className=" z-0 min-h-screen scroll-m-16 bg-slate-50">
      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="200"
          className="mx-auto my-10 max-w-md text-center"
        >
          <h2 className="text-2xl font-medium text-black md:text-3xl">
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
      </div>
    </section>
  )
}
