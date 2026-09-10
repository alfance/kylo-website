import React, { useEffect, useRef, useState } from 'react'

import PropTypes from 'prop-types'

const AnimateOnReveal = (props) => {
  const nodeRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = nodeRef.current
    if (!node || visible) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [visible])

  const child = React.Children.only(props.children)

  return React.cloneElement(child, {
    ref: nodeRef,
    className: [
      child.props.className,
      visible && 'animate__animated',
      visible && `animate__${props.animation}`,
    ]
      .filter(Boolean)
      .join(' '),
    style: {
      ...child.props.style,
      opacity: visible ? undefined : 0,
      animationDuration: props.duration,
      animationDelay: props.delay,
      animationDirection: props.direction,
      animationTimingFunction: props.easing,
      animationIterationCount: props.iteration,
    },
  })
}

AnimateOnReveal.defaultProps = {
  animation: 'fadeIn',
  duration: '300ms',
  delay: '0s',
  direction: 'normal',
  easing: 'ease',
  iteration: '1',
}

AnimateOnReveal.propTypes = {
  children: PropTypes.element.isRequired,
  animation: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.string,
  direction: PropTypes.string,
  easing: PropTypes.string,
  iteration: PropTypes.string,
}

export default AnimateOnReveal
