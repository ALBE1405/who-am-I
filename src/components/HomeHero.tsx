import { ArrowDown } from 'lucide-react';
import { profile } from '../data/portfolio';
import { useSite } from './SiteContext';
import { ButtonLink, ResumeLink, SocialLinks, WaveDivider } from './ui';

export function HomeHero() {
  const { url, asset } = useSite();
  return <section className="hero hero-cinema accent-section" aria-labelledby="hero-heading">
    <div className="hero-background" aria-hidden="true"><span /><span /><span /></div>
    <div className="home-hero-media" aria-hidden="true"><img className="home-hero-image" src={asset('albert-hero.png')} alt="" width="1536" height="1024" fetchPriority="high" /></div>
    <div className="container hero-grid"><div className="hero-copy">
      <span className="eyebrow hero-intro"><span>Albert Arokiyasouridass</span><span className="hero-location">{profile.location}</span></span>
      <h1 id="hero-heading">Hi, I'm <span>Albert.</span></h1>
      <p className="hero-role">{profile.role}<br /><span>{profile.aiRole}</span></p>
      <p className="hero-description">I build systems that turn complex healthcare data, workflows, and domain knowledge into intelligent, usable software.</p>
      <div className="actions"><ButtonLink href={url('work')} variant="dark">Explore my work</ButtonLink><ResumeLink variant="outline" /></div>
      <div className="hero-social"><SocialLinks labels /><span className="hero-position">Solution Engineer<br />at Relevantz</span></div>
    </div></div>
    <div className="hero-bottom container"><a href="#selected-work">Scroll to explore<ArrowDown size={16} aria-hidden="true" /></a><span>Healthcare software from discovery to production</span></div>
    <WaveDivider fill="var(--background)" />
  </section>;
}
