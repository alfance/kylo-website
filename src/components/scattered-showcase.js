import React, { useRef } from 'react'

import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import useScrollReveal from './use-scroll-reveal'
import './scattered-showcase.css'

const FloatingPanel = ({ className, src, alt }) => {
  const { ref, style } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      className={`scattered-float ${className}`}
      style={style}
    >
      <img src={src} alt={alt} className="scattered-float-image" />
    </motion.div>
  )
}

FloatingPanel.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

const panels = [
  {
    className: 'scattered-float-1',
    src: '/external/netflix-live-capture/New.jpg',
    alt: 'Connection: Companion App Server panel',
  },
  {
    className: 'scattered-float-2',
    src: '/external/netflix-live-capture/MainCamera.jpg',
    alt: 'Take Recorder Playback panel',
  },
  {
    className: 'scattered-float-3',
    src: '/external/netflix-live-capture/Cinemachine%20Virtual%20Camera.jpg',
    alt: 'CinemachineVirtualCamera Inspector panel',
  },
  {
    className: 'scattered-float-4',
    src: '/external/netflix-live-capture/virtual%20Camera%20device.jpg',
    alt: 'VirtualCameraDevice Inspector panel',
  },
  {
    className: 'scattered-float-5',
    src: '/external/netflix-live-capture/Mask%20group-1.jpg',
    alt: 'New Shot Library panel',
  },
  {
    className: 'scattered-float-6',
    src: '/external/netflix-live-capture/Mask%20group.jpg',
    alt: 'Timeline with Take Recorder tracks',
  },
]

const ScatteredShowcase = ({ backgroundSrc, backgroundAlt }) => {
  const containerRef = useRef(null)

  return (
    <div className="scattered-showcase-bleed">
      <img
        src="/external/netflix-live-capture/gradient-arrow.png"
        alt=""
        aria-hidden="true"
        className="scattered-gradient"
      />
      <div className="scattered-showcase" ref={containerRef}>
        <div className="scattered-showcase-bg">
          <img src={backgroundSrc} alt={backgroundAlt} className="scattered-showcase-bg-image" />
        </div>
        {panels.map((panel) => (
          <FloatingPanel
            key={panel.className}
            className={panel.className}
            src={panel.src}
            alt={panel.alt}
          />
        ))}
      </div>
      <div className="scattered-devices">
        <img
          src="/external/netflix-live-capture/old%20app%20-%20ipad.png"
          alt="Old Virtual Camera app on iPad"
          className="scattered-device scattered-device-ipad"
        />
        <img
          src="/external/netflix-live-capture/old%20app%20-%20iphone.png"
          alt="Old Virtual Camera app on iPhone"
          className="scattered-device scattered-device-iphone"
        />
      </div>
    </div>
  )
}

ScatteredShowcase.propTypes = {
  backgroundSrc: PropTypes.string,
  backgroundAlt: PropTypes.string,
}

ScatteredShowcase.defaultProps = {
  backgroundSrc: '/external/netflix-live-capture/unity%20engine.png',
  backgroundAlt: 'Unity Editor with scattered Live Capture panels highlighted',
}

export default ScatteredShowcase
