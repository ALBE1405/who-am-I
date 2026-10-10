import { ArrowUpRight, Network, ScanLine, FileCheck2 } from 'lucide-react';
import { profile, featuredProjects, domains } from '../data/portfolio';
import { useSite } from '../components/SiteContext';
import { HomeHero } from '../components/HomeHero';
import { ButtonLink, SectionHeading, Star, WaveDivider } from '../components/ui';
import { ProjectCard } from '../components/ProjectCard';
import { Process } from '../components/Process';
import { ContactBanner } from '../components/ContactBanner';

export function Home() {
  const { url } = useSite();
  return <>
    <HomeHero />

    <section id="selected-work" className="section selected-work grid-texture"><div className="container">
      <div className="section-heading-row"><SectionHeading label="Selected work" title={<>Ideas, connected.<br />Solutions, built.</>}>AI projects alongside the healthcare platforms and workflows I build.</SectionHeading><a href={url('work')} className="text-link">All work <span className="count">05</span><ArrowUpRight size={20} aria-hidden="true" /></a></div>
      <div className="project-list">{featuredProjects.map((project, i) => <ProjectCard key={project.id} project={project} featured={i === 0} />)}</div>
    </div></section>

    <section className="section home-about accent-section"><div className="container home-about-grid">
      <div><span className="eyebrow">A little about me</span><h2>Engineering roots.<br />An AI mindset.</h2><Star /></div>
      <div><p className="large-copy">I build the connections that make AI useful.</p>
        <p>{profile.introduction}</p>
        <p>Since 2024, I have researched generative AI for document intelligence, including hybrid BM25 and vector retrieval, LangGraph workflows, and retrieval quality evaluation. My focus is making answers easier to ground and verify.</p>
        <ul className="about-ai-highlights" aria-label="Applied AI focus">
          <li><Network size={24} aria-hidden="true" /><span>Connected knowledge</span></li>
          <li><FileCheck2 size={24} aria-hidden="true" /><span>Evidence-grounded answers</span></li>
          <li><ScanLine size={24} aria-hidden="true" /><span>AI integration</span></li>
        </ul>
        <p>My healthcare work includes platforms supporting clinical audit and claims review across more than 4,000 hospitals.</p>
        <ButtonLink href={url('about')} variant="dark">Meet the person behind the work</ButtonLink>
      </div>
    </div><div className="container career-stats"><div><strong>17<span>+</span></strong><span>Years in software engineering</span></div><div><strong>4,000<span>+</span></strong><span>Hospitals across audit workflows</span></div><div><strong>2024</strong><span>AI document intelligence research began</span></div></div><WaveDivider fill="var(--paper)" /></section>

    <Process />

    <section className="section expertise-preview"><div className="container"><div className="section-heading-row"><SectionHeading label="Connected capabilities" title={<>Depth in engineering.<br />Breadth in perspective.</>} /><ButtonLink href={url('expertise')} variant="outline">Explore my expertise</ButtonLink></div><div className="capability-list">{[
      ['01', 'Enterprise engineering', '.NET, Python, React, APIs, and healthcare integrations.'],
      ['02', 'Applied AI & knowledge', 'Hybrid retrieval, citations, LangGraph, and document intelligence.'],
      ['03', 'Architecture & delivery', 'From discovery and design to secure production systems.'],
    ].map(([number, title, text]) => <a href={url('expertise')} className="capability-row" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><ArrowUpRight aria-hidden="true" /></a>)}</div><div className="domain-strip"><span>Selected focus areas</span>{domains.map(domain => <span key={domain}>{domain}</span>)}</div></div></section>
    <ContactBanner />
  </>;
}
