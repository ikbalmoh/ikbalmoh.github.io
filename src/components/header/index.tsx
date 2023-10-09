import { useState } from 'react'
import styles from './styles.module.css'
import { classNames } from 'utils'
import { AiOutlineClose } from 'react-icons/ai'

export default function Header() {
  const [active, setActive] = useState<boolean>(false)

  const links = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' }
  ]

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="500"
      className="fixed top-0 z-10 flex h-14 w-full items-center bg-white/40 backdrop-blur-md md:h-16"
    >
      <div className="mx-auto flex h-14 w-full max-w-none items-center justify-between gap-4 border-b border-gray-300/50 px-4 md:h-16 md:max-w-6xl md:px-5 xl:px-0">
        <a href="#home" className="w-min select-none md:w-[200px]">
          <h1 className="bg-gradient-to-r from-black to-blue-500 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
            IkbalMoh
          </h1>
        </a>
        <div className="hidden flex-1 items-center justify-center md:flex md:flex-row">
          {links.map((link) => (
            <a
              key={link.id}
              className="relative rounded-md bg-transparent px-5 py-2 text-sm text-gray-500 transition-colors duration-200 hover:bg-gray-200/80 hover:text-gray-700"
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="w-min md:w-[200px]">
          <button
            className="flex flex-col items-center justify-center md:hidden"
            onClick={() => setActive(true)}
          >
            <div className="my-0.5 h-0.5 w-6 bg-gray-700"></div>
            <div className="my-0.5 h-0.5 w-6 bg-gray-700"></div>
            <div className="my-0.5 h-0.5 w-6 bg-gray-700"></div>
          </button>
        </div>
        <div
          className={classNames(
            styles['nav-menu'],
            active ? styles['active'] : ''
          )}
        >
          <div className="flex justify-end p-5">
            <button className="rounded-full" onClick={() => setActive(false)}>
              <AiOutlineClose size={30} />
            </button>
          </div>
          <div className="flex w-full flex-col px-5 pb-5">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="py-3 text-lg text-gray-700"
                onClick={() => setActive(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
