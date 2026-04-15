import { useState, useEffect } from 'react'
import MobileNav from './MobileNav'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function Header() {
  const [active, setActive] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string>('home')

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="500"
      className="fixed top-0 z-10 flex h-14 w-full items-center bg-white/40 backdrop-blur-md md:h-16"
    >
      <div className="mx-auto flex h-14 w-full max-w-none items-center justify-between gap-4 border-b border-gray-300/50 px-4 md:h-16 md:max-w-6xl md:px-5 xl:px-0">
        <a href="#home" className="w-min select-none md:w-[200px]">
          <h1 className="bg-gradient-to-r text-black bg-clip-text text-xl font-semibold md:text-2xl">
            IkbalMoh
          </h1>
        </a>
        <div className="flex w-min justify-end items-center gap-2">
          <a
            href="https://www.linkedin.com/in/ikbalmoh"
            rel="noreferrer"
            target="_blank"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-700"
          >
            <AiFillLinkedin size={24} />
          </a>
          <a
            href="https://github.com/ikbalmoh"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-gray-700"
          >
            <AiFillGithub size={24} />
          </a>
          <a
            href="https://www.cakeresume.com/ikbalmoh"
            target="_blank"
            className="whitespace-nowrap hidden text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 md:block"
            rel="external noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
