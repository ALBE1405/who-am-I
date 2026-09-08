const projects = [
  {
    number: '01',
    category: 'APPLIED AI · INDEPENDENT WORK',
    title: 'Turning documents into grounded answers.',
    name: 'Knowledge Studio · Document Intelligence',
    description:
      'I built a document intelligence platform with RAG, combining BM25 lexical search and vector retrieval with reciprocal rank fusion. Tenant and workspace authorization checks run before retrieval. Google Drive connects through OAuth, with on-demand processing of relevant files; uploads, local folders, and website content use the same ingestion pipeline. Progressive indexing makes text searchable before embeddings finish, with optional OCR and table enrichment. Chat, editing, and comparison use retrieved evidence and citations, with configurable reranking support.',
    stack: ['Python / FastAPI', 'RAG · BM25 · pgvector', 'Google Drive OAuth', 'Authorization-aware retrieval'],
  },
  {
    number: '02',
    category: 'HEALTHCARE DATA EXCHANGE',
    title: 'Connecting medical records at scale.',
    name: 'Medical Record Retrieval',
    description:
      'I build and maintain a medical record retrieval platform with a Python and Django backend and a Next.js frontend. The platform supports secure request lifecycle management across healthcare provider networks, with REST APIs, portal workflows, and file-based integrations. Celery runs background tasks, while tenant-specific feature flags control which capabilities are enabled for each organization. My work also covers AWS infrastructure, secure document exchange, quality checks, audit trails, and the security and deployment processes that keep the application running.',
    stack: ['Python · Django', 'Next.js', 'Celery', 'Tenant feature flags', 'AWS · REST APIs'],
  },
  {
    number: '03',
    category: 'CLINICAL AUDIT & CLAIMS',
    title: 'Bringing clarity to complex reviews.',
    name: 'Clinical Audit & Claims Review',
    description:
      'I helped build a .NET Core application for clinical audit and claims review, supporting hospital and insurance audit teams. The platform brings together secure document intake, claims review workflows, and integrations across organizations. Deployed on Microsoft Azure, it supports compliance traceability through structured audit logging, reporting, and operational dashboards. My work connects healthcare review processes with the application architecture and secure integrations needed to support day-to-day audit operations.',
    stack: ['C# · .NET Core', 'Microsoft Azure', 'Healthcare integrations', 'Audit logging'],
  },
];

const heroPhoto = `${import.meta.env.BASE_URL}albert-hero.png`;

