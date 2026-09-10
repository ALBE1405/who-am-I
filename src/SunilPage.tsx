import { useEffect } from 'react';
import SunilCarousel from './SunilCarousel';
import './sunil.css';

const portrait = null as string | null;
const linkedIn = 'https://www.linkedin.com/in/sunil-thatta/';

const work = [
  {
    kicker: 'Customer Success',
    title: 'Creating long-term customer value.',
    copy: 'Customer success is a business function, not a help desk. The question is whether the partnership is healthier a year later: retention, loyalty, lifetime value, and whether the customer still wants to build with you. I treat those measures as seriously as delivery dates.',
  },
  {
    kicker: 'Strategic Partnerships',
    title: 'Connecting people, technology and business.',
    copy: 'Knowing a logo is not knowing a client. The work is understanding how they make money, who owns the outcome, and how executives, operators, and delivery teams see the same problem differently. Relationships have to live at more than one level of the organization.',
  },
  {
    kicker: 'Digital Transformation',
    title: 'Helping organizations navigate technology change.',
    copy: 'Transformation fails when it stays a slide. I help software companies and their customers move from intent to programs that leadership can actually run—innovation, data, mobile, and IT change that still makes sense after the kickoff meeting.',
  },
  {
    kicker: 'AI & Customer Experience',
    title: 'Exploring how AI can make business relationships smarter.',
    copy: 'I am not an AI engineer. I am interested in AI as a business capability: predicting churn, reading sentiment, and getting ahead of the customer. The technology only matters if it leads to a better human conversation, in time.',
  },
];

const perspectives = [
  {
    kicker: 'Customer Success',
    title: 'Why customer success is more than support.',
    copy: 'When customer success is aligned with company goals, it drives growth, loyalty, and profitability—not just closed tickets. The function needs clear KPIs: satisfaction, retention, net promoter score. It needs a lifetime-value mindset. And it needs a seat next to sales and product, so what customers are saying shapes the plan. Support answers the phone. Strategy changes the business.',
    href: 'https://www.linkedin.com/posts/sunil-thatta_customersuccess-customerexperience-strategy-activity-7316013431457820676-6Sdu',
  },
  {
    kicker: 'Artificial Intelligence',
    title: 'Where AI meets the customer experience.',
    copy: 'There is a moment every customer leader knows: the sinking feeling that an account is about to leave. I have been writing about how AI can help notice that earlier—sentiment, predictive churn, a signal before the cancellation email. It is not about replacing judgment. It is about giving people time to show up, listen, and keep a relationship that was still worth keeping.',
    href: 'https://www.linkedin.com/posts/sunil-thatta_customersuccess-ai-sentimentanalysis-activity-7308824608164503552-xrRz',
  },
  {
    kicker: 'Leadership',
    title: 'Building trust across organizations.',
    copy: 'It is not just about knowing the customer. It goes deeper: knowing the business they are trying to change, and staying in relationship with stakeholders who do not all sit in the same room. Answering the RFP is not the start of the work. The important questions come earlier, and trust is what lets you ask them.',
    href: 'https://www.linkedin.com/posts/relevantz_reelswithrelevantz-clientrelationships-activity-7490055284451692544-P-_g',
  },
];

const approach = [
  {
    step: '01',
    title: 'Business',
    copy: 'Start with how the client actually makes money, where they are under pressure, and what “success” would change. If you skip this, the technology will solve the wrong problem.',
  },
  {
    step: '02',
    title: 'People',
    copy: 'A client is never one buyer. Executives, operators, and the teams who live with the result all have to trust the path. Relationships that stay at the top of the org chart do not survive delivery.',
  },
  {
    step: '03',
    title: 'Technology',
    copy: 'Understand enough of the technology to ask better questions—before the RFP is written. Then keep the program aligned to the operating reality on the ground, not the demo.',
  },
  {
    step: '04',
    title: 'Partnership',
    copy: 'This is the join. Business, people, and technology only create value when someone holds the relationship through the hard middle of the work.',
  },
  {
    step: '05',
    title: 'Outcome',
    copy: 'Stay for the result: value realized, accounts retained, and a partnership that still makes sense after the launch applause fades.',
  },
];

