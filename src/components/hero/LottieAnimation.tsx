import { LottieOptions, useLottie, useLottieInteractivity } from 'lottie-react'
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

  const lottieObj = useLottie(options, style)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'seek',
        frames: [0, 180]
      }
    ]
  })

  return Animation
}

export default LottieAnimation
