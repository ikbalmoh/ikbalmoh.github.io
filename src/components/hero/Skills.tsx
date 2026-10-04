import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { skills } from './constants'
import RotatingText from 'components/shared/rotating-text'

export default function Skills() {
  return (
    <RotatingText
  texts={skills}
  mainClassName="px-1 sm:px-2 bg-gray-100 overflow-hidden py-0.5 sm:py-1 justify-center rounded text-lg md:text-xl font-semibold text-gray-800 dark:bg-gray-800 dark:text-gray-100"
  staggerFrom="last"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
  splitBy="characters"
  auto
  loop
/>
  )
}