export default function App() {
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
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">
            Contact <span aria-hidden="true">↗</span>
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
              <p className="eyebrow">SOFTWARE ENGINEERING · CLOUD · APPLIED AI</p>
              <h1 id="intro">
                Hi, I’m Albert.<span className="hero-surname">Arokiyasouridass</span>
              </h1>
              <p className="portrait-lead">
                From application code
                <br />
                to the whole system.
              </p>
              <p className="portrait-description">
                My journey started with classic .NET. Today, I build cloud applications and practical AI, bringing
                together software, security, infrastructure, and delivery.
              </p>
              <div className="hero-actions">
                <a className="hero-primary" href="#work">
                  Explore my work <span aria-hidden="true">↗</span>
                </a>
                <a className="hero-secondary" href="#about">
                  My journey <span aria-hidden="true">↓</span>
                </a>
              </div>
              <p className="portrait-location">Based in Alpharetta, Georgia</p>
            </div>
          </div>
        </section>
        <section id="about" className="about section">
          <div className="wrap section-grid">
            <div>
              <p className="eyebrow">01 / MY JOURNEY</p>
              <h2>
                From classic .NET
                <br />
                to cloud platforms
                <br />
                <span>and practical AI.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">I started my career building applications with classic .NET.</p>
              <p>
                As I grew, I joined teams modernizing those applications on newer .NET frameworks and moving on-premises
                systems to the cloud. Those experiences sparked my interest in understanding the whole application—from
                the code people use to the infrastructure that keeps it running.
              </p>
              <p>
                Along the way, I built a complete role-based access control system, developed new Java web applications,
                and worked extensively with Angular. I also built full-stack applications with Angular and Spring Boot,
                taking ownership of cloud infrastructure, deployment, and CI/CD pipelines using Jenkins. Later, my work
                expanded into Helm-based deployments and infrastructure provisioning with Terraform.
              </p>
              <p>
                More recently, I’ve worked with Python, Django, and Next.js while managing security, cloud servers,
                deployments, and ongoing operations. My journey has grown from writing application code to taking
                responsibility for how an entire system is built, secured, delivered, and maintained.
              </p>
              <p>Today, I bring that hands-on experience into building AI and document intelligence systems.</p>
            </div>
          </div>
        </section>
        <section id="work" className="work wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>
                Complex challenges.
                <br />
                <span>Practical solutions.</span>
              </h2>
            </div>
            <p>
              From nationwide healthcare workflows
              <br />
              to grounded AI document intelligence.
            </p>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.number}>
                <div className="project-top">
                  <span className="project-number">{p.number}</span>
                  <p className="eyebrow">{p.category}</p>
                </div>
                <h3>{p.title}</h3>
                <p className="project-name">{p.name}</p>
                <p>{p.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="experience section">
          <div className="wrap section-grid">
            <div>
              <p className="eyebrow">03 / EXPERIENCE</p>
              <h2>
                A foundation built
                <br />
                <span>through delivery.</span>
              </h2>
            </div>
            <div>
              <article className="job">
                <div className="job-meta">
                  <span>2012 — PRESENT</span>
                  <span>Alpharetta / Remote</span>
                </div>
                <h3>Relevantz Technology Services</h3>
                <p className="role">Forward Deployed / Solution Engineer · Healthcare Platforms</p>
                <p>
                  Customer-embedded engineering for a leading healthcare data connectivity company. I bridge operational
                  needs and technical delivery across provider, EHR, and national pharmacy ecosystems.
                </p>
                <p>
                  My work includes secure integrations, medical record platforms, cloud architecture, and guiding teams
                  through implementation and production releases in HIPAA and PHI contexts.
                </p>
              </article>
              <article className="job">
                <div className="job-meta">
                  <span>2009 — 2012</span>
                  <span>Chennai, India</span>
                </div>
                <h3>OKS Prepress Services</h3>
                <p className="role">Software Engineer</p>
                <p>
                  Progressed from trainee to software engineer, building and supporting solutions with C#, ASP.NET,
                  ADO.NET, and SQL—the foundation for my work in enterprise healthcare engineering.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="skills wrap section">
          <div className="section-grid">
            <div>
              <p className="eyebrow">04 / TOOLKIT & EDUCATION</p>
              <h2>
                The tools behind
                <br />
                <span>the work.</span>
              </h2>
            </div>
            <div>
              <div className="skill-row">
                <h3>Engineering</h3>
                <p>
                  C# · Java · Python · TypeScript · JavaScript · .NET / ASP.NET Core · Spring Boot · Django · REST APIs ·
                  React · Angular · Next.js
                </p>
              </div>
              <div className="skill-row">
                <h3>Cloud & delivery</h3>
                <p>
                  Microsoft Azure · AWS · Azure DevOps · Jenkins · Helm · Terraform · CI/CD · Role-based access control
                  · Monitoring · Structured logging
                </p>
              </div>
              <div className="skill-row">
                <h3>AI & document intelligence</h3>
                <p>
                  OpenAI · Claude · RAG · BM25 lexical search · Vector retrieval · Reciprocal rank fusion · pgvector ·
                  Document ingestion · OCR · Claude Code · Cursor
                </p>
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
        <section id="contact" className="contact">
          <div className="wrap">
            <p className="eyebrow">LET’S CONNECT</p>
            <h2>
              Building what’s next
              <br />
              <span>in healthcare AI.</span>
            </h2>
            <p>
              I’m interested in partnering with healthcare AI teams to run customer pilots and take products from proof
              of concept to reliable production.
            </p>
            <div className="contact-links">
              <a href="mailto:albert.arokiyasouridass1985@gmail.com">
                Email me <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/albert-arokiya-souridass-ece" target="_blank" rel="noopener noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <span>Albert Arokiyasouridass</span>
        <span>Healthcare engineering. Thoughtful AI.</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
