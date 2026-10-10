import { projects } from '../data/portfolio';
import { SectionHeading } from '../components/ui';
import { ProjectCard } from '../components/ProjectCard';
import { ContactBanner } from '../components/ContactBanner';

const groups = [
  { id: 'applied-ai', name: 'Applied AI', subtitle: 'Research and engineering for evidence-grounded document intelligence.' },
  { id: 'healthcare-data', name: 'Healthcare data', subtitle: 'Secure medical record retrieval and exchange across provider networks.' },
  { id: 'clinical-operations', name: 'Clinical operations', subtitle: 'Traceable audit and claims review workflows for healthcare.' },
] as const;

export function Work() {
  return <>
    <section className="page-intro work-intro grid-texture"><div className="container"><span className="page-index" aria-hidden="true">01 / SELECTED WORK</span><SectionHeading as="h1" label="Healthcare · engineering · applied AI" title={<>Work that connects<br /><span className="accent-text">the dots.</span></>}>Selected work across document intelligence and healthcare platforms. Client names are confidential.</SectionHeading><nav className="category-nav" aria-label="Work sections">{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.name}<span>{String(projects.filter(p => p.category === group.name).length).padStart(2, '0')}</span></a>)}</nav></div></section>
    <div className="container work-groups">{groups.map(group => <section className="work-group" id={group.id} key={group.id}><div className="work-group-heading"><h2>{group.name}</h2><p>{group.subtitle}</p></div><div className="project-list">{projects.filter(project => project.category === group.name).map((project, i) => <ProjectCard key={project.id} project={project} detailed featured={group.id === 'applied-ai' && i === 0} />)}</div></section>)}</div>
    <section className="section work-note light-section"><div className="container"><span className="eyebrow">The broader journey</span><h2>From software engineering<br />to healthcare platforms.</h2><p>My career began in .NET application development, then grew through full-stack engineering, APIs, cloud systems, and healthcare technology. Today, I bring that system-level experience to applied AI.</p></div></section>
    <ContactBanner />
  </>;
}
