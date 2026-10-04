import {
  act,
  cleanup,
  fireEvent,
  render as renderComponent,
  screen
} from '@testing-library/react'
import type { ReactElement } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Header from './index'
import { ThemeProvider } from 'utils/hooks/useTheme'

const render = (ui: ReactElement) =>
  renderComponent(<ThemeProvider>{ui}</ThemeProvider>)

let systemDark = false
let onSystemChange: (() => void) | undefined

beforeEach(() => {
  const values = new Map<string, string>()
  vi.stubGlobal('localStorage', {
    getItem: vi.fn((key: string) => values.get(key) ?? null),
    setItem: vi.fn((key: string, value: string) => values.set(key, value))
  })
  document.documentElement.classList.remove('dark')
  systemDark = false
  onSystemChange = undefined
  vi.stubGlobal('matchMedia', () => ({
    get matches() {
      return systemDark
    },
    addEventListener: (_event: string, listener: () => void) => {
      onSystemChange = listener
    },
    removeEventListener: vi.fn()
  }))
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

describe('header theme toggle', () => {
  it('follows the system until a manual choice, then persists both toggle directions', () => {
    const { unmount } = render(<Header />)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
    unmount()

    render(<Header />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    fireEvent.click(
      screen.getByRole('button', { name: 'Switch to light mode' })
    )
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('updates on system changes without overriding a saved choice', () => {
    systemDark = true
    render(<Header />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    act(() => {
      systemDark = false
      onSystemChange?.()
    })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    act(() => {
      onSystemChange?.()
    })
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('remains usable when browser storage throws', () => {
    vi.mocked(localStorage.getItem).mockImplementation(() => {
      throw new Error('blocked')
    })
    vi.mocked(localStorage.setItem).mockImplementation(() => {
      throw new Error('blocked')
    })
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(
      screen.getByRole('button', { name: 'Switch to light mode' })
    ).toBeTruthy()
  })
})
