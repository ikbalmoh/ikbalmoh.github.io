import React from 'react'
import styles from './styles.module.css'
import { classNames } from 'utils'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
  visible: boolean
  onDismiss: () => void
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' }
]

export default function MobileNav({ visible, onDismiss }: Props) {
  return (
    <div
      className={classNames(
        styles['nav-menu'],
        visible ? styles['active'] : ''
      )}
    >
      <div className="flex justify-end p-5">
        <button className="rounded-full" onClick={onDismiss}>
          <AiOutlineClose size={30} />
        </button>
      </div>
      <div className="flex h-full w-full flex-col items-start px-5 pb-5">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="py-3 text-lg text-gray-700"
            onClick={onDismiss}
          >
            {link.label}
          </a>
        ))}
        <div className="my-5 flex-1"></div>
        <a
          href="https://www.cakeresume.com/ikbalmoh"
          target="_blank"
          className=" rounded-lg border border-blue-700 px-5 py-3 text-blue-700 transition-colors duration-500 hover:font-medium hover:text-blue-900"
          rel="external noreferrer"
        >
          View Resume
        </a>
      </div>
    </div>
  )
}
