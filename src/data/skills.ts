export type SkillSymbol = 'sparkles' | 'code' | 'layers' | 'network' | 'database' | 'cloud' | 'check' | 'people' | 'terminal' | 'audio' | 'file';
export interface Skill { id: string; name: string; logo?: string; symbol: SkillSymbol; aliases: string[] }
export interface SkillGroup { id: string; label: string; title: string; description: string; symbol: SkillSymbol; skills: Skill[] }

const brandMarks: Record<string, string> = {
  '.NET / ASP.NET Core': 'dotnet', 'C#': 'dotnet', Python: 'python', Claude: 'anthropic',
  React: 'react', 'Next.js': 'nextdotjs', Angular: 'angular', FastAPI: 'fastapi',
  Django: 'django', 'Node.js': 'nodedotjs', JavaScript: 'javascript', TypeScript: 'typescript',
  PostgreSQL: 'postgresql', OpenSearch: 'opensearch', Neo4j: 'neo4j', Streamlit: 'streamlit',
  Docker: 'docker', Terraform: 'terraform', LangGraph: 'langgraph', Celery: 'celery',
  Confluence: 'confluence', 'Google Drive': 'googledrive',
};
const skill = (name: string, symbol: SkillSymbol = 'code', aliases: string[] = []): Skill => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''), name, symbol, aliases, logo: brandMarks[name],
});

// Skills listed on Albert's current portfolio and resume.
export const skillGroups: SkillGroup[] = [
  { id: 'ai', label: 'AI & knowledge', title: 'Applied AI, grounded in evidence.', symbol: 'sparkles',
    description: 'Document intelligence, retrieval quality, and AI systems connected to real workflows.', skills: [
      skill('OpenAI', 'sparkles'), skill('Claude', 'sparkles'), skill('LLMs', 'sparkles'), skill('RAG', 'database'),
      skill('Hybrid retrieval', 'database'), skill('BM25', 'database'), skill('Vector search', 'database'),
      skill('LangGraph', 'network'), skill('AI agents', 'network'), skill('Embeddings', 'database'),
      skill('Mean Reciprocal Rank (MRR)', 'check'), skill('Reciprocal Rank Fusion (RRF)', 'network'),
      skill('Intelligent document processing', 'file'),
    ] },
  { id: 'backend', label: 'Languages & backend', title: 'The foundations behind the interface.', symbol: 'code',
    description: 'Application development, APIs, and the services behind healthcare workflows.', skills: [
      skill('C#'), skill('.NET / ASP.NET Core'), skill('Python'), skill('Django'), skill('FastAPI'),
      skill('Node.js'), skill('JavaScript'), skill('TypeScript'), skill('Java'), skill('REST APIs', 'network'),
      skill('Celery', 'terminal'), skill('Valkey', 'database'),
    ] },
  { id: 'web', label: 'Web & applications', title: 'Interfaces people can use.', symbol: 'layers',
    description: 'Full-stack web development across healthcare platforms and AI applications.', skills: [
      skill('React', 'code'), skill('Next.js', 'code'), skill('Angular', 'code'), skill('HTML & CSS', 'layers'),
    ] },
  { id: 'healthcare', label: 'Healthcare systems', title: 'Secure exchange for healthcare work.', symbol: 'network',
    description: 'Healthcare data exchange and regulated workflows, designed with security and traceability in mind.', skills: [
      skill('Medical record retrieval', 'file'), skill('Patient intake', 'people'), skill('Facility discovery', 'network'),
      skill('FHIR', 'network'), skill('HIPAA / PHI governance', 'check'), skill('Clinical audit & claims review', 'check'),
      skill('RBAC & audit logging', 'check'), skill('Google Drive', 'file'), skill('SharePoint', 'file'),
      skill('OneDrive', 'file'), skill('Confluence', 'file'), skill('Microsoft Graph', 'network'),
    ] },
  { id: 'data', label: 'Data & retrieval', title: 'Information, with context.', symbol: 'database',
    description: 'Retrieval and data technologies used in document intelligence and healthcare systems.', skills: [
      skill('PostgreSQL', 'database'), skill('pgvector', 'database'), skill('OpenSearch', 'database'),
      skill('Vector databases', 'database'), skill('SQL', 'database'),
      skill('Neo4j', 'network'), skill('Docling', 'file'), skill('Azure AI Search', 'database'),
      skill('Azure AI Foundry', 'sparkles'),
    ] },
  { id: 'cloud', label: 'Cloud & delivery', title: 'Built to run in the real world.', symbol: 'cloud',
    description: 'Cloud platforms and delivery practices for secure, reliable production systems.', skills: [
      skill('AWS', 'cloud'), skill('Microsoft Azure', 'cloud'), skill('Docker', 'cloud'), skill('Terraform', 'cloud'),
      skill('Azure DevOps', 'terminal'), skill('CI/CD', 'check'), skill('Monitoring & structured logging', 'check'),
    ] },
];

export const allSkills = skillGroups.flatMap(group => group.skills);
export const skillCount = allSkills.length;
export const featuredSkills = ['React', 'Python', 'AWS', 'Claude', 'RAG', 'FHIR'].map(name => allSkills.find(item => item.name === name)!);
export function filterSkills(category: string, query: string) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return skillGroups.filter(group => category === 'all' || group.id === category).map(group => ({ ...group,
    skills: group.skills.filter(item => {
      const text = [item.name, ...item.aliases, group.label, group.title].join(' ').toLocaleLowerCase();
      return terms.every(term => text.includes(term));
    }),
  })).filter(group => group.skills.length > 0);
}
