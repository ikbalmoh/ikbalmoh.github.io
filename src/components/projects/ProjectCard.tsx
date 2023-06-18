import React, { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="rounded-2xl bg-slate-200/60 h-64 px-10 relative flex items-end"
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-t-lg object-contain w-full"
      />
      {active ? (
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl backdrop-blur-sm z-10 py-5 px-7 flex flex-col justify-between bg-amber-100/30">
          <div className="flex flex-col">
            <div className="flex items-end" data-aos="fade-down">
              <div className="text-3xl mr-5">{project.title}</div>
              <div className="text-sm">{project.year}</div>
            </div>
            <div className="mt-5 text-base" data-aos="fade-down">
              {project.description}
            </div>
            <div className="flex items-center flex-wrap mt-3">
              {project.tags.map((tag, idx) => (
                <div
                  data-aos="fade-down"
                  data-aos-duration={(idx + 1) * 150}
                  key={idx}
                  className="rounded bg-indigo-600 text-white text-xs px-3 py-1 mr-3"
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
              href={project.link}
              className="transition-all whitespace-nowrap w-min flex items-center justify-start px-5 py-2 text-sm rounded-full border border-black hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-700/50"
            >
              <span className="mr-3">Preview</span>
              <HiChevronRight size={20} />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
