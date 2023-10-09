import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

interface Props {
  propertyName: string
  sectionRef: React.RefObject<HTMLDivElement>
  allowOffset?: boolean
}

export default function useScrollListener(props: Props) {
  const { propertyName, sectionRef, allowOffset } = props

  const [position, setPosition] = useState<number>(0)

  const listener = useCallback(() => {
    const sectionHeight = sectionRef.current?.clientHeight ?? 0
    const scroll = window.scrollY - (sectionRef.current?.offsetTop ?? 0) + 60

    let scrollPosition = scroll / sectionHeight
    if (!allowOffset) {
      if (scrollPosition < 0) {
        scrollPosition = 0
      } else if (scrollPosition > 1) {
        scrollPosition = 1
      }
    }

    setPosition(scrollPosition)

    document.body.style.setProperty(propertyName, scrollPosition.toFixed(2))
  }, [allowOffset, propertyName, sectionRef])

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
