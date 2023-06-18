import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiChevronDown } from 'react-icons/hi';

type Props = {};

export default function Hero({}: Props) {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col items-start justify-center"
      style={{ minHeight: 'calc(100vh - 100px)' }}
    >
      <div className="flex flex-col md:flex-row items-center w-full">
        <div
          data-aos="flip-up"
          data-aos-duration="500"
          className="w-20 h-20 rounded-full bg-gradient-to-br from-red-50 to-indigo-100"
        >
          <img
            src="/images/ikbal.jpg"
            alt="ikbal"
            className="w-full rounded-full"
          />
        </div>
        <div className="flex flex-col ml-0 md:ml-8 mt-5 md:mt-0">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-2xl text-slate-600 font-medium"
          >
            Ikbal Mohamad
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-lg text-slate-500 font-light"
          >
            Front-end Developer
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="p-5 mt-8 font-light text-4xl md:text-7xl text-center md:text-left text-slate-800"
      >
        Hey there! I’m a creative web & mobile developer from Indonesia.
      </div>
      <div className="flex items-center mt-8 px-5">
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
      <div className="mt-10 flex items-center justify-center px-2">
        <a
          target="_blank"
          href="https://www.cakeresume.com/s--tioUbMdRUsiNVO24ADJUMg--/ikbal-hikmat"
          data-aos="fade-up"
          data-aos-duration="1500"
          className="bg-gradient-to-br text-center from-indigo-500 to-blue-500 px-5 py-3 rounded-full text-white mx-3 hover:shadow-lg hover:to-indigo-500"
        >
          Download Resume
        </a>
        <a
          href="#about"
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-indigo-600 text-center px-5 py-3 rounded-full mx-3 border border-indigo-500 hover:bg-indigo-500 hover:text-white hover:shadow-lg transition-all flex items-center"
        >
          <span className="mr-3">Explore More</span>
          <HiChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
