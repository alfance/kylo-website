import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import useScrollReveal from './use-scroll-reveal'
import './ux-showcase.css'

const SwapImage = ({ src, alt, active }) => (
  <img src={src} alt={alt} className="ux-swap-image" style={{ opacity: active ? 1 : 0 }} />
)

const UxShowcase = () => {
  const { ref, style } = useScrollReveal()
  const [isRecording, setIsRecording] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setIsRecording((prev) => !prev), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="ux-showcase-bleed">
      <img
        src="/external/netflix-live-capture/gradient%202.png"
        alt=""
        aria-hidden="true"
        className="ux-gradient"
      />
      <img
        src="/external/netflix-live-capture/default%20window%20view-%20new.png"
        alt="Unity Editor scene view"
        className="ux-window"
      />
      <motion.div ref={ref} style={style} className="ux-take-controller">
        <SwapImage
          src="/external/netflix-live-capture/take%20controller%20-%20new.png"
          alt="Take Recorder window"
          active={!isRecording}
        />
        <SwapImage
          src="/external/netflix-live-capture/take%20controller%20-%20recording.png"
          alt="Take Recorder window, recording"
          active={isRecording}
        />
      </motion.div>
      <div className="ux-devices">
        <div className="ux-device ux-device-iphone">
          <SwapImage
            src="/external/netflix-live-capture/new%20app%20-%20iphone.png"
            alt="New Virtual Camera app on iPhone"
            active={!isRecording}
          />
          <SwapImage
            src="/external/netflix-live-capture/new%20app%20-%20iphone%20recording.png"
            alt="New Virtual Camera app on iPhone, recording"
            active={isRecording}
          />
        </div>
        <div className="ux-device ux-device-ipad">
          <SwapImage
            src="/external/netflix-live-capture/new%20app%20-%20ipad.png"
            alt="New Virtual Camera app on iPad"
            active={!isRecording}
          />
          <SwapImage
            src="/external/netflix-live-capture/new%20app%20-%20ipad%20recording.png"
            alt="New Virtual Camera app on iPad, recording"
            active={isRecording}
          />
        </div>
      </div>
    </div>
  )
}

export default UxShowcase
