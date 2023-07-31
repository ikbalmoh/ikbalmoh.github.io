import React from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' }
]

export default function Header() {
  return (
    <nav className="sticky top-0 z-10 flex  items-center backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-5 py-8 md:px-10">
        <a
          href="#home"
          className="select-none bg-gradient-to-br from-indigo-700 to-blue-500 bg-clip-text text-2xl text-indigo-600"
        >
          <span className="font-semibold">iik</span>
          <span className="font-medium">moh</span>
        </a>
        <ul className="hidden items-center justify-end md:flex md:flex-row">
          {links.map((link) => (
            <li key={link.id}>
              <a
                className="rounded-lg px-6 py-3 font-normal text-gray-700 transition-all hover:bg-indigo-100/50 hover:text-indigo-600"
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
