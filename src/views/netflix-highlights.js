import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import BeforeAfterSlider from '../components/before-after-slider'
import PasswordGate from '../components/password-gate'
import './netflix-highlights.css'

const RowText = ({ tag, lead, desc, bullets }) => (
  <div className="nh-row-text">
    <span className="nh-row-tag Epilogue-17Bold">{tag}</span>
    {lead && <p className="nh-row-lead Epilogue-36Bold">{lead}</p>}
    {desc && <p className="nh-row-desc Epilogue-17">{desc}</p>}
    {bullets && (
      <ul className="nh-row-list Epilogue-17">
        {bullets.map((item) => {
          const match = item.match(/^([^:]+:)\s*(.*)$/)
          return (
            <li key={item}>
              {match ? (
                <>
                  <strong>{match[1]}</strong> {match[2]}
                </>
              ) : (
                item
              )}
            </li>
          )
        })}
      </ul>
    )}
  </div>
)

const isVideo = (src) => /\.(mp4|webm)$/i.test(src)

const Media = ({ src, alt }) =>
  isVideo(src) ? (
    <video src={src} autoPlay loop muted playsInline preload="auto" />
  ) : (
    <img src={src} alt={alt} loading="lazy" />
  )

const LinkoutIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M4 10L10 4M10 4H5M10 4V9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Row = ({ tag, lead, desc, bullets, src, alt, side, cta, plain }) => (
  <div className={side ? 'nh-row nh-row--side' : 'nh-row'}>
    <RowText tag={tag} lead={lead} desc={desc} bullets={bullets} />
    <div className={plain ? 'nh-row-media nh-row-media--plain' : 'nh-row-media'}>
      <Media src={src} alt={alt} />
    </div>
    {cta && (
      <a
        href={cta.href}
        target="_blank"
        rel="noreferrer noopener"
        className="nh-row-linkout Epilogue-17Bold"
      >
        {cta.label}
        <LinkoutIcon />
      </a>
    )}
  </div>
)

const RowMediaPair = ({ tag, lead, desc, bullets, items, extra }) => (
  <div className="nh-row">
    <RowText tag={tag} lead={lead} desc={desc} bullets={bullets} />
    <div className="nh-row-media-pair">
      {items.map((item) => (
        <div className="nh-row-media" key={item.src}>
          <Media src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
    {extra && (
      <div className="nh-row-media nh-row-media-extra">
        <Media src={extra.src} alt={extra.alt} />
      </div>
    )}
  </div>
)

const BleedImage = ({ src, alt }) => (
  <div className="nh-bleed-image">
    <img src={src} alt={alt} loading="lazy" />
  </div>
)

const NetflixHighlights = (props) => {
  return (
    <div className="nh-container">
      <Helmet>
        <title>Leading the Redesign of Cloud Game Tooling — Kylo Xue</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <PasswordGate>
      <div className="nh-page">
        <div className="nh-content port-container-responsive">
          <section className="nh-hero">
            <span className="nh-eyebrow Epilogue-17Bold">Netflix</span>
            <h1 className="nh-title Epilogue-64Bold">
              Leading the Redesign of Cloud Game Tooling
            </h1>
            <div className="nh-meta-row Epilogue-17">
              <span className="nh-meta-item">
                <span className="nh-meta-label">Company</span>
                <span className="nh-meta-value">Netflix</span>
              </span>
              <span className="nh-meta-divider">/</span>
              <span className="nh-meta-item">
                <span className="nh-meta-label">Duration</span>
                <span className="nh-meta-value">5 months</span>
              </span>
              <span className="nh-meta-divider">/</span>
              <span className="nh-meta-item">
                <span className="nh-meta-label">Year</span>
                <span className="nh-meta-value">2026</span>
              </span>
            </div>

            <div className="nh-compare">
              <BeforeAfterSlider
                beforeSrc="external/netflix-highlights/session-tooling-before.mp4"
                afterSrc="external/netflix-case-studies/new-video-session-viewer.mp4"
                beforeAlt="Old web session viewer, the central tool for launching, playing, and reviewing cloud game sessions"
                afterAlt="Final session tool layout with game view centered and performance graph and logs docked around it"
              />
            </div>
          </section>

          <section className="nh-case-study">
            <div className="nh-row">
              <RowText
                tag="My Role"
                lead="Grounding the redesign in real developer behavior"
                desc="Owned concept through delivery, defining the layout framework and detailing component-level interactions while aligning cross-functional partners on standards, feasibility, and phased rollout across every instance."
                bullets={[
                  'Research: initial research and studies to ground the direction and acquire buy-in.',
                  'User testing: ran usability sessions on the working prototype with my research partner.',
                  'Implementation: partnered with engineering through the build, design as part of the eng process.',
                ]}
              />
            </div>

            <Row
              side
              tag="Layout"
              lead="Restructuring the layout"
              desc="Game view first, data docked around it. Resizable, rearrangeable panels, no duplicate navigation, no wasted margins."
              src="external/netflix-case-studies/layout-session.mp4"
              alt="Session viewer layout exploration, panels docked and resized around the game view"
            />

            <RowMediaPair
              tag="Components"
              lead="What matters most gets the most space"
              desc="A feature matrix mapped every piece against how critical and how often it's used. Critical and frequent, the stream, logs, and performance graph, led and set the order for component design."
              items={[
                {
                  src: 'external/netflix-case-studies/video-perf-graph.mp4',
                  alt: 'Component 01, the performance graph, rendering next to the logs',
                },
                {
                  src: 'external/netflix-case-studies/video-logs-crop.mp4',
                  alt: 'Component 02, game and controller logs with syntax highlighting and filters',
                },
              ]}
              extra={{
                src: 'external/netflix-case-studies/session-tooling-component-panels.jpg',
                alt: 'Full set of session tool component panels: panel selector, channel and build, test account, settings, overview, player blob, and QR code',
              }}
            />

            <div className="nh-row">
              <RowText
                tag="Original Designs"
                desc="Game logs, the performance graph, and session files each lived behind their own tab, wasting space and hiding the data developers needed most. Even releasing a build meant jumping through manual steps and hoops."
              />
            </div>
            <BleedImage
              src="external/netflix-case-studies/old-design.jpg"
              alt="Original session tooling: web portal game creation screen, desktop toolkit panels, and session logs layered across separate windows"
            />

            <div className="nh-row">
              <RowText
                tag="Revamped Design"
                lead="Game view first, data docked around it"
                desc="The shipped layout: game view centered, performance graph and logs docked around it, resizable and collapsible, like the engine editors developers already live in."
              />
            </div>
            <BleedImage
              src="external/netflix-case-studies/new-design-all.jpg"
              alt="Final session tool layout with game view centered and performance graph and logs docked around it"
            />

            <Row
              tag="Handoff"
              lead="Design became part of the eng process"
              desc="The prototype became the source of truth. We broke the epic into phased approaches, and design became part of the implementation."
              src="external/netflix-case-studies/handoff-diagram-red-transparent.png"
              alt="Handoff diagram: the prototype as source of truth, the epic broken into phased approaches, design folded into the implementation"
              plain
            />

            <Row
              tag="Final Product"
              lead="The shipped session tool, live"
              desc="Game view centered, performance graph and logs docked around it, resizable and collapsible."
              src="external/netflix-case-studies/export-final-crop.mp4"
              alt="Final shipped session tool interface running in the interactive prototype"
              cta={{
                href: 'https://alfance.github.io/ocga-server/play?gameId=999001&channelName=main',
                label: 'Try the interactive prototype',
              }}
            />
          </section>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      </PasswordGate>
    </div>
  )
}

export default NetflixHighlights
