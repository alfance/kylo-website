import { useRef } from 'react'

import { useScroll, useTransform, useReducedMotion } from 'framer-motion'

const useScrollReveal = () => {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress: enterProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start center'],
  })
  const scale = useTransform(enterProgress, [0, 0.6, 1], [0.8, 1, 1.2])
  const opacity = useTransform(enterProgress, [0, 0.6], [0.4, 1])
  const y = useTransform(enterProgress, [0, 0.6], [-60, 0])

  return {
    ref,
    prefersReducedMotion,
    style: prefersReducedMotion ? { opacity } : { scale, opacity, y },
  }
}

export default useScrollReveal
