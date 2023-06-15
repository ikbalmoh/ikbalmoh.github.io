import React from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
];

export default function Header() {
  return (
    <nav className="flex items-center sticky top-0 bg-white/50 backdrop-blur-md z-10">
      <div className="container mx-auto grid grid-cols-12 justify-between py-8">
        <a
          data-aos="fade-right"
          data-aos-duration="500"
          href="#home"
          className="col-span-2 text-2xl text-indigo-600 bg-gradient-to-br from-indigo-700 to-blue-500 text-transparent bg-clip-text select-none"
        >
          <span className="font-semibold">iik</span>
          <span className="font-medium">moh</span>
        </a>
        <ul
          data-aos="fade-down"
          data-aos-duration="1500"
          className="col-span-8 flex items-center justify-center"
        >
          {links.map((link) => (
            <li>
              <a
                className="px-6 py-3 rounded-lg hover:bg-indigo-50 transition-all font-normal text-gray-700 hover:text-indigo-600"
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="col-span-2"></div>
      </div>
    </nav>
  );
}
