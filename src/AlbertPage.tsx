import './albert.css';

const shipped = [
  {
    number: '01',
    category: 'APPLIED AI',
    title: 'Turning unstructured information into grounded answers.',
    name: 'Knowledge Studio · Document Intelligence',
    problem: 'Documents that cannot become answers unless the evidence is visible and the reader is allowed to see it.',
    system: 'One ingestion path. Retrieval that stays inside the user’s permissions. Chat, editing, and comparison tied to citations.',
    decisions: ['RAG', 'BM25', 'Vector search', 'RRF', 'Authorization-aware retrieval'],
  },
  {
    number: '02',
    category: 'HEALTHCARE DATA',
    title: 'Connecting medical records at scale.',
    name: 'Medical Record Retrieval',
    problem: 'Records that have to move across provider networks without losing the request, the file, or the audit trail.',
    system: 'A Django and Next.js platform for the request lifecycle — APIs, portals, file exchange, and tenant-aware delivery on AWS.',
    decisions: ['Request lifecycle', 'Celery', 'Tenant feature flags', 'Secure exchange'],
  },
  {
    number: '03',
    category: 'CLINICAL OPERATIONS',
    title: 'Bringing clarity to complex reviews.',
    name: 'Clinical Audit & Claims Review',
    problem: 'Hospital and insurance audit teams working through dense review work that has to stay traceable.',
    system: 'A .NET Core application on Azure for intake, claims review, healthcare integrations, and structured audit logging.',
    decisions: ['.NET Core', 'Azure', 'Healthcare integrations', 'Audit logging'],
  },
];

const pillars = [
  {
    title: 'Healthcare Platforms',
    text: 'Medical record retrieval, healthcare data workflows, audit, claims, provider integrations, and the enterprise systems those workflows run on.',
  },
  {
    title: 'Cloud & Distributed Systems',
    text: 'Cloud-native applications, APIs, infrastructure, security, reliability, and the operational work of keeping a system dependable.',
  },
  {
    title: 'Applied AI',
    text: 'LLMs, RAG, hybrid retrieval, intelligent document processing, agents, and AI-assisted workflows that stay tied to a real problem.',
  },
  {
    title: 'AI Architecture',
    text: 'Connecting models, enterprise data, tools, workflows, and applications into governed systems people can actually use.',
  },
];

const experiments = [
  {
    title: 'Medical AI',
    text: 'Specialized models that turn medical data into structured inference. An exploration — not a product, and not a clinical claim.',
  },
  {
    title: 'Agentic Engineering',
    text: 'Controlled multi-agent workflows for software development and knowledge work, with a person still accountable for the result.',
  },
  {
    title: 'Intelligent Retrieval',
    text: 'Hybrid retrieval that combines lexical, semantic, and contextual signals so answers stay grounded in the right documents.',
  },
  {
    title: 'AI Infrastructure',
    text: 'LLMs, embeddings, vector databases, orchestration, and governed tool access — the unglamorous layer that makes the rest possible.',
  },
];

const beliefs = [
  'Build for reality, not demos.',
  'AI should solve measurable problems, not exist because it is fashionable.',
  'Keep systems simple until complexity earns its place.',
  'Understand the whole system, not just the code.',
  'Good architecture balances technology, people, cost, security, and delivery.',
  'Stay curious.',
  'Be honest about what you know — and what you don’t.',
];

type JourneyStage = {
  title: string;
  lesson: string;
  text?: string;
  quote?: string;
  note?: string;
  expand?: string[];
  using?: string[];
  building?: string[];
  key?: boolean;
};

