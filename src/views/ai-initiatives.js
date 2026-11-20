import React from 'react'

import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import PasswordGate from '../components/password-gate'
import './ai-initiatives.css'

const RowText = ({ tag, lead, desc, bullets }) => (
  <div className="ai-row-text">
    <span className="ai-row-tag Epilogue-17Bold">{tag}</span>
    {lead && <p className="ai-row-lead Epilogue-36Bold">{lead}</p>}
    {desc && <p className="ai-row-desc Epilogue-17">{desc}</p>}
    {bullets && (
      <ul className="ai-row-list Epilogue-17">
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

const Row = ({ tag, lead, desc, bullets, src, alt, plain, bleed, children }) => (
  <div className="ai-row">
    <RowText tag={tag} lead={lead} desc={desc} bullets={bullets} />
    {src && (
      <div
        className={[
          'ai-row-media',
          plain && 'ai-row-media--plain',
          bleed && 'ai-row-media--bleed',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <Media src={src} alt={alt} />
      </div>
    )}
    {children}
  </div>
)

const RowMediaPair = ({ tag, lead, desc, bullets, items }) => (
  <div className="ai-row">
    <RowText tag={tag} lead={lead} desc={desc} bullets={bullets} />
    <div className="ai-row-media-pair">
      {items.map((item) => (
        <div className="ai-row-media" key={item.src}>
          <Media src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  </div>
)

const HeroOverlap = () => (
  <div className="ai-hero-overlap">
    <div className="ai-hero-overlap-base">
      <img
        src="external/ai-initiatives/slide18-game-assistant-screenshot.png"
        alt="Games Workspace Channels screen with the Game Assistant panel open"
        loading="lazy"
      />
    </div>
    <div className="ai-hero-overlap-float">
      <video
        src="external/ai-initiatives/slide18-playability-check.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  </div>
)

const Flywheel = () => (
  <div className="ai-hero-image">
    <img
      src="external/ai-initiatives/architecture-flywheel.png"
      alt="One MCP hub, flywheel approach: Contribute and Benchmark feed Netflix Games AI Cortex, which integrates and deploys to Kids, Mobile, Unity and Unreal"
      loading="lazy"
    />
  </div>
)

const Statement = ({ eyebrow, title, desc }) => (
  <div className="ai-row">
    <div className="ai-statement">
      <span className="ai-statement-eyebrow Epilogue-17Bold">{eyebrow}</span>
      <h2 className="ai-statement-title Epilogue-64Bold">{title}</h2>
      {desc && <p className="ai-statement-desc Epilogue-17">{desc}</p>}
    </div>
  </div>
)

const ThreeLayers = () => (
  <Row
    tag="Lens 02"
    lead="A framework: three layers of agentic interaction"
    desc="Where an agent lives in our products, and how far it reaches."
    src="external/ai-initiatives/three-layers-diagram.png"
    alt="Nested diagram of the orchestration, product and inline layers, each with escalate and hand-back arrows, all sitting on gamesMCP"
  />
)

const AiInitiatives = (props) => {
  return (
    <div className="ai-container">
      <Helmet>
        <title>Designing for AI-native Game Tooling — Kylo Xue</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <PasswordGate>
        <div className="ai-page">
          <div className="ai-content port-container-responsive">
            <section className="ai-hero">
              <span className="ai-eyebrow Epilogue-17Bold">Netflix</span>
              <h1 className="ai-title Epilogue-64Bold">
                Designing for AI-native Game Tooling
              </h1>
              <div className="ai-meta-row Epilogue-17">
                <span className="ai-meta-item">
                  <span className="ai-meta-label">Company</span>
                  <span className="ai-meta-value">Netflix</span>
                </span>
                <span className="ai-meta-divider">/</span>
                <span className="ai-meta-item">
                  <span className="ai-meta-label">Duration</span>
                  <span className="ai-meta-value">3 months</span>
                </span>
                <span className="ai-meta-divider">/</span>
                <span className="ai-meta-item">
                  <span className="ai-meta-label">Year</span>
                  <span className="ai-meta-value">2026</span>
                </span>
              </div>

              <HeroOverlap />
            </section>

            <section className="ai-case-study">
              <div className="ai-row">
                <RowText
                  tag="My Role"
                  lead="Building a design practice for a platform that didn't have one"
                  desc="Cortex had no design effort before this. I made the case for design, led the research, and authored the AIUX framework the team builds from today."
                  bullets={[
                    'Proposal: made the case for design to shape Cortex now.',
                    'Research: audited internal and industry approaches to agentic AI.',
                    'Framework: authored the AIUX patterns and three-layer model.',
                  ]}
                />
              </div>

              <div className="ai-row">
                <RowText
                  tag="Mission"
                  lead="“AI-native” for the games developer ecosystem"
                  desc="AI fits our core value of a seamless game dev ecosystem. Beyond AI-assisted chatbots and productivity agents, Netflix Games needed an AI-native way to build games: one MCP hub, with contribution and benchmarking flowing in, and integration and deployment flowing out to every platform."
                />
                <Flywheel />
              </div>

              <Statement
                eyebrow="Design Goal"
                title={
                  <>
                    Design for agents "first",{' '}
                    <span className="ai-gradient-text">humans "second"</span>
                  </>
                }
                desc="Our work shifts from screens a person clicks through to how people direct, trust and correct the agents doing the work."
              />

              <RowMediaPair
                tag="Research"
                lead="Auditing what's out there"
                desc="A tooling audit across Claude Cowork, Unity's in-editor assistant and MCP server, Slack, and the Cortex Slack bot, plus a competitive deep dive into Microsoft Copilot and Unity's in-editor agentic assistant and AI Gateway."
                items={[
                  {
                    src: 'external/ai-initiatives/research-audit-1.png',
                    alt: 'Tooling audit: Claude Cowork, Claude Code in a games org-chart project, and the Cortex Slack bot answering questions in a thread',
                  },
                  {
                    src: 'external/ai-initiatives/research-audit-2.png',
                    alt: "Tooling audit: Unity's in-editor AI assistant and MCP server, Gemini in Google Docs, Figma AI, and Adobe Firefly in Photoshop",
                  },
                ]}
              />

              <Row
                tag="Lens 01 · Patterns in Practice"
                lead="Cortex layouts, built on internal patterns"
                src="external/ai-initiatives/patterns-in-practice.mp4"
                alt="Figma specs for Cortex conversational AI layouts: anatomy, layout and spacing, and reasoning chain"
                bleed
              />

              <ThreeLayers />

              <Row
                tag="Product"
                lead="The agent diagnoses, the user decides"
                desc="The Game Assistant chat is scoped to one session: ask about its logs or performance, and it answers in place, bounded to the platform it lives in."
                src="external/ai-initiatives/product-example.mp4"
                alt="Game Assistant chat panel in the Games Workspace channel view, answering a question about session performance"
              />

              <Row
                tag="In Production"
                lead="Blocking out the patterns in production"
                desc="Intent asked in plain words, a plan stated before it runs, one clear status, evidence for every check, and a checkpoint to steer to another target, each answer carries a trace ID."
                src="external/ai-initiatives/blockout-production.mp4"
                alt="Annotated screenshot of the Game Assistant panel showing intent, plan, status, evidence and checkpoint mapped onto the real UI"
              />

            </section>
          </div>
          <Footer rootClassName="footer-root-class-name"></Footer>
        </div>
      </PasswordGate>
    </div>
  )
}

export default AiInitiatives
