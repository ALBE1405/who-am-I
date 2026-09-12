import './albert.css';

const shipped = [
  {
    number: '01',
    category: 'APPLIED AI',
    title: 'Turning unstructured information into grounded answers.',
    name: 'Knowledge Studio · Document Intelligence',
    text: 'A document intelligence platform that uses RAG, BM25, vector retrieval, and Reciprocal Rank Fusion so answers come from evidence the user is allowed to see. Google Drive, uploads, folders, and websites share one ingestion path. Chat, editing, and comparison stay tied to citations.',
    stack: ['Python / FastAPI', 'RAG · BM25 · pgvector', 'Authorization-aware retrieval'],
  },
  {
    number: '02',
    category: 'HEALTHCARE DATA',
    title: 'Connecting medical records at scale.',
    name: 'Medical Record Retrieval',
    text: 'A medical record retrieval platform with a Django backend and Next.js frontend. It moves requests across provider networks through APIs, portals, and file exchange, with Celery, tenant feature flags, and AWS behind the operational path.',
    stack: ['Python · Django', 'Next.js', 'Celery', 'AWS'],
  },
  {
    number: '03',
    category: 'CLINICAL OPERATIONS',
    title: 'Bringing clarity to complex reviews.',
    name: 'Clinical Audit & Claims Review',
    text: 'A .NET Core application for hospital and insurance audit teams. Document intake, claims review, healthcare integrations, and structured audit logging sit on Azure so the work stays traceable.',
    stack: ['C# · .NET Core', 'Microsoft Azure', 'Audit logging'],
  },
];

const pillars = [
  {
    title: 'Healthcare Platforms',
    text: 'Medical record retrieval, claims, audit, provider integrations, and the workflows that move healthcare data between organizations.',
  },
  {
    title: 'Cloud & Distributed Systems',
    text: 'Secure, scalable applications across Azure and AWS — APIs, background work, tenant-aware delivery, and the infrastructure those systems need to stay reliable.',
  },
  {
    title: 'Applied AI',
    text: 'RAG, hybrid retrieval, agents, intelligent document processing, and LLM orchestration that help people find answers they can trust.',
  },
  {
    title: 'AI Architecture',
    text: 'The layer between models, tools, enterprise data, and applications — so intelligence is governed, usable, and tied to a real problem.',
  },
];

const experiments = [
  {
    title: 'Medical AI',
    text: 'MRI toward structured inference, then interpretation an AI system can use. Still an experiment — not a product.',
  },
  {
    title: 'Agentic Engineering',
    text: 'Controlled multi-agent workflows for software development and knowledge work, with humans still accountable for the result.',
  },
  {
    title: 'Intelligent Retrieval',
    text: 'Hybrid search that combines lexical, semantic, and contextual retrieval so answers stay grounded in the right documents.',
  },
  {
    title: 'AI Infrastructure',
    text: 'LLMs, embeddings, vector databases, orchestration, and governed tool access — the unglamorous layer that makes the rest possible.',
  },
];

const beliefs = [
  'Build for reality, not demos.',
  'Keep systems simple until complexity earns its place.',
  'AI should solve measurable problems, not exist because it is fashionable.',
  'Understand the whole system, not just the code.',
  'Stay curious. Keep learning.',
  'Be honest about what you know — and what you don’t.',
];

const timeline = [
  { era: '2009', title: 'Software engineering', detail: 'My career started here. .NET and enterprise applications — learning to ship software that other people depend on.' },
  { era: '2015', title: 'Full-stack engineering', detail: 'Web, Java, Angular, APIs. Owning more of the path from the screen to the database.' },
  { era: 'Cloud', title: 'Distributed systems', detail: 'Cloud migration, healthcare platforms, and the infrastructure that keeps them running.' },
  { era: 'Healthcare', title: 'Medical data', detail: 'Retrieval, audit, automation, and the operational reality of PHI and provider networks.' },
  { era: 'Today', title: 'AI engineering', detail: 'RAG, agents, LLMs, and medical intelligence — the next layer on top of systems I already understand.' },
];

