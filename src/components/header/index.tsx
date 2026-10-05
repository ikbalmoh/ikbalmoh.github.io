import Magnet from 'components/shared/magnet'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsMoon, BsSun } from 'react-icons/bs'
import useTheme from 'utils/hooks/useTheme'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const themeLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="500"
      className="fixed top-0 z-10 flex h-14 w-full items-center bg-white/40 backdrop-blur-md dark:bg-black/40 md:h-16"
    >
      <div className="mx-auto flex h-14 w-full max-w-none items-center justify-between gap-4 border-b border-gray-300/50 px-4 dark:border-gray-900/50 md:h-16 md:max-w-6xl md:px-5 xl:px-0">
        <a href="#home" className="w-min select-none md:w-[200px]">
          <h1 className="bg-gradient-to-r bg-clip-text text-xl font-semibold text-black dark:text-gray-100 md:text-2xl">
            IkbalMoh
          </h1>
        </a>
        <div className="flex w-min items-center justify-end gap-5">
          <Magnet padding={10} magnetStrength={4}>
            <a
              href="https://www.cakeresume.com/ikbalmoh"
              className="hover:bg-gray-200/40 hover:dark:bg-gray-700/40 px-3 py-1 rounded-md hidden whitespace-nowrap text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white md:block"
              target="_blank"
              rel="external noreferrer"
            >
              View Resume
            </a>
          </Magnet>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-gray-700 transition-colors hover:bg-gray-200/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? (
              <BsSun size={16} aria-hidden="true" />
            ) : (
              <BsMoon size={16} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
