import React, { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import './sparkles-text.css'

// Stars are placed from the real line boxes of the (possibly wrapped) text,
// in px relative to the nearest positioned ancestor.
const getSpots = (el) => {
  const parent = el && el.offsetParent
  if (!parent) return []
  const origin = parent.getBoundingClientRect()
  return Array.from(el.getClientRects())
    .filter((r) => r.width > 0 && r.height > 0)
    .map((r) => ({
      left: r.left - origin.left,
      top: r.top - origin.top,
      width: r.width,
      height: r.height,
    }))
}

const generateStar = (colors, spots) => {
  const total = spots.reduce((sum, s) => sum + s.width, 0)
  if (!total) return null
  let pick = Math.random() * total
  const spot = spots.find((s) => (pick -= s.width) <= 0) || spots[0]
  const x = `${spot.left + Math.random() * spot.width}px`
  const y = `${spot.top + Math.random() * spot.height}px`
  return {
    id: `${x}-${y}-${Date.now()}`,
    x,
    y,
    color: Math.random() > 0.5 ? colors.first : colors.second,
    delay: Math.random() * 2,
    scale: Math.random() * 1 + 0.3,
    lifespan: Math.random() * 10 + 5,
  }
}

const Sparkle = ({ x, y, color, delay, scale }) => (
  <span className="sparkles-text-star" style={{ left: x, top: y }}>
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 1.6, repeat: Infinity, delay }}
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  </span>
)

const SparklesText = ({ text, colors, className, sparklesCount }) => {
  const [sparkles, setSparkles] = useState([])
  const innerRef = useRef(null)
  const { first, second } = colors

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const palette = { first, second }
    const create = () => generateStar(palette, getSpots(innerRef.current))

    const init = () =>
      setSparkles(
        Array.from({ length: sparklesCount }, create).filter(Boolean),
      )
    init()
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(init)
    }
    window.addEventListener('resize', init)

    const interval = setInterval(() => {
      setSparkles((current) =>
        current
          .map((star) =>
            star.lifespan <= 0
              ? create()
              : { ...star, lifespan: star.lifespan - 0.1 },
          )
          .filter(Boolean),
      )
    }, 100)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', init)
    }
  }, [first, second, sparklesCount])

  return (
    <span className={className}>
      <span className="sparkles-text-inner" ref={innerRef}>
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <span>{text}</span>
      </span>
    </span>
  )
}

SparklesText.defaultProps = {
  colors: { first: '#9E7AFF', second: '#FE8BBB' },
  className: '',
  sparklesCount: 10,
}

SparklesText.propTypes = {
  text: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    first: PropTypes.string,
    second: PropTypes.string,
  }),
  className: PropTypes.string,
  sparklesCount: PropTypes.number,
}

export default SparklesText
