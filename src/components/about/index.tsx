import React from 'react';

type Props = {};

const skillsets = [
  {
    label: 'Typescript',
  },
  {
    label: 'Javascript',
  },
  {
    label: 'Dart',
  },
  {
    label: 'PHP',
  },
  {
    label: 'HTML',
  },
  {
    label: 'CSS',
  },
  {
    label: 'Next.js',
  },
  {
    label: 'React.js',
  },
  {
    label: 'Vue.js',
  },
];

export default function About({}: Props) {
  return (
    <section
      id="about"
      className="container mx-auto max-w-5xl mt-16 scroll-m-28"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        className="mb-5 text-2xl font-semibold text-center text-indigo-600"
      >
        About
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="text-center text-2xl text-slate-700"
      >
        <p>
          I'm a creative & passionate front-end developer with 5 years of
          experience
          <br />
          building scalable web and mobile applications.
        </p>
        <p>
          Continuously staying updated with the latest industry trends, <br />I
          strive to deliver efficient, high-quality code and exceptional user
          experiences.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="font-semibold text-lg text-center mt-8 mb-5"
      >
        Skillsets
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center flex-wrap">
        {skillsets.map((skill, idx) => (
          <div
            data-aos="fade-up"
            data-aos-duration={idx * 100}
            className="px-3 py-2 rounded-xl border border-slate-200 mx-2"
            key={idx}
          >
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  );
}
