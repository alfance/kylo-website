import React, { useRef } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ScatteredShowcase from '../components/scattered-showcase'
import UxShowcase from '../components/ux-showcase'
import CollageReveal from '../components/collage-reveal'
import './netflix-live-capture.css'

const ConceptCard = ({ tag, title, children }) => (
  <div className="netflix-pitch-concept-card">
    <span className="netflix-pitch-concept-tag Epilogue-17Bold">{tag}</span>
    <h3 className="Epilogue-24Bold netflix-pitch-concept-title">
      <img
        src="/external/netflix-live-capture/ai-icon.svg"
        alt=""
        aria-hidden="true"
        className="netflix-pitch-concept-title-icon"
      />
      {title}
    </h3>
    {children}
  </div>
)

const FixItem = ({ label }) => <li className="Epilogue-17">{label}</li>

const NetflixLiveCapture = (props) => {
  const walkOldRef = useRef(null)
  const walkNewRef = useRef(null)

  const replayWalkVideosTogether = () => {
    const oldVideo = walkOldRef.current
    const newVideo = walkNewRef.current
    if (!oldVideo || !newVideo) return
    if (oldVideo.ended && newVideo.ended) {
      oldVideo.currentTime = 0
      newVideo.currentTime = 0
      oldVideo.play()
      newVideo.play()
    }
  }

  return (
    <div className="netflix-pitch-container">
      <Helmet>
        <title>Kylo Xue: Live Capture &amp; AI for Production</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="netflix-pitch-page overflown-small-size">
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <div className="netflix-pitch-content port-container-responsive">

          <section className="netflix-pitch-hero">
            <span className="netflix-pitch-eyebrow Epilogue-17Bold">
              Prepared for the Netflix Enterprise Team
            </span>
            <h1 className="netflix-pitch-title Epilogue-64Bold">
              Tools artists use on set,
              <br />
              <span className="netflix-pitch-gradient-text">
                evolved through agentic AI
              </span>
            </h1>
            <p className="netflix-pitch-subtitle Epilogue-24Light">
              A follow-up deep dive into Virtual Camera within Unity Live
              Capture, showing how design thinking and AI enablement
              empower production workflows.
            </p>
          </section>

          <section className="netflix-pitch-section">
            <span className="netflix-pitch-kicker Epilogue-17Bold">
              The Starting Point ·{' '}
              <span className="netflix-pitch-gradient-text">Before 2022</span>
            </span>
            <h2 className="netflix-pitch-heading Epilogue-36Bold">
              A Disjointed, Scattered Experience
            </h2>
            <p className="netflix-pitch-muted Epilogue-17">
              Live Capture and Virtual Camera launched as two disconnected
              pieces: a <strong className="Epilogue-17Bold">multi-window
              Unity Editor setup</strong> and a{' '}
              <strong className="Epilogue-17Bold">separate iOS app</strong>,
              with no unified place to manage takes, camera setup, or sync
              state, and no in-context onboarding, leaving users lost before
              they ever captured a take.
            </p>
            <ScatteredShowcase />
          </section>

          <section className="netflix-pitch-section">
            <div className="netflix-pitch-section-text">
              <span className="netflix-pitch-kicker Epilogue-17Bold">
                Team Initiatives ·{' '}
                <span className="netflix-pitch-gradient-text">2023</span>
              </span>
              <h2 className="netflix-pitch-heading Epilogue-36Bold">
                Streamlining the Workflow, UX First
              </h2>
              <p className="netflix-pitch-muted Epilogue-17">
                Before AI ever entered the picture, these were the Live
                Capture team's major initiatives, UX, UI, and workflow
                problem-solving:
              </p>
              <ul className="netflix-pitch-bullet-list">
                <FixItem label="Unified Control Panel" />
                <FixItem label="Streamlined Onboarding" />
                <FixItem label="Gamepad Support" />
                <FixItem label="Timecode Sync" />
              </ul>
            </div>
            <div className="netflix-pitch-arrows-bleed">
              <img
                src="/external/netflix-live-capture/arrows-phase-change.png"
                alt=""
                aria-hidden="true"
                className="netflix-pitch-arrows"
              />
            </div>
            <UxShowcase />
          </section>

          <section className="netflix-pitch-section">
            <div className="netflix-pitch-hero-row">
              <div className="netflix-pitch-hero-text">
                <span className="netflix-pitch-kicker Epilogue-17Bold">
                  AI Enablement ·{' '}
                  <span className="netflix-pitch-gradient-text">2026</span>
                </span>
                <h2 className="netflix-pitch-heading Epilogue-36Bold">
                  Where AI Takes It Further
                </h2>
              </div>
              <CollageReveal />
            </div>

            <div className="netflix-pitch-subsection netflix-pitch-subsection-narrow netflix-pitch-ai-intro">
              <h3 className="netflix-pitch-gradient-text Epilogue-24Bold">
                1. Optimizing Vibe Coding Between Design and Dev
              </h3>
              <p className="netflix-pitch-muted Epilogue-17">
                Live Capture dev work continued into 2026. AI-assisted
                development changed how fast we could move. Here's what
                shipped:
              </p>
            </div>

            <div className="netflix-pitch-ai-shipped-row">
              <ul className="netflix-pitch-bullet-list netflix-pitch-subsection-narrow">
                <li className="Epilogue-17">
                  <strong className="Epilogue-17Bold">
                    Unified all Live Capture windows
                  </strong>{' '}
                  (connection, take recorder, timecode, and shot management)
                  into one surface.
                </li>
                <li className="Epilogue-17">
                  Rendered the virtual camera app{' '}
                  <strong className="Epilogue-17Bold">in-browser</strong> for
                  faster testing
                </li>
                <li className="Epilogue-17">
                  <strong className="Epilogue-17Bold">
                    Re-architected the timeline
                  </strong>{' '}
                  for more robust live vs. playback shot handling
                </li>
              </ul>
              <div className="netflix-pitch-ai-shipped-video-frame">
                <video
                  src="/external/netflix-live-capture/2026-take-shot-crop-1.mp4"
                  loop="true"
                  muted="true"
                  preload="auto"
                  autoPlay="true"
                  playsInline="true"
                  className="netflix-pitch-ai-shipped-video"
                ></video>
              </div>
            </div>

            <div className="netflix-pitch-focus-gradient-bleed">
              <img
                src="/external/netflix-live-capture/gradient%205.png"
                alt=""
                aria-hidden="true"
                className="netflix-pitch-focus-gradient"
              />
            </div>

            <p className="Epilogue-17 netflix-pitch-focus-label">
              Adjust camera focus in app, live sync in Unity scene.
            </p>
            <div className="netflix-pitch-focus-row">
              <div className="netflix-pitch-focus-group">
                <video
                  src="/external/netflix-live-capture/focus-editor.mp4"
                  loop="true"
                  muted="true"
                  preload="auto"
                  autoPlay="true"
                  playsInline="true"
                  className="netflix-pitch-focus-editor"
                ></video>
                <div className="netflix-pitch-focus-ipad">
                  <video
                    src="/external/netflix-live-capture/focus-ipad.mp4"
                    loop="true"
                    muted="true"
                    preload="auto"
                    autoPlay="true"
                    playsInline="true"
                    className="netflix-pitch-focus-ipad-video"
                  ></video>
                  <img
                    src="/external/netflix-live-capture/iPad%20Pro%2011-Inch.png"
                    alt=""
                    aria-hidden="true"
                    className="netflix-pitch-focus-ipad-frame"
                  />
                </div>
              </div>
            </div>

            <p className="Epilogue-17 netflix-pitch-focus-label netflix-pitch-focus-label-alt">
              Record a walk cycle camera movement.
            </p>
            <div className="netflix-pitch-focus-row netflix-pitch-focus-row-alt">
              <div className="netflix-pitch-focus-group">
                <video
                  src="/external/netflix-live-capture/2026-take-shot-editor%20-%20recording-final.mp4"
                  loop="true"
                  muted="true"
                  preload="auto"
                  autoPlay="true"
                  playsInline="true"
                  className="netflix-pitch-focus-editor"
                ></video>
                <div className="netflix-pitch-focus-ipad">
                  <video
                    src="/external/netflix-live-capture/ipad-screenshot-recording.mp4"
                    loop="true"
                    muted="true"
                    preload="auto"
                    autoPlay="true"
                    playsInline="true"
                    className="netflix-pitch-focus-ipad-video"
                  ></video>
                  <img
                    src="/external/netflix-live-capture/iPad%20Pro%2011-Inch.png"
                    alt=""
                    aria-hidden="true"
                    className="netflix-pitch-focus-ipad-frame"
                  />
                </div>
              </div>
            </div>

            <h3 className="netflix-pitch-gradient-text Epilogue-24Bold netflix-pitch-agentic-heading">
              2. Agentic Concepts for Production Workflows
            </h3>

            <div className="netflix-pitch-agentic-row">
              <div className="netflix-pitch-subsection netflix-pitch-subsection-narrow">
                <p className="netflix-pitch-muted Epilogue-17">
                  An early concept I haven't shipped, meant to show how I'd
                  approach AI-assisted tooling for artists.
                </p>
                <div className="netflix-pitch-concepts">
                  <ConceptCard tag="Concept and Mockup" title="AI Motion Cleanup for Cinemachine">
                    <p className="Epilogue-17">
                      A post-shot stabilizer for recorded takes:
                    </p>
                    <ul className="netflix-pitch-concept-bullet-list">
                      <li className="Epilogue-17">
                        <strong className="Epilogue-17Bold">
                          Smooths shaky takes
                        </strong>{' '}
                        after the fact using a jitter-removal filter, right
                        in the Take Recorder panel.
                      </li>
                      <li className="Epilogue-17">
                        <strong className="Epilogue-17Bold">
                          Auto-detects shot type and jitter severity
                        </strong>
                        , with a visual heatmap showing where the shake is.
                      </li>
                      <li className="Epilogue-17">
                        A proof-of-concept for{' '}
                        <strong className="Epilogue-17Bold">
                          AI-assisted editing
                        </strong>{' '}
                        — a real working demo, not just a mockup.
                      </li>
                    </ul>
                  </ConceptCard>
                </div>
              </div>
              <video
                src="/external/netflix-live-capture/stable-ui.mp4"
                loop="true"
                muted="true"
                preload="auto"
                autoPlay="true"
                playsInline="true"
                className="netflix-pitch-agentic-video"
              ></video>
            </div>

            <div className="netflix-pitch-walk-row">
              <div className="netflix-pitch-walk-item">
                <span className="netflix-pitch-walk-label Epilogue-17">
                  Original shot with jitter
                </span>
                <video
                  ref={walkOldRef}
                  src="/external/netflix-live-capture/walk-old.mp4"
                  muted="true"
                  preload="auto"
                  autoPlay="true"
                  playsInline="true"
                  onEnded={replayWalkVideosTogether}
                  className="netflix-pitch-walk-video"
                ></video>
              </div>
              <div className="netflix-pitch-walk-item">
                <span className="netflix-pitch-walk-label Epilogue-17 netflix-pitch-walk-label-icon">
                  <img
                    src="/external/netflix-live-capture/ai-icon.svg"
                    alt=""
                    aria-hidden="true"
                    className="netflix-pitch-walk-label-icon-img"
                  />
                  Post-stabilization to remove jitter and camera shocks.
                </span>
                <video
                  ref={walkNewRef}
                  src="/external/netflix-live-capture/walk-new.mp4"
                  muted="true"
                  preload="auto"
                  autoPlay="true"
                  playsInline="true"
                  onEnded={replayWalkVideosTogether}
                  className="netflix-pitch-walk-video"
                ></video>
              </div>
            </div>
          </section>

        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
    </div>
  )
}

export default NetflixLiveCapture