const path = [
  {
    era: 'Early career',
    line: 'Technology',
    copy: 'The work started with how software actually gets built. That foundation still shapes how I talk with customers and with the teams who serve them.',
  },
  {
    era: 'Engineering',
    line: 'Building solutions',
    copy: 'At Sciberus I ran delivery for custom web, mobile, and cloud work. Programs had to ship. That is still the standard I hold partnerships to.',
  },
  {
    era: 'Leadership',
    line: 'Leading teams',
    copy: 'The job grew from running a project to leading people through it—including technical resources beside the account work.',
  },
  {
    era: 'Client partnerships',
    line: 'Understanding businesses',
    copy: 'At Relevantz I was asked to bring strategy, P&L, and digital transformation to a portfolio of Fortune 500 software companies. The work was no longer only delivery. It was the business problem underneath.',
  },
  {
    era: 'Customer success',
    line: 'Creating long-term value',
    copy: 'Director, then Senior Director, Customer Success and Client Partner. The measure became whether the account was healthier after the program, not only whether it launched.',
  },
  {
    era: 'Today',
    line: 'Technology + AI + relationships',
    copy: 'Vice President of Customer Success. The same bridge, at a different altitude: strategy, client outcomes, and how we show up for long-term partners—not only at the start of an engagement.',
  },
];

const quotes = [
  {
    quote:
      'Despite all the different challenges we faced delivering a groundbreaking and highly complex permissioned blockchain, the team came through and delivered a highly resilient platform. Sunil and his engineering team are, in my opinion, of the highest caliber.',
    name: 'Nick Jones',
    role: 'Client partner',
  },
  {
    quote:
      'Sunil is one of the best people I partnered with for offshore resource requirements. I highly recommend his expertise to anyone looking for an onsite/offshore support and development model. Sunil is an active listener and is cognizant of client requirements.',
    name: 'Suman Upadhyay',
    role: 'Delivery partner',
  },
];

