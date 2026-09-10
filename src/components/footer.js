import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <div className="footer-contactinfo">
        <div className="footer-footermessage">
          <span className="footer-text H2">
            <span className="">{props.text}</span>
          </span>
        </div>
        <div className="footer-socialicons">
          <a
            href="https://www.linkedin.com/in/kyloxue/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <div className="footer-platformlinkedin">
              <img
                alt={props.fill1Alt}
                src={props.fill1Src}
                className="footer-fill1"
              />
            </div>
          </a>
          <a
            href="mailto:jiao_xue@hotmail.com?subject="
            className="footer-link1"
          >
            <img
              alt={props.fimailAlt}
              src={props.fimailSrc}
              className="footer-fimail"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  fill1Src: 'external/fill1i676-dsgc.svg',
  rootClassName: '',
  fimailAlt: 'fimailI676',
  linkFimail: 'mailto:jiao_xue@hotmaill.com',
  text: 'Let’s Work Together',
  linkPlatformlinkedin: 'https://www.linkedin.com/in/kyloxue/',
  fimailSrc: 'external/fimaili676-hvq.svg',
  fill1Alt: 'Fill1I676',
}

Footer.propTypes = {
  fill1Src: PropTypes.string,
  rootClassName: PropTypes.string,
  fimailAlt: PropTypes.string,
  linkFimail: PropTypes.string,
  text: PropTypes.string,
  linkPlatformlinkedin: PropTypes.string,
  fimailSrc: PropTypes.string,
  fill1Alt: PropTypes.string,
}

export default Footer
