import { useScroll, useTransform } from 'framer-motion'
import { RefObject } from 'react'
import { useMediaQuery } from 'react-responsive'

export const useScrollAnimation = ({
  ref
}: {
  ref: RefObject<HTMLDivElement>
}) => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 })

  const { scrollYProgress } = useScroll({ target: ref })
  const headingOpacity = useTransform(scrollYProgress, (progress) =>
    progress < 0.2 ? 1 : 1 - (0.8 * (progress - 0.2)) / 0.2
  )

  const aboutPosition = useTransform(scrollYProgress, (progress) => {
    if (isLargeScreen) {
      const position =
        progress < 0.2
          ? 1
          : progress <= 0.6
          ? 1 - (0.6 * (progress - 0.2)) / 0.2
          : 0
      return `${Math.max(position, 0) * 100}%`
    }
    return '0%'
  })

  const aboutScale = useTransform(scrollYProgress, (progress) =>
    isLargeScreen
      ? progress < 0.6
        ? 0.8
        : 0.8 + 0.2 * ((progress - 0.6) / 0.4)
      : 1
  )

  const bgOpacity = useTransform(scrollYProgress, (progress) =>
    progress < 0.9 ? 1 : (1 - progress) / 0.1
  )

  return {
    bg: {
      opacity: bgOpacity
    },
    heading: {
      opacity: headingOpacity
    },
    about: {
      position: aboutPosition,
      scale: aboutScale
    }
  }
}
