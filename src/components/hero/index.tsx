import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiChevronDown } from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-start justify-center"
      style={{ minHeight: 'calc(100vh - 100px)' }}
    >
      <div className="flex w-full flex-col items-center md:flex-row">
        <div
          data-aos="flip-up"
          data-aos-duration="500"
          className="h-20 w-20 rounded-full bg-gradient-to-br from-red-50 to-indigo-100"
        >
          <img
            src="/images/ikbal.jpg"
            alt="ikbal"
            className="w-full rounded-full"
          />
        </div>
        <div className="ml-0 mt-5 flex flex-col md:ml-8 md:mt-0">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-2xl font-medium text-slate-600"
          >
            Ikbal Mohamad
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-lg font-light text-slate-500"
          >
            Front-end Developer
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="mt-8 p-5 text-center text-4xl font-light text-slate-800 md:text-left md:text-7xl"
      >
        Hey there! I’m a creative web & mobile developer from Indonesia.
      </div>
      <div className="mt-8 flex items-center px-5">
        <a
          data-aos="fade-up"
          data-aos-duration="1200"
          href="https://www.linkedin.com/in/iikmoh/"
          rel="noreferrer"
          target="_blank"
          className="mx-2 text-blue-600 hover:text-indigo-600"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          data-aos="fade-up"
          data-aos-duration="1400"
          href="https://github.com/iikmoh"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-gray-800 hover:text-indigo-600"
        >
          <AiFillGithub size={30} />
        </a>
      </div>
      <div className="mt-10 flex items-center justify-center px-2">
        <a
          target="_blank"
          href="https://www.cakeresume.com/s--tioUbMdRUsiNVO24ADJUMg--/ikbal-hikmat"
          data-aos="fade-up"
          rel="noreferrer"
          data-aos-duration="1500"
          className="mx-3 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 px-5 py-3 text-center text-white hover:to-indigo-500 hover:shadow-lg"
        >
          Download Resume
        </a>
        <a
          href="#about"
          data-aos="fade-up"
          data-aos-duration="1500"
          className="mx-3 flex items-center rounded-full border border-indigo-500 px-5 py-3 text-center text-indigo-600 transition-all hover:bg-indigo-500 hover:text-white hover:shadow-lg"
        >
          <span className="mr-3">Explore More</span>
          <HiChevronDown size={20} />
        </a>
      </div>
    </section>
  )
}
