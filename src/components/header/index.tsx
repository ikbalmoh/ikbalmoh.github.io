import React from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
];

export default function Header() {
  return (
    <nav className="flex items-center sticky top-0  backdrop-blur-md z-10">
      <div className="px-5 md:px-10 w-full flex justify-between py-8 items-center">
        <a
          href="#home"
          className="text-2xl text-indigo-600 bg-gradient-to-br from-indigo-700 to-blue-500 text-transparent bg-clip-text select-none"
        >
          <span className="font-semibold">iik</span>
          <span className="font-medium">moh</span>
        </a>
        <ul className="items-center justify-end hidden md:flex md:flex-row">
          {links.map((link) => (
            <li>
              <a
                className="px-6 py-3 rounded-lg hover:bg-indigo-100/50 transition-all font-normal text-gray-700 hover:text-indigo-600"
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
