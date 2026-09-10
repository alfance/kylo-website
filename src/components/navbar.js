import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-container ${props.rootClassName} `}>
      <div className="navbar-navigation">
        <div className="navbar-navnavmenu">
          <Link to="/" className="navbar-text Epilogue-17">
            Home
          </Link>
          <Link to="/portfolio-aboutpage" className="navbar-text1 Epilogue-17">
            <span className="">{props.text}</span>
          </Link>
          <img
            alt={props.line1Alt}
            src={props.line1Src}
            className="navbar-line1"
          />
          <a
            href="https://drive.google.com/file/d/1pf-K4nsJG9lPTHShoaYy4l0it_5MMkb6/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-text3"
          >
            <span className="">{props.text2}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kyloxue/"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-text5"
          >
            <span className="">{props.text3}</span>
          </a>
        </div>
        <div className="navbar-frame427319348">
          <Link to="/" className="navbar-text7 Epilogue-17Bold">
            <span className="">{props.text4}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  rootClassName: '',
  text3: 'Linkedin',
  linkText:
    'https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples',
  text1: 'Works',
  text: 'About',
  linkText3:
    'https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples',
  line1Src: 'external/line1i176-mq9.svg',
  text2: 'Resume',
  text4: 'Kylo Xue',
  linkText2:
    'https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples',
  linkText1:
    'https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples',
  line1Alt: 'Line1I176',
}

Navbar.propTypes = {
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  linkText: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  linkText3: PropTypes.string,
  line1Src: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  linkText2: PropTypes.string,
  linkText1: PropTypes.string,
  line1Alt: PropTypes.string,
}

export default Navbar
