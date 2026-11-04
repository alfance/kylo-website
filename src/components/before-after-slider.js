import React, { useCallback, useRef, useState } from 'react'

import PropTypes from 'prop-types'

import './before-after-slider.css'

const SKEW_PERCENT = 7
const STEP = 3

const isVideo = (src) => /\.(mp4|webm)$/i.test(src)

const Media = ({ src, alt, style }) =>
  isVideo(src) ? (
    <video
      className="bas-image"
      style={style}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  ) : (
    <img
      src={src}
      alt={alt}
      className="bas-image"
      draggable="false"
      style={style}
    />
  )

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  initialPosition,
}) => {
  const frameRef = useRef(null)
  const [position, setPosition] = useState(initialPosition)

  const updateFromClientX = useCallback((clientX) => {
    const frame = frameRef.current
    if (!frame) return
    const rect = frame.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromClientX(event.clientX)
  }

  const handlePointerMove = (event) => {
    if (event.buttons === 0 && event.pointerType !== 'touch') return
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    updateFromClientX(event.clientX)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      setPosition((p) => Math.max(0, p - STEP))
    } else if (event.key === 'ArrowRight') {
      setPosition((p) => Math.min(100, p + STEP))
    }
  }

  const topX = Math.min(100, position + SKEW_PERCENT / 2)
  const bottomX = Math.max(0, position - SKEW_PERCENT / 2)
  const clipPath = `polygon(0% 0%, ${topX}% 0%, ${bottomX}% 100%, 0% 100%)`
  // Near the edges, only one endpoint clamps, which shifts the line's real
  // midpoint away from `position`. Track that midpoint, not the raw drag
  // value, so the handle always sits centered on the visible line.
  const handleX = (topX + bottomX) / 2

  return (
    <div
      className="bas-frame"
      ref={frameRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      <Media src={afterSrc} alt={afterAlt} />
      <Media src={beforeSrc} alt={beforeAlt} style={{ clipPath }} />

      <svg className="bas-divider" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1={topX} y1="0" x2={bottomX} y2="100" />
      </svg>

      <div
        className="bas-handle"
        style={{ left: `${handleX}%` }}
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={handleKeyDown}
      >
        <span className="bas-handle-arrow bas-handle-arrow-left"></span>
        <span className="bas-handle-arrow bas-handle-arrow-right"></span>
      </div>

      <span className="bas-label bas-label-before Epilogue-17Bold">
        {beforeLabel}
      </span>
      <span className="bas-label bas-label-after Epilogue-17Bold">
        {afterLabel}
      </span>
    </div>
  )
}

BeforeAfterSlider.defaultProps = {
  beforeLabel: 'Before',
  afterLabel: 'After',
  beforeAlt: 'Before',
  afterAlt: 'After',
  initialPosition: 62,
}

BeforeAfterSlider.propTypes = {
  beforeSrc: PropTypes.string.isRequired,
  afterSrc: PropTypes.string.isRequired,
  beforeAlt: PropTypes.string,
  afterAlt: PropTypes.string,
  beforeLabel: PropTypes.string,
  afterLabel: PropTypes.string,
  initialPosition: PropTypes.number,
}

export default BeforeAfterSlider
