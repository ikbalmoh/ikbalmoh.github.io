import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiChevronDown } from 'react-icons/hi';

type Props = {};

export default function Hero({}: Props) {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center"
      style={{ minHeight: 'calc(100vh - 100px)' }}
    >
      <div
        data-aos="flip-up"
        data-aos-duration="500"
        className="w-32 h-32 rounded-full bg-gradient-to-br from-red-50 to-indigo-100"
      />
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="mt-10 text-lg text-slate-600"
      >
        Hello, I'm
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="mt-1 font-medium text-5xl text-center text-slate-700"
      >
        Ikbal Mohamad
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mt-5 text-2xl text-slate-500"
      >
        A passionate Front-end Developer
      </div>
      <div className="flex items-center mt-8">
        <a
          data-aos="fade-up"
          data-aos-duration="1200"
          href="https://www.linkedin.com/in/iikmoh/"
          target="_blank"
          className="text-blue-600 hover:text-indigo-600 mx-2"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          data-aos="fade-up"
          data-aos-duration="1400"
          href="https://github.com/iikmoh"
          target="_blank"
          className="text-gray-800 hover:text-indigo-600 mx-2"
        >
          <AiFillGithub size={30} />
        </a>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <a
          target="_blank"
          href="https://www.cakeresume.com/s--tioUbMdRUsiNVO24ADJUMg--/ikbal-hikmat"
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gradient-to-br from-indigo-500 to-blue-500 px-5 py-3 rounded-full text-white mx-3 hover:shadow-lg hover:to-indigo-500"
        >
          Download Resume
        </a>
        <a
          href="#about"
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-indigo-600 px-5 py-3 rounded-full mx-3 border border-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-lg transition-all flex items-center"
        >
          <span className="mr-3">Explore More</span>
          <HiChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
