import { useLottie } from 'lottie-react'
import hero from '../../assets/hero.json'

const style = {
  height: 300
}

const LottieAnimation = () => {
  const options = {
    animationData: hero,
    loop: true,
    autoplay: true
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimation
