import { LottieOptions, useLottie } from 'lottie-react'
import hero from '../../assets/hero.json'

const style: React.CSSProperties = {
  height: 300
}

const LottieAnimation = () => {
  const options: LottieOptions = {
    animationData: hero,
    loop: true,
    autoplay: true
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimation
