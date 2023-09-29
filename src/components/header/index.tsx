import React from 'react'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' }
]

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 mx-auto flex w-full max-w-none items-center bg-white/60 backdrop-blur-md md:max-w-6xl">
      <div className="flex w-full items-center justify-between gap-4 border-b px-4 py-2 md:px-0">
        <a href="#home" className="select-none ">
          <h1 className="bg-gradient-to-r from-black to-blue-800 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
            IkbalMoh
          </h1>
        </a>
        <div className="hidden items-center justify-end md:flex md:flex-row">
          {links.map((link) => (
            <a
              key={link.id}
              className="relative rounded-md bg-transparent px-5 py-2 text-sm text-gray-500 transition-colors duration-200 hover:bg-gray-300/80 hover:text-gray-700"
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
