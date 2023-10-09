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
      className="container mx-auto min-h-screen scroll-m-16 py-10"
    >
      <div data-aos="fade-up" data-aos-duration="200" className="my-6">
        <h1 className="text-center text-3xl text-gray-500 md:text-5xl">
          <span className="text-gray-800">About</span> Me
        </h1>
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
      <div className="flex flex-row flex-wrap items-start justify-center gap-3">
        {skillsets.map((skill, idx) => (
          <div
            data-aos="fade-up"
            data-aos-duration={idx * 100}
            className="rounded-xl border border-slate-200 px-3 py-2"
            key={idx}
          >
            {skill.label}
          </div>
        ))}
      </div>
    </section>
  )
}
