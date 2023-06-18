import React from 'react';
import ProjectCard from './ProjectCard';

import projects from './projects.json';

type Props = {};

export default function Projects({}: Props) {
  return (
    <section
      id="work"
      className="container mx-auto max-w-5xl mt-16 scroll-m-28"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        className="mb-5 text-2xl font-semibold text-center text-indigo-600"
      >
        Latest Projects
      </div>
      <div className="grid grid-cols-12 gap-6 mt-8">
        {projects.map((project) => (
          <div data-aos="fade-up" className="col-span-12 md:col-span-6">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
