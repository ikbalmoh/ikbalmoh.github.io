import { useEffect, useCallback } from 'react'
import { LottieOptions, useLottie } from 'lottie-react'
import hero from '../../assets/hero.json'

const style: React.CSSProperties = {
  height: 300
}

const TOTAL_FRAMES = 180

const LottieAnimation = () => {
  const options: LottieOptions = {
    animationData: hero,
    loop: false,
    autoplay: false
  }

  const lottieObj = useLottie(options, style)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      const progress = (x + y) / 2
      const frame = Math.round(progress * TOTAL_FRAMES)
      lottieObj.animationItem?.goToAndStop(frame, true)
    },
    [lottieObj.animationItem]
  )

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const height = window.innerHeight
    const progress = scrollY / height
    const frame = Math.round(progress * TOTAL_FRAMES)
    lottieObj.animationItem?.goToAndStop(frame, true)
  }, [lottieObj.animationItem])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return lottieObj.View
}

export default LottieAnimation
