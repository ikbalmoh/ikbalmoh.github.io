import React from 'react'

const skillsets = [
  {
    label: 'Typescript'
  },
  {
    label: 'Javascript'
  },
  {
    label: 'Dart'
  },
  {
    label: 'PHP'
  },
  {
    label: 'HTML'
  },
  {
    label: 'CSS'
  },
  {
    label: 'Next.js'
  },
  {
    label: 'React.js'
  },
  {
    label: 'Vue.js'
  }
]

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto mt-16 min-h-screen max-w-5xl scroll-m-28"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="200"
        className="mb-5 text-center text-2xl font-semibold text-indigo-600"
      >
        About
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        className="text-center text-2xl text-slate-700"
      >
        <p>
          I&apos;m a creative & passionate front-end developer with 5 years of
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
        className="mb-5 mt-8 text-center text-lg font-semibold"
      >
        Skillsets
      </div>
      <div className="flex flex-col flex-wrap items-start justify-center md:flex-row">
        {skillsets.map((skill, idx) => (
          <div
            data-aos="fade-up"
            data-aos-duration={idx * 100}
            className="mx-2 rounded-xl border border-slate-200 px-3 py-2"
            key={idx}
          >
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  )
}
