import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const listener = function (e: MouseEvent) {
      if (cursor) {
        const left = e.screenX
        const top = e.screenY
        cursor.style.left = left + 'px'
        cursor.style.top = top - 80 + 'px'
        cursor.style.opacity = '1'
      }
    }

    document.addEventListener('mousemove', listener)

    return () => {
      document.removeEventListener('mousemove', listener)
    }
  }, [])

  const hideCursor = () => {
    const cursor = document.getElementById('cursor')
    if (cursor) {
      cursor.style.opacity = '0'
    }
  }

  return (
    <div
      id="cursor-wrapper"
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:flex"
      onMouseLeave={hideCursor}
    >
      <div
        id="cursor"
        className="absolute m-auto h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300/80 transition-all duration-200 ease-out"
      ></div>
    </div>
  )
}
