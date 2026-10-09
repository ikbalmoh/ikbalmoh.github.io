import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
} | null>(null)

function readPreference(): Theme | null {
  try {
    const value = localStorage.getItem('theme')
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState(readPreference)
  const [theme, setTheme] = useState<Theme>(
    () =>
      readPreference() ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light')
  )

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const syncSystemTheme = () => {
      if (preference === null) setTheme(media.matches ? 'dark' : 'light')
    }
    syncSystemTheme()
    media.addEventListener('change', syncSystemTheme)
    return () => media.removeEventListener('change', syncSystemTheme)
  }, [preference])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    )
    if (meta) meta.content = theme === 'dark' ? '#111827' : '#ffffff'
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setPreference(next)
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return createElement(
    ThemeContext.Provider,
    { value: { theme, toggleTheme } },
    children
  )
}

export default function useTheme() {
  const theme = useContext(ThemeContext)
  if (!theme) throw new Error('useTheme requires ThemeProvider')
  return theme
}
