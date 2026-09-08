import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion'

import './collage-reveal.css'

const CollageReveal = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.25', 'end 0.15'],
  })

  const left1 = useTransform(scrollYProgress, [0, 0.7], ['0%', '27.5%'])
  const width1 = useTransform(scrollYProgress, [0, 0.7, 1], ['28.64%', '45%', '15%'])
  const top1 = useTransform(scrollYProgress, [0, 0.7], ['0%', '70%'])
  const opacity1 = useTransform(scrollYProgress, [0, 0.431596, 0.7], [1, 0.5, 0])

  const left2 = useTransform(scrollYProgress, [0, 0.7], ['29.29%', '27.5%'])
  const width2 = useTransform(scrollYProgress, [0, 0.7, 1], ['41.43%', '59.51%', '19.84%'])
  const top2 = useTransform(scrollYProgress, [0, 0.7], ['0%', '72%'])
  const opacity2 = useTransform(scrollYProgress, [0, 0.431596, 0.7], [1, 0.5, 0])

  const left3 = useTransform(scrollYProgress, [0, 0.7], ['71.37%', '27.5%'])
  const width3 = useTransform(scrollYProgress, [0, 0.7, 1], ['28.64%', '45%', '15%'])
  const top3 = useTransform(scrollYProgress, [0, 0.7], ['0%', '74%'])
  const opacity3 = useTransform(scrollYProgress, [0, 0.431596, 0.7], [1, 0.5, 0])

  return (
    <div className="collage-reveal" ref={ref}>
      <motion.img
        src="/external/netflix-live-capture/collage-connection.png"
        alt="Connections panel"
        className="collage-reveal-image"
        style={{ left: left1, top: top1, width: width1, opacity: opacity1, zIndex: 1 }}
      />
      <motion.img
        src="/external/netflix-live-capture/collage-new%20take%20recorder.png"
        alt="Take Recorder panel"
        className="collage-reveal-image"
        style={{ left: left2, top: top2, width: width2, opacity: opacity2, zIndex: 2 }}
      />
      <motion.img
        src="/external/netflix-live-capture/collage-sync.png"
        alt="Sync panel"
        className="collage-reveal-image"
        style={{ left: left3, top: top3, width: width3, opacity: opacity3, zIndex: 3 }}
      />
    </div>
  )
}

export default CollageReveal