const journeyStages: JourneyStage[] = [
  {
    title: 'Classic .NET',
    lesson: 'Learning to build applications',
    text: 'I started with classic .NET and the way enterprise applications were traditionally built.',
    expand: ['Application', 'Server'],
  },
  {
    title: 'On-prem → Cloud',
    lesson: 'Learning to think about infrastructure',
    text: 'Classic .NET applications ran alongside the infrastructure they depended on. Curiosity about servers, security, deployment, and operations led me toward cloud.',
    quote: 'I went from thinking about an application to thinking about the system that runs the application.',
    expand: ['Application', 'Infrastructure', 'Cloud'],
    key: true,
  },
  {
    title: 'Modern .NET',
    lesson: 'Learning that platforms evolve',
    text: 'As the ecosystem evolved, I moved toward modern .NET and .NET Core — APIs, services, containers, and more modular architectures.',
    quote: 'The framework changed, but more importantly, the way I thought about building software changed.',
    expand: ['Classic .NET', '.NET Core', 'Cloud-native'],
    key: true,
  },
  {
    title: 'Java / Spring Boot → Python',
    lesson: 'Learning to choose the right tool for the problem',
    text: 'I moved beyond one ecosystem. Each one taught a different way to build APIs, services, and integrations.',
    quote: 'I learned to choose the technology based on the problem rather than forcing every problem into the technology I already knew.',
    note: 'The language changed. The engineering principles remained.',
  },
  {
    title: 'Systems & platforms',
    lesson: 'Learning to think beyond code',
    text: 'The work got larger: software, infrastructure, security, data, APIs, deployment, observability, people, and business workflows had to fit together.',
    quote: 'The bigger the system became, the more I had to think beyond the code.',
    expand: ['Systems', 'Platforms', 'Data', 'Security'],
    key: true,
  },
  {
    title: 'AI-assisted engineering',
    lesson: 'Learning to build with AI',
    text: 'AI changed not only what I build, but how I build. Tools such as Cursor, Codex, and Claude Code changed the development loop. Architecture, judgment, security, and responsibility still belong to the engineer.',
    quote: 'AI accelerates the engineering loop. It does not replace it.',
    using: ['Cursor', 'Codex', 'Claude Code'],
  },
  {
    title: 'AI systems',
    lesson: 'Learning to understand what sits behind AI',
    text: 'There is a difference between using AI tools and understanding the systems behind them.',
    quote: 'I am moving from simply using AI toward understanding and building the systems behind it.',
    building: ['LLMs', 'RAG', 'Hybrid retrieval', 'Agents', 'MCP', 'Inference'],
    expand: ['AI', 'Models', 'Retrieval', 'Agents', 'Tools', 'Inference'],
    key: true,
  },
  {
    title: 'Self-hosted models',
    lesson: 'Learning to understand the model and inference layer',
    text: 'Alongside hosted models, I experiment with Muse Glimmer and Qwen — running and understanding the inference layer rather than treating the model as a black box.',
    quote: 'Sometimes the right engineering decision is a managed model. Sometimes understanding and controlling the model infrastructure matters.',
    building: ['Qwen', 'Muse Glimmer'],
    key: true,
  },
  {
    title: 'Medical intelligence',
    lesson: 'Exploring what comes next',
    text: 'Specialized models as governed capabilities — a platform idea, not a clinical product.',
  },
];

function JourneyPath({ steps, caption }: { steps: string[]; caption?: string }) {
  return (
    <p className="journey-path">
      {steps.map((step, i) => (
        <span key={step} className="journey-path-step">
          {i > 0 && (
            <span className="journey-path-arrow" aria-hidden="true">
              →
            </span>
          )}
          {step}
        </span>
      ))}
      {caption ? <span className="journey-path-note">{caption}</span> : null}
    </p>
  );
}

const askAbout = [
  { label: 'Healthcare AI', href: '#toward' },
  { label: 'Medical record retrieval', href: '#build' },
  { label: 'RAG architecture', href: '#experiments' },
  { label: 'Agentic systems', href: '#experiments' },
  { label: 'Cloud architecture', href: '#build' },
  { label: '.NET evolution', href: '#journey' },
  { label: 'AI product design', href: '#toward' },
  { label: 'Photography', href: '#who' },
  { label: 'Cricket', href: '#who' },
  { label: 'Bikes', href: '#who' },
  { label: 'Tamil', href: '#who' },
];

