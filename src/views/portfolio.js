import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import Grainient from '../components/grainient'
import SparklesText from '../components/sparkles-text'
import { motion, useReducedMotion } from 'framer-motion'
import AnimateOnReveal from '../components/animate-on-reveal'
import './portfolio.css'

const Portfolio = (props) => {
  const reduceMotion = useReducedMotion()
  const fadeUp = (order) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 + order * 0.12 },
  })

  const cortexGifRef = useRef(null)
  const [cortexGifVisible, setCortexGifVisible] = useState(false)

  useEffect(() => {
    const node = cortexGifRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCortexGifVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-65% 0px -35% 0px' },
    )
    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Kylo Xue Portfolio Website</title>
      </Helmet>
      <div className="portfolio-portfolio">
        <div className="portfolio-header">
          <div className="portfolio-header1 content-divide">
            <motion.div
              className="portfolio-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            >
              <Grainient
                color1="#17395b"
                color2="#0b0818"
                color3="#5d4276"
                timeSpeed={0.25}
                zoom={0.9}
              />
            </motion.div>
            <div className="portfolio-headline-subhead port-container-responsive">
              <div className="portfolio-headline-subhead01">
                <span className="portfolio-text">
                  <motion.span
                    className="portfolio-headline-line"
                    {...fadeUp(0)}
                  >
                    <span className="portfolio-text01 portfolio-greeting">
                      Hello, nice to meet you. You&apos;ve just landed on
                    </span>
                  </motion.span>
                  <motion.span
                    className="portfolio-headline-line"
                    {...fadeUp(1)}
                  >
                    <SparklesText
                      text="Kylo Xue's Portfolio"
                      colors={{ first: '#72B4FF', second: '#BB8BFE' }}
                      className="Epilogue-64Bold portfolio-name-large"
                    />
                    <span className="portfolio-text01">.</span>
                  </motion.span>
                </span>
              </div>
              <motion.span className="portfolio-text03" {...fadeUp(2)}>
                <span className="Epilogue-24Light">I&apos;m a </span>
                <span className="Epilogue-24Bold">
                  product &amp; interaction designer
                </span>
                <span className="Epilogue-24Light">
                  {' '}
                  with 10+ years across startups and large enterprises, now
                  designing tools for both people and AI agents.
                </span>
              </motion.span>
            </div>
          </div>
        </div>
        <div className="portfolio-portfolio1 port-container-responsive">
          <div className="portfolio-latestwork-section">
            <AnimateOnReveal animation="fadeInUp">
              <span className="portfolio-text10 Epilogue-36Light">
                <span>Expriences &amp; Works</span>
              </span>
            </AnimateOnReveal>
            <div className="portfolio-workcards">
              <div className="portfolio-workcard06">
                <div className="portfolio-workcard-locked-aspect-ratio4">
                  <div className="portfolio-workcard07">
                    <div className="portfolio-workcard-locked-aspect-ratio5">
                      <div className="portfolio-workcard08">
                        <AnimateOnReveal
                          animation="fadeInUp"
                          duration="300ms"
                          delay="0s"
                          direction="normal"
                          easing="ease"
                          iteration="1"
                        >
                          <div className="portfolio-headline-subhead04">
                            <div className="portfolio-frame22 home-headline-align">
                              <span className="portfolio-text26">
                                <span>
                                  <img
                                    src="external/netflix-live-capture/Netflix%20Logo.png"
                                    alt="Netflix"
                                    className="portfolio-netflix-logo"
                                  />{' '}
                                  Games Tooling Enablement{' '}
                                </span>
                                <span className="portfolio-text28">
                                  2024 - 2026
                                </span>
                              </span>
                            </div>
                          </div>
                        </AnimateOnReveal>
                        <span className="portfolio-text30 Epilogue-17">
                          <span>
                            Designed internal tools spanning the game dev
                            pipeline (account provisioning, upload pipeline,
                            cloud distribution, playtesting), plus
                            performance testing and debugging/analytics
                            tooling that give developers end-to-end
                            visibility into game health.
                          </span>
                        </span>
                        <div className="portfolio-homecontentimage-locked-aspect-ratio03">
                          <div className="portfolio-homecontentimage03">
                            <div className="portfolio-homecontentimage04 image-contain portfolio-homecontentimage04-no-texture">
                              <img
                                alt="Games Tooling Enablement"
                                src="external/netflix-games-feature.png"
                                className="portfolio-homecontentimage04-img"
                              />
                            </div>
                          </div>
                          <div className="portfolio-frame06"></div>
                        </div>
                      </div>
                      <div className="portfolio-frame07"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame08"></div>
                </div>
              </div>

              <div className="portfolio-workcard06">
                <div className="portfolio-workcard-locked-aspect-ratio4">
                  <div className="portfolio-workcard07">
                    <div className="portfolio-workcard-locked-aspect-ratio5">
                      <div className="portfolio-workcard08">
                        <AnimateOnReveal
                          animation="fadeInUp"
                          duration="300ms"
                          delay="0s"
                          direction="normal"
                          easing="ease"
                          iteration="1"
                        >
                          <div className="portfolio-headline-subhead04">
                            <div className="portfolio-frame22 home-headline-align">
                              <span className="portfolio-text26">
                                <span>
                                  <img
                                    src="external/netflix-live-capture/Netflix%20Logo.png"
                                    alt="Netflix"
                                    className="portfolio-netflix-logo"
                                  />{' '}
                                  AI Initiatives{' '}
                                </span>
                                <span className="portfolio-text28">2026</span>
                              </span>
                            </div>
                          </div>
                        </AnimateOnReveal>
                        <span className="portfolio-text30 Epilogue-17">
                          <span>
                            Led AI discovery and skill education across the
                            org, enabling teams to prototype and vibe-code
                            directly in dev repos. Also led discovery for AI
                            Cortex, exploring a new design paradigm where AI
                            is the primary user and humans provide direction
                            rather than direct input.
                          </span>
                        </span>
                        <div className="portfolio-homecontentimage-locked-aspect-ratio03">
                          <div className="portfolio-homecontentimage03">
                            <div className="portfolio-homecontentimage04 image-contain portfolio-homecontentimage04-no-texture">
                              <img
                                alt="AI Initiatives 2026"
                                src="external/ai-2026.png"
                                className="portfolio-homecontentimage04-img"
                              />
                            </div>
                            <img
                              ref={cortexGifRef}
                              alt=""
                              aria-hidden="true"
                              src="external/Cortex-gif.gif"
                              className={`portfolio-ai-cortex-gif${
                                cortexGifVisible
                                  ? ' portfolio-ai-cortex-gif-visible'
                                  : ''
                              }`}
                            />
                          </div>
                          <div className="portfolio-frame06"></div>
                        </div>
                      </div>
                      <div className="portfolio-frame07"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame08"></div>
                </div>
              </div>

              <Link to="/portfolioproject1" className="portfolio-navlink">
                <div className="portfolio-workcard">
                  <div className="portfolio-workcard-locked-aspect-ratio">
                    <div className="portfolio-workcard01">
                      <div className="portfolio-workcard-locked-aspect-ratio1">
                        <div className="portfolio-workcard02">
                          <AnimateOnReveal
                            animation="fadeInUp"
                            duration="300ms"
                            delay="0s"
                            direction="normal"
                            easing="ease"
                            iteration="1"
                          >
                            <div className="portfolio-headline-subhead02">
                              <div className="portfolio-frame2 home-headline-align">
                                <span className="portfolio-text12">
                                  <span className="Epilogue-36Light">
                                    Unity
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: ' ',
                                      }}
                                    />
                                  </span>
                                  <span className="Epilogue-36Bold">
                                    Live Capture Package
                                  </span>
                                  <span className="Epilogue-36Light"> </span>
                                  <span className="portfolio-text16">
                                    2021 - 2023
                                  </span>
                                </span>
                                <span className="portfolio-text17 Epilogue-24Bold">
                                  Learn More &gt;
                                </span>
                              </div>
                              <span className="portfolio-text18 Epilogue-17">
                                The Live Capture package in Unity brings
                                characters and cameras to life easily, using
                                iPhone and iPad for intuitive motion capture. This
                                streamlines the animation process, removing the
                                hassle of manual keyframing.
                              </span>
                            </div>
                          </AnimateOnReveal>
                          <div className="portfolio-homecontentimage-locked-aspect-ratio">
                            <div className="portfolio-homecontentimage">
                              <img
                                alt="image"
                                src="external/face-cap2-mac-case.gif"
                                className="portfolio-image"
                              />
                              <img
                                alt="image"
                                src="external/face-cap2-iphone-case.gif"
                                className="portfolio-image1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-frame"></div>
                      </div>
                    </div>
                    <div className="portfolio-frame01"></div>
                  </div>
                </div>
              </Link>
              <div className="portfolio-workcard03">
                <div className="portfolio-workcard-locked-aspect-ratio2">
                  <div className="portfolio-workcard04">
                    <div className="portfolio-workcard-locked-aspect-ratio3">
                      <Link
                        to="/portfolioproject2"
                        className="portfolio-navlink1"
                      >
                        <div className="portfolio-workcard05">
                          <AnimateOnReveal
                            animation="fadeInUp"
                            duration="300ms"
                            delay="0s"
                            direction="normal"
                            easing="ease"
                            iteration="1"
                          >
                            <div className="portfolio-headline-subhead03">
                              <div className="portfolio-frame21 home-headline-align">
                                <span className="portfolio-text19">
                                  <span className="Epilogue-36Bold">
                                    Wētā Realtime
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: ' ',
                                      }}
                                    />
                                  </span>
                                  <span className="Epilogue-36Light">
                                    Tools Integration 
                                  </span>
                                  <span className="portfolio-text22">
                                    2023 - 2024
                                  </span>
                                </span>
                                <span className="portfolio-text17 Epilogue-24Bold">
                                  Learn More &gt;
                                </span>
                              </div>
                              <span className="portfolio-text24 Epilogue-17">
                                <span>
                                  The Weta Realtime Tools for Unity editor
                                  enhance workflow efficiency and enable the
                                  creation of visually impressive content for
                                  both game and film production. This suite of
                                  features streamlines the development process,
                                  facilitating the rapid creation of
                                  high-quality visuals.
                                </span>
                              </span>
                            </div>
                          </AnimateOnReveal>
                          <div className="portfolio-homecontentimage-locked-aspect-ratio01">
                            <div className="portfolio-homecontentimage01 background-contain image-contain">
                              <div className="portfolio-homecontentimage-locked-aspect-ratio02 image-contain">
                                <div className="portfolio-homecontentimage02"></div>
                                <div className="portfolio-frame02"></div>
                              </div>
                            </div>
                            <div className="portfolio-frame03"></div>
                          </div>
                        </div>
                      </Link>
                      <div className="portfolio-frame04"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame05"></div>
                </div>
              </div>
              <div className="portfolio-workcard06">
                <div className="portfolio-workcard-locked-aspect-ratio4">
                  <Link to="/portfolioproject3" className="portfolio-navlink2">
                    <div className="portfolio-workcard07">
                      <div className="portfolio-workcard-locked-aspect-ratio5">
                        <div className="portfolio-workcard08">
                            <AnimateOnReveal
                              animation="fadeInUp"
                              duration="300ms"
                              delay="0s"
                              direction="normal"
                              easing="ease"
                              iteration="1"
                            >
                              <div className="portfolio-headline-subhead04">
                              <div className="portfolio-frame22 home-headline-align">
                                <span className="portfolio-text26">
                                  <span>Unity Virtual Production </span>
                                  <span className="portfolio-text28">
                                    2021 - 2023
                                  </span>
                                </span>
                                <span className="portfolio-text17 Epilogue-24Bold">
                                  Learn More &gt;
                                </span>
                              </div>
                            </div>
                            </AnimateOnReveal>
                          <span className="portfolio-text30 Epilogue-17">
                            <span>
                              Unity&apos;s toolkit for TV, broadcast, and
                              animations equips artists and filmmakers with
                              advanced capabilities for creating real-time
                              cinematics and pre-visualizations. This empowers
                              creative professionals to seamlessly bring their
                              visions to life.
                            </span>
                          </span>
                          <div className="portfolio-homecontentimage-locked-aspect-ratio03">
                            <div className="portfolio-homecontentimage03">
                              <div className="portfolio-homecontentimage04 image-contain">
                                <img
                                  alt="vsethomegif1I176"
                                  src="external/vset-home-gif.gif"
                                  className="portfolio-vsethomegif1"
                                />
                              </div>
                            </div>
                            <div className="portfolio-frame06"></div>
                          </div>
                        </div>
                        <div className="portfolio-frame07"></div>
                      </div>
                    </div>
                  </Link>
                  <div className="portfolio-frame08"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-latestwork-section-property3">
            <span className="portfolio-text32 Epilogue-36Light">
              <span>Case Studies</span>
            </span>
            <div className="portfolio-workcards1">
              <a
                href="https://www.figma.com/deck/e6GUobBtmXl2edNBMtCUpY/hair-package-website?node-id=1-207&viewport=175%2C145%2C0.09&t=KzDcx5eEHpLkJHJ6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link"
              >
                <div className="portfolio-workcard09">
                  <div className="portfolio-homecontentimage05">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio04">
                      <div className="portfolio-homecontentimage06"></div>
                      <div className="portfolio-frame09"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead05">
                    <span className="portfolio-text34 Epilogue-24Bold">
                      Hair Importer Optimization
                    </span>
                    <span className="portfolio-text35 Epilogue-17Regular">
                      <span>2023</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/4DXQb1JFrCXHADVfyL6Z0B/Live-capture-presentations?page-id=1%3A2&amp;type=design&amp;node-id=1-5112&amp;viewport=2297%2C797%2C0.13&amp;t=k5fLvsjENvNGfcM8-8&amp;scaling=scale-down&amp;starting-point-node-id=1%3A5112&amp;show-proto-sidebar=1&amp;hide-ui=1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link1"
              >
                <div className="portfolio-workcard10">
                  <div className="portfolio-homecontentimage07">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio05">
                      <div className="portfolio-homecontentimage08"></div>
                      <div className="portfolio-frame10"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead06">
                    <span className="portfolio-text37 Epilogue-24Bold">
                      <span>
                        Improving Live-Streaming Workflow
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="portfolio-text39 Epilogue-17Regular">
                      <span>2022 - 2023</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/Cs2DF8B9gYHYGq7mUpqlVF/Live-cap-Onboarding-Presentation?page-id=2357%3A13858&amp;node-id=2357-14294&amp;viewport=1609%2C416%2C0.06&amp;t=Mb6uMjPlicB1JvAx-8&amp;scaling=scale-down&amp;starting-point-node-id=2357%3A14294&amp;hide-ui=1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link2"
              >
                <div className="portfolio-workcard10">
                  <div className="portfolio-homecontentimage10">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio06">
                      <div className="portfolio-homecontentimage10"></div>
                      <div className="portfolio-frame11"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead07">
                    <span className="portfolio-text41 Epilogue-24Bold">
                      Better Engagement through User Onboarding
                    </span>
                    <span className="portfolio-text42 Epilogue-17Regular">
                      2022
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/QyldDHfs71823ax8PZnwb7/gamepad-presentation?page-id=2357%3A13858&node-id=2357-14294&viewport=810%2C317%2C0.03&t=V3UssHntIlesvYeg-8&scaling=scale-down&starting-point-node-id=2357%3A14294&show-proto-sidebar=1&content-scaling=fixed&hide-ui=1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link2"
              >
                <div className="portfolio-workcard20">
                  <div className="portfolio-homecontentimage20">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio06">
                      <div className="portfolio-homecontentimage20"></div>
                      <div className="portfolio-frame20"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead07">
                    <span className="portfolio-text41 Epilogue-24Bold">
                      Gamepad Control for Virtual Camera
                    </span>
                    <span className="portfolio-text42 Epilogue-17Regular">
                      2022
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/deck/UkQbnorCHS1NlvIdp2bBqL/Cluster-Display?node-id=29-12651&viewport=-7146%2C-3228%2C0.5&t=9MNCXcO4ux3Aaoc7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link2"
              >
                <div className="portfolio-workcard13">
                  <div className="portfolio-homecontentimage13">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio06">
                      <div className="portfolio-homecontentimage13"></div>
                      <div className="portfolio-frame13"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead07">
                    <span className="portfolio-text41 Epilogue-24Bold">
                      Virtual Production for Filmmakers
                    </span>
                    <span className="portfolio-text42 Epilogue-17Regular">
                      2023
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <span className="portfolio-text43 Epilogue-36Light">
              <span>Legacy Projects</span>
            </span>
            <div className="portfolio-workcards2">
              <a
                href="https://www.figma.com/proto/aKWOHcDnwx4CRrdNEq34f4/Waypoints-Presentation?page-id=1%3A1684&amp;type=design&amp;node-id=1-1881&amp;viewport=1186%2C731%2C0.05&amp;t=gdiPq8R8vdbLSRQ8-8&amp;scaling=scale-down&amp;starting-point-node-id=1%3A1881&amp;hide-ui=1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link3"
              >
                <div className="portfolio-workcard12">
                  <div className="portfolio-homecontentimage11">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio07">
                      <div className="portfolio-homecontentimage12"></div>
                      <div className="portfolio-frame12"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead08">
                    <span className="portfolio-text45 Epilogue-24Bold">
                      <span>Designing Waypoint System</span>
                    </span>
                    <span className="portfolio-text47 Epilogue-17Regular">
                      <span>2019</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/xpHm7zfgFLyi8CToedDq5C/design-system-presentation?page-id=0%3A1&amp;type=design&amp;node-id=2-64&amp;viewport=1369%2C-67%2C0.06&amp;t=DsZyajeXZTkkyYZl-8&amp;scaling=scale-down&amp;starting-point-node-id=2%3A64&amp;hide-ui=1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link4"
              >
                <div className="portfolio-workcard13">
                  <div className="portfolio-homecontentimage13">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio08">
                      <div className="portfolio-homecontentimage14"></div>
                      <div className="portfolio-frame13"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead09">
                    <span className="portfolio-text49 Epilogue-24Bold">
                      Joist Design System
                    </span>
                    <span className="portfolio-text50 Epilogue-17Regular">
                      2020
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/DiZHcWXYgazqwHt0xJHEgj/Joist-Change-Order-Presentation?page-id=0%3A1&node-id=1-815&viewport=1817%2C920%2C0.13&t=q8of4HPOGWW5tiQ0-8&scaling=scale-down&starting-point-node-id=1%3A815&hide-ui=1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link5"
              >
                <div className="portfolio-workcard14">
                  <div className="portfolio-homecontentimage15">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio09">
                      <div className="portfolio-homecontentimage16"></div>
                      <div className="portfolio-frame14"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead10">
                    <span className="portfolio-text51 Epilogue-24Bold">
                      Driving Sales for Invoicing App
                    </span>
                    <span className="portfolio-text52 Epilogue-17Regular">
                      <span>2021</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/23hw4MjPiKTbJvUabnOGLS/behaviour-Presentation?page-id=0%3A1&node-id=2-632&viewport=895%2C611%2C0.13&t=loEZyfBMRGbL4Dmw-8&scaling=scale-down&starting-point-node-id=2%3A632&hide-ui=1"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link6"
              >
                <div className="portfolio-workcard15">
                  <div className="portfolio-homecontentimage17">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio10">
                      <div className="portfolio-homecontentimage18"></div>
                      <div className="portfolio-frame15"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead11">
                    <span className="portfolio-text54 Epilogue-24Bold">
                      Creating Interactive Behaviour System
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="portfolio-text55 Epilogue-17Regular">
                      <span>2019</span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default Portfolio