export default function SunilPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Sunil Thatta | Technology. Relationships. Outcomes.';
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content') ?? '';
    meta?.setAttribute(
      'content',
      'Sunil Thatta is Vice President of Customer Success at Relevantz. He helps organizations turn technology partnerships into measurable business value.',
    );
    return () => {
      document.title = previousTitle;
      if (previousDescription) meta?.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav wrap">
        <a className="brand" href={`${import.meta.env.BASE_URL}sunil`}>
          Sunil<span className="brand-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#do">Work</a>
          <a href="#think">Approach</a>
          <a href="#perspective">Perspective</a>
          <a href="#path">Path</a>
          <a href="#next">
            Connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="portrait-hero sunil-hero" aria-labelledby="intro">
          {portrait ? (
            <img className="hero-photo" src={portrait} alt="Sunil Thatta" fetchPriority="high" width={900} height={1100} />
          ) : (
            <div className="hero-photo sunil-photo-hold" aria-hidden="true" />
          )}
          <div className="hero-shade" aria-hidden="true" />
          <div className="wrap portrait-content">
            <div className="portrait-copy">
              <p className="eyebrow">CUSTOMER SUCCESS · STRATEGIC PARTNERSHIPS · AI</p>
              <h1 id="intro">
                Hi, I’m Sunil.<span className="hero-surname">Thatta</span>
              </h1>
              <p className="portrait-lead">
                Technology
                <br />
                + people
                <br />
                + business.
              </p>
              <p className="portrait-description">
                I lead customer success for software businesses. I understand the technology. The differentiator is
                connecting companies with customers, stakeholders, and outcomes that last.
              </p>
              <div className="hero-actions">
                <a className="hero-primary" href="#perspective">
                  Explore my perspective <span aria-hidden="true">↗</span>
                </a>
                <a className="hero-secondary" href={linkedIn} target="_blank" rel="noopener noreferrer">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="portrait-location">Based in Alpharetta, Georgia · Georgia Tech MBA</p>
            </div>
          </div>
        </section>

        <section id="do" className="about section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / WHAT I ACTUALLY DO</p>
                <h2>
                  Turning relationships
                  <br />
                  <span>into outcomes.</span>
                </h2>
              </div>
              <p>
                I understand the technology. What I am hired for is the space between a technology company and the
                customer who has to live with the result.
              </p>
            </div>
            <SunilCarousel label="What I actually do" count={work.length}>
              {work.map((item, i) => (
                <article className="project" key={item.kicker}>
                  <div className="project-top">
                    <span className="project-number">0{i + 1}</span>
                    <p className="eyebrow">{item.kicker}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </SunilCarousel>
          </div>
        </section>

        <section id="think" className="work wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / HOW SUNIL THINKS</p>
              <h2>
                The bridge.
                <br />
                <span>Business. People. Technology. Outcome.</span>
              </h2>
            </div>
            <p>
              Client relationships go deeper than a logo. They require understanding the business and staying with
              stakeholders across the organization. This is the sequence I come back to.
            </p>
          </div>
          <SunilCarousel label="How Sunil thinks" count={approach.length}>
            {approach.map((item) => (
              <article className="sunil-bridge-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </SunilCarousel>
        </section>

        <section id="perspective" className="about section">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / PERSPECTIVE</p>
                <h2>
                  What he believes.
                  <br />
                  <span>From public writing.</span>
                </h2>
              </div>
              <p>
                These are ideas I have already put in public. The page gives you the argument. LinkedIn is there if you
                want the original conversation.
              </p>
            </div>
            <div className="projects">
              {perspectives.map((item) => (
                <article className="project" key={item.title}>
                  <p className="eyebrow">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <a className="text-link" href={item.href} target="_blank" rel="noopener noreferrer">
                    Continue on LinkedIn →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="path" className="experience section">
          <div className="wrap section-grid">
            <div>
              <p className="eyebrow">05 / PATH</p>
              <h2>
                A career built
                <br />
                <span>around transformation.</span>
              </h2>
            </div>
            <div>
              {path.map((item) => (
                <article className="job" key={item.era}>
                  <p className="role">{item.era}</p>
                  <h3>{item.line}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
              <details className="sunil-history">
                <summary>Employment history</summary>
                <p>Vice President, Customer Success — Relevantz, Atlanta, 2025–present</p>
                <p>Senior Director / Director, Customer Success · Client Partner — Relevantz, 2019–2025</p>
                <p>Technical Project Manager — Sciberus, Atlanta, earlier career</p>
                <p>MBA — Georgia Institute of Technology</p>
              </details>
            </div>
          </div>
        </section>

        <section className="skills wrap section">
          <div className="section-grid">
            <div>
              <p className="eyebrow">06 / BEYOND THE BOARDROOM</p>
              <h2>
                Leadership isn’t limited
                <br />
                <span>to the workplace.</span>
              </h2>
            </div>
            <div>
              <div className="skill-row">
                <h3>Cricket</h3>
                <p>
                  Cricket has been a long passion. A long innings asks for patience. You read the field. You know that
                  partnerships win matches, not a single flashy shot. That way of paying attention is not so different
                  from staying with a customer through a hard quarter—when the scoreboard is ugly and the work is still
                  worth doing.
                </p>
              </div>
              <div className="skill-row">
                <h3>Youth soccer</h3>
                <p>
                  I volunteer as a youth soccer coach. Leadership there is not a title. It is teaching, patience, and
                  showing up for people who are still becoming who they will be. The sideline is a useful reminder that
                  the next generation does not care about your last QBR. They care whether you came back this week.
                </p>
              </div>
              <div className="skill-row">
                <h3>Georgia Tech</h3>
                <p>
                  Once a Yellow Jacket, always a Yellow Jacket. I completed my MBA at the Georgia Institute of
                  Technology. GT is where rigorous thinking and practical problem-solving met. I still show up for the
                  Institute—game days, the network, and the standard it set for how I work with customers and teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="work wrap section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">07 / FROM PARTNERS</p>
              <h2>
                What they noticed
                <br />
                <span>was the partnership.</span>
              </h2>
            </div>
            <p>
              The through-line is not slogans. It is client requirements, engineering leadership, complex delivery, and
              someone who listens.
            </p>
          </div>
          <div className="sunil-quotes">
            {quotes.map((item) => (
              <blockquote key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  {item.name} · {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="next" className="contact">
          <div className="wrap">
            <p className="eyebrow">LET’S TALK ABOUT WHAT’S NEXT</p>
            <h2>
              Technology is changing.
              <br />
              <span>The organizations that connect it to customers will lead.</span>
            </h2>
            <p>
              Customer expectations are changing. The organizations that connect those two facts—new technology and
              real customer outcomes—will lead. I would like to talk with people who are in that work: customer success,
              technology partnerships, and taking a relationship from a contract to lasting value.
            </p>
            <div className="contact-links">
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>Sunil Thatta</span>
        <span>Technology changes. Relationships create lasting value.</span>
        <a href="#intro">Back to top ↑</a>
      </footer>
    </>
  );
}