const heroPhoto = `${import.meta.env.BASE_URL}albert-hero.png`;

export default function AlbertPage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav wrap">
        <a className="brand" href="#">
          Albert<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#journey">Journey</a>
          <a href="#build">Build</a>
          <a href="#toward">Toward</a>
          <a href="#who">Who I am</a>
          <a href="#contact">
            Connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="portrait-hero" aria-labelledby="intro">
          <img
            className="hero-photo"
            src={heroPhoto}
            alt="Albert Arokiyasouridass in an office"
            fetchPriority="high"
            width={1536}
            height={1024}
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="wrap portrait-content">
            <div className="portrait-copy">
              <p className="eyebrow">HEALTHCARE × ENGINEERING × CLOUD × AI</p>
              <h1 id="intro">
                Albert<span className="hero-surname">Arokiyasouridass</span>
              </h1>
              <p className="portrait-lead">
                I build systems that turn complex healthcare data, workflows, and domain knowledge into intelligent,
                usable software.
              </p>
              <p className="portrait-description">
                My journey started with classic .NET. Today, I build cloud applications and practical AI, bringing
                together software, security, infrastructure, and delivery.
              </p>
              <div className="hero-actions">
                <a className="hero-primary" href="#journey">
                  Explore my journey <span aria-hidden="true">↓</span>
                </a>
                <a className="hero-secondary" href="#toward">
                  What I’m building
                </a>
                <a className="hero-secondary" href="#contact">
                  Connect with me
                </a>
              </div>
              <p className="portrait-location">Based in Alpharetta, Georgia</p>
            </div>
          </div>
        </section>

        <section id="journey" className="about section">
          <div className="wrap journey-intro">
            <p className="eyebrow">01 / MY JOURNEY</p>
            <h2>
              This is the evolution of how I think —
              <br />
              <span>not a list of jobs.</span>
            </h2>
            <p className="journey-thread">
              On-prem → Cloud → Modern engineering → AI-assisted engineering → AI systems. The transitions matter more
              than the tools.
            </p>
          </div>

          <ol className="wrap journey-rail" aria-label="The continuous path">
            {journeyStages.map((stage) => (
              <li key={stage.title} className={stage.key ? 'is-key' : undefined}>
                <h3>{stage.title}</h3>
                <p className="journey-lesson">{stage.lesson}</p>
                {stage.text ? <p>{stage.text}</p> : null}
                {stage.using ? (
                  <p className="journey-split">
                    <span>Using AI</span> {stage.using.join(' · ')}
                  </p>
                ) : null}
                {stage.building ? (
                  <p className="journey-split">
                    <span>Building AI</span> {stage.building.join(' · ')}
                  </p>
                ) : null}
                {stage.expand ? <JourneyPath steps={stage.expand} caption={stage.note} /> : null}
                {stage.note && !stage.expand ? <p className="journey-path-note">{stage.note}</p> : null}
                {stage.quote ? <p className="journey-quote">{stage.quote}</p> : null}
              </li>
            ))}
          </ol>

          <div className="wrap journey-close">
            <p>The technologies changed. The problems changed. My way of thinking had to change with them.</p>
            <p className="journey-still">And the journey is still going.</p>
          </div>
        </section>

        <section id="build" className="work wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / WHAT I BUILD</p>
              <h2>
                Healthcare ×
                <br />
                <span>Engineering × AI.</span>
              </h2>
            </div>
            <p>
              Four places the work
              <br />
              actually lives.
            </p>
          </div>
          <div className="pillars">
            {pillars.map((item) => (
              <article className="pillar" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="in-practice">
            <h3>In practice</h3>
            <p>Systems that already exist — not a catalog of every technology I have touched.</p>
            <div className="projects">
              {shipped.map((p) => (
                <article className="project case" key={p.number}>
                  <div className="project-top">
                    <span className="project-number">{p.number}</span>
                    <p className="eyebrow">{p.category}</p>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="project-name">{p.name}</p>
                  <p>
                    <span className="case-label">Problem</span>
                    {p.problem}
                  </p>
                  <p>
                    <span className="case-label">System</span>
                    {p.system}
                  </p>
                  <p className="case-decisions">
                    <span className="case-label">Decisions</span>
                    {p.decisions.join(' → ')}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="toward" className="vision section">
          <div className="wrap section-grid">
            <div>
              <p className="eyebrow">03 / WHAT I’M BUILDING TOWARD</p>
              <h2>
                Medical intelligence
                <br />
                <span>as a tool.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                Instead of building isolated medical models, I want to build a platform where specialized models become
                governed capabilities that AI systems can use.
              </p>
              <p>
                This is a technology vision — an exploration of architecture, not a clinical product and not a medical
                claim. Specialized models should become tools: callable, auditable, and available to a governed layer
                that already understands the application, the data, and the person asking.
              </p>
            </div>
          </div>
          <figure className="wrap intel-figure is-arch">
            <figcaption className="visually-hidden">
              Medical data feeds specialized models for MRI, EKG/ECG, EEG, and other modalities. An AI or small language
              model layer reaches those models through MCP and other governed tools, then into applications and agents.
            </figcaption>
            <div className="intel-layer">Medical data</div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-layer">Specialized models</div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-models">
              <div>
                <strong>MRI</strong>
              </div>
              <div>
                <strong>EKG/ECG</strong>
              </div>
              <div>
                <strong>EEG</strong>
              </div>
              <div>
                <strong>Other</strong>
              </div>
            </div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-layer">AI / SLM layer</div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-layer">MCP / Governed tools</div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-layer">Applications / Agents</div>
          </figure>
        </section>

        <section id="experiments" className="experiments wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / CURRENT EXPERIMENTS</p>
              <h2>
                What I’m
                <br />
                <span>trying next.</span>
              </h2>
            </div>
            <p>
              These are experiments.
              <br />
              I will say so.
            </p>
          </div>
          <div className="experiment-grid">
            {experiments.map((item) => (
              <article className="experiment" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="believe" className="believe section">
          <div className="wrap section-grid">
            <div>
              <p className="eyebrow">05 / WHAT I BELIEVE</p>
              <h2>
                Things I
                <br />
                <span>believe.</span>
              </h2>
            </div>
            <ol className="beliefs">
              {beliefs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="skills wrap section">
          <div className="section-grid">
            <div>
              <p className="eyebrow">06 / THE TOOLS</p>
              <h2>
                Enough to start
                <br />
                <span>a conversation.</span>
              </h2>
            </div>
            <div>
              <div className="skill-row">
                <h3>Engineering</h3>
                <p>.NET · C# · Python · Java · React · Next.js</p>
              </div>
              <div className="skill-row">
                <h3>Cloud</h3>
                <p>AWS · Azure · Docker · Terraform</p>
              </div>
              <div className="skill-row">
                <h3>AI</h3>
                <p>LLMs · RAG · Hybrid retrieval · Agents · LangGraph · Vector search</p>
              </div>
              <div className="skill-row">
                <h3>Data</h3>
                <p>PostgreSQL · pgvector · APIs · Healthcare data</p>
              </div>
              <div className="skill-row">
                <h3>Education</h3>
                <p>
                  Bachelor of Engineering, Electronics and Communication
                  <br />
                  Diploma, Electronics & Communication Engineering
                  <br />
                  <span>Anna University</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="who" className="who section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">07 / WHO AM I?</p>
                <h2>
                  Beyond
                  <br />
                  <span>the code.</span>
                </h2>
              </div>
              <p>
                Engineer
                <br />
                → person.
              </p>
            </div>
            <div className="beyond-grid">
              <article>
                <h3>Nature & photography</h3>
                <p>
                  I love photographing nature and people — especially moments that feel real rather than staged.
                </p>
              </article>
              <article>
                <h3>Cricket</h3>
                <p>
                  Cricket has always been more than a sport to me. Strategy, patience, pressure, and knowing when to
                  attack.
                </p>
              </article>
              <article>
                <h3>Bikes</h3>
                <p>Long rides, open roads, and the freedom to simply keep moving.</p>
              </article>
            </div>
            <div className="who-essays">
            <div className="who-values">
              <h3>Two languages, two windows</h3>
              <p>
                Tamil is my mother tongue. It is the language through which I first learned to understand the world — my
                roots, my culture, relationships, emotions, and the meaning behind words.
              </p>
              <p>
                As I grew, I began to realize that language is more than a way of communicating. It shapes how we think.
                Tamil gave me a foundation to question, connect ideas, understand meaning, and look at things from
                different perspectives. Even today, when I learn something new in technology, I often find myself trying
                to understand the idea in the simplest terms first — something I believe was shaped by the language I
                grew up with.
              </p>
              <p>
                English came into my life through my father and through my journey. In many ways, it became the language
                that opened another window for me. Through English, I discovered technology, books, engineering, new
                ideas, and a world far beyond the place where I started.
              </p>
              <p className="who-quote display-line">Tamil gave me my roots, while English gave me wings.</p>
              <p className="roots-wings">
                <span>Tamil → roots → thinking → understanding</span>
                <span>English → learning → technology → the wider world</span>
              </p>
              <p>I carry both with me. Roots + wings.</p>
              <p>
                And I will always have gratitude for the land that has given me opportunities, experiences, friendships,
                and lessons along the way. Wherever life takes me, I want to remain true to where I come from, respect
                the places and people that have shaped me, and never forget the journey that brought me here.
              </p>
              <p>
                These two languages are not simply part of my identity. They are part of how I think, learn, build, and
                see the world.
              </p>
            </div>
            <div className="who-values">
              <h3>The people who shaped me</h3>
              <p className="who-quote">
                My father taught me something simple: be honest, speak the truth, and keep fighting until the end —
                whether you win or lose.
              </p>
              <p>
                Winning or losing is secondary. What matters is having the courage to stand by what you believe is
                right.
              </p>
              <p>
                My brother has been an important part of my journey too, sharing many of life’s good moments with me.
                Some relationships don’t need many words; they become part of the story simply by being there through
                the years.
              </p>
              <p>
                And there is one very special person in my life who has stood beside me through everything — my wife.
              </p>
              <p>
                She motivates me when I need it, corrects me when I’m wrong, and somehow manages to absorb even my worst
                moments and anger with patience. She has been there through the difficult days, the uncertain moments,
                the changes, and the growth.
              </p>
              <p>
                She has helped me become better, but more importantly, she has helped me become more myself.
              </p>
              <p>
                The people closest to me have shaped far more than my career. They have shaped how I think, how I treat
                people, how I handle failure, and what I choose to stand for.
              </p>
              <p className="who-last">That is a part of who I am that no résumé can really capture.</p>
            </div>
            </div>
          </div>
        </section>

        <section id="ask" className="ask wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">08 / ASK ME ABOUT</p>
              <h2>
                Ask me
                <br />
                <span>about…</span>
              </h2>
            </div>
          </div>
          <ul className="ask-list" aria-label="Topics to ask Albert about">
            {askAbout.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>
              Building at the intersection
              <br />
              <span>of healthcare, cloud & AI.</span>
            </h2>
            <p>
              I’m interested in working with teams who need useful systems taken from an idea to something people can
              rely on.
            </p>
            <div className="contact-links">
              <a href="mailto:albert.arokiyasouridass1985@gmail.com">
                Email me <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/albert-arokiya-souridass-ece" target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/ALBE1405" target="_blank" rel="noopener noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <span>Albert Arokiyasouridass</span>
        <span>Healthcare × Engineering × AI</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
