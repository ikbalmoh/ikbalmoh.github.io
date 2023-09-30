import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

interface Props {
  propertyName: string
  sectionRef: React.RefObject<HTMLDivElement>
}

export default function useScrollListener(props: Props) {
  const { propertyName, sectionRef } = props

  const [position, setPosition] = useState<number>(0)

  const listener = useCallback(() => {
    const sectionHeight = sectionRef.current?.clientHeight ?? 0
    const scroll = window.scrollY

    const scrollPosition = scroll / sectionHeight

    setPosition(scrollPosition)

    document.body.style.setProperty(propertyName, scrollPosition.toFixed(2))
  }, [propertyName, sectionRef])

  useEffect(() => {
    if (sectionRef) {
      window.addEventListener('scroll', listener)
      return () => window.addEventListener('scroll', listener)
    }
  }, [listener, sectionRef])

  return {
    position
  }
}
