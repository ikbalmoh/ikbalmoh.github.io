import { useState, useEffect } from 'react'

type MousePosition = {
  x: number
  y: number
}

export default function useMousePosition({
  el
}: {
  el: HTMLDivElement | null
}) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [transform, setTransform] = useState<string>('')

  function updatePosition(x: number, y: number) {
    x = x - position.x
    y = y - position.y
    setPosition({ x, y })
    let ratateY: string = '0'
    let rotateX: string = '0'
    if (el) {
      ratateY = (y / el.offsetHeight).toFixed(2)
      rotateX = (x / el.offsetWidth).toFixed(2)
    }
    setTransform('rotateX(' + rotateX + 'deg) rotateY(' + ratateY + 'deg)')
  }

  function onMouseEnterHandler(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    updatePosition(e.clientX, e.clientY)
  }

  function onMouseMoveHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    updatePosition(e.clientX, e.clientY)
  }

  function onMouseLeaveHandler() {
    setPosition({ x: 0, y: 0 })
    setTransform('rotateX(0deg) rotateY(0deg)')
  }

  useEffect(() => {
    if (el) {
      setPosition({
        x: el.offsetLeft + Math.floor(el.offsetWidth / 2),
        y: el.offsetTop + Math.floor(el.offsetHeight / 2)
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [el])

  return {
    position,
    transform,
    onMouseEnterHandler,
    onMouseMoveHandler,
    onMouseLeaveHandler
  }
}
