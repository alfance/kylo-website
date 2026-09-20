import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './portfolio-aboutpage.css'

const PortfolioAboutpage = (props) => {
  return (
    <main className="portfolio-aboutpage-container">
      <Helmet>
        <title>Kylo Xue Portfolio Website</title>
      </Helmet>
      <div className="portfolio-aboutpage-portfolio-aboutpage overflown-small-size">
        <iframe
          src="https://my.spline.design/untitled-da038bfef5598cff4c06e181df7f5444/"
          className="portfolio-aboutpage-iframe"
        ></iframe>
        <div className="portfolio-aboutpage-aboutheader port-container-responsive">
          <span className="portfolio-aboutpage-text content-divide-child">
            <span className="Epilogue-17">
              Hello There, My name is Kylo and I&apos;m a UX/UI designer with a
              passion for human-computer interaction. After years of empowering
              others to excel, I continue to enjoy resolving both significant
              and minor issues that users encounter every day.
            </span>
            <br className="Epilogue-17"></br>
            <br className="Epilogue-17"></br>
            <span className="portfolio-aboutpage-text04 Epilogue-17">
              Thanks for visiting. I&apos;m always happy to connect, especially
              if you&apos;re into
            </span>
            <span className="portfolio-aboutpage-text05 Epilogue-17">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="portfolio-aboutpage-text06 Epilogue-17Bold">
              design, digital painting, the latest in AI trends, or gaming
            </span>
            <span className="portfolio-aboutpage-text07 Epilogue-17">!</span>
            <span className="portfolio-aboutpage-text08">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="portfolio-aboutpage-text09">I</span>
            <span className="portfolio-aboutpage-text10">
              &apos;m also trying to read more books—a challenge amid
              distractions, but I&apos;m getting there! If you have a good read
              to share, I&apos;d love to hear about it. And even if you just
              want to connect,
            </span>
            <span className="portfolio-aboutpage-text11">
              {' '}
              I&apos;m all for a coffee chat 😄
            </span>
            <br className="Epilogue-17"></br>
            <br className="Epilogue-17"></br>
          </span>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </main>
  )
}

export default PortfolioAboutpage