const askAbout = [
  { label: 'Healthcare AI', href: '#toward' },
  { label: 'Medical record retrieval', href: '#build' },
  { label: 'RAG architecture', href: '#experiments' },
  { label: 'Agentic systems', href: '#experiments' },
  { label: 'Cloud architecture', href: '#build' },
  { label: '.NET evolution', href: '#journey' },
  { label: 'Building AI products', href: '#toward' },
  { label: 'Cricket', href: '#who' },
  { label: 'Photography', href: '#who' },
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
              <p className="eyebrow">HEALTHCARE ENGINEERING → CLOUD → AI</p>
              <h1 id="intro">
                Albert<span className="hero-surname">Arokiyasouridass</span>
              </h1>
              <p className="portrait-lead">
                I build systems that turn complex healthcare data, workflows, and domain knowledge into intelligent,
                usable software.
              </p>
              <p className="portrait-description">
                My journey started with classic .NET. Over the years, I moved from building applications to understanding
                the systems behind them — cloud, security, infrastructure, data, and delivery. Today, I build cloud
                applications and practical AI, bringing those pieces together to solve real problems.
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
          <div className="wrap section-grid">
            <div>
              <p className="eyebrow">01 / MY JOURNEY</p>
              <h2>
                Code → Cloud →
                <br />
                Healthcare →
                <br />
                <span>AI.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">I started my career writing software.</p>
              <p>
                Over time, I became increasingly interested in what happens beyond the code — how applications interact
                with infrastructure, data, security, users, and the real-world problems they are supposed to solve.
              </p>
              <p>
                That led me from traditional .NET development into full-stack engineering, cloud platforms, and
                eventually healthcare technology — and into taking responsibility for how an entire system is built,
                secured, delivered, and kept running.
              </p>
              <p>
                Today, I’m exploring the next layer: AI systems that can reason over domain knowledge, orchestrate
                specialized capabilities, and help people make better decisions.
              </p>
            </div>
          </div>
          <ol className="wrap timeline">
            {timeline.map((item) => (
              <li key={item.era}>
                <p className="timeline-era">{item.era}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
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
                <article className="project" key={p.number}>
                  <div className="project-top">
                    <span className="project-number">{p.number}</span>
                    <p className="eyebrow">{p.category}</p>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="project-name">{p.name}</p>
                  <p>{p.text}</p>
                  <ul className="tags" aria-label="Technologies">
                    {p.stack.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
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
                MRI, EKG/ECG, EEG, and the models that will follow should not sit in separate products. They should be
                tools — callable, auditable, and available to an orchestration layer that already understands the
                application, the data, and the person asking.
              </p>
            </div>
          </div>
          <figure className="wrap intel-figure">
            <figcaption className="visually-hidden">
              AI or a small language model sits above orchestration, which calls specialized MRI, EKG/ECG, and EEG models.
              Those models surface through MCP tools into applications and agents.
            </figcaption>
            <div className="intel-layer">AI / SLM</div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-layer">Orchestration</div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-models">
              <div>
                <strong>MRI</strong>
                <span>Model</span>
              </div>
              <div>
                <strong>EKG/ECG</strong>
                <span>Model</span>
              </div>
              <div>
                <strong>EEG</strong>
                <span>Model</span>
              </div>
            </div>
            <div className="intel-rule" aria-hidden="true" />
            <div className="intel-layer">MCP / Tools</div>
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
                <span>will not trade away.</span>
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
                The person
                <br />
                behind the engineer.
              </p>
            </div>
            <div className="beyond-grid">
              <article>
                <h3>Nature</h3>
                <p>
                  I love photographing nature — especially moments that feel real rather than staged. I am equally drawn
                  to people who are beautiful not only on the outside, but in the way they think, care, and live.
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
                <p>Long rides, open roads, and the freedom to simply keep moving. The road gives me a different kind of freedom.</p>
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
              <p className="who-quote">So, in a way, Tamil gave me my roots, while English gave me wings.</p>
              <p>I carry both with me.</p>
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
              <p>That is a part of who I am that no résumé can really capture.</p>
            </div>
            </div>
          </div>
        </section>

        <section className="ask wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">08 / ASK ME ABOUT</p>
              <h2>
                If we sit down,
                <br />
                <span>start here.</span>
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
              I’m interested in partnering with healthcare and AI teams to take useful systems from an idea to something
              people can rely on.
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
