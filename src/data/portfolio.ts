export const profile = {
  name: 'Albert Arokiyasouridass',
  shortName: 'Albert',
  role: 'Healthcare Solutions Engineer',
  aiRole: 'AI Document Intelligence',
  organization: 'Relevantz Technology Services',
  location: 'Alpharetta, GA',
  email: 'albert.arokiyasouridass1985@gmail.com',
  phone: '+1-404-698-7471',
  linkedin: 'https://www.linkedin.com/in/albert-arokiya-souridass-ece/',
  github: 'https://github.com/ALBE1405/',
  resume: 'Albert-Arokiyasouridass-resume.pdf',
  introduction: 'Healthcare Solutions Engineer with 17+ years delivering secure, HIPAA-compliant software. I build medical record, patient intake, clinical audit, and FHIR workflows, and research AI document intelligence with hybrid retrieval and evidence-grounded answers.',
};

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Applied AI' | 'Healthcare data' | 'Clinical operations';
  stage: string;
  duration?: string;
  description: string;
  contribution: string[];
  technologies: string[];
  visual: 'graph' | 'release' | 'network' | 'voice';
}

export const projects: Project[] = [
  {
    id: 'knowledge-studio', number: '01', title: 'Knowledge Studio', category: 'Applied AI',
    stage: 'Independent platform · in development', visual: 'graph',
    description: 'A multi-tenant platform that compiles enterprise documents into structured knowledge, then serves Chat, Search, Compare, and a document editor from the same knowledge base.',
    contribution: [
      'Designed a layered architecture: thin FastAPI routes, separate ingestion, retrieval, serving, and reasoning services, and Celery workers for background processing.',
      'Connected uploads, local folders, S3, Google Drive, SharePoint, OneDrive, and Confluence through incremental, idempotent ingestion.',
      'Built authorization-first retrieval scoped to tenant and workspace access. Combined pgvector similarity with custom BM25-style lexical scoring and Reciprocal Rank Fusion (k=60), with metadata filters, citations, and abstention when evidence is weak.',
      'Kept original documents unchanged, made derived outputs rebuildable with lineage, and preserved human corrections across recompiles.',
      'Served grounded chat, search, compare, and editing from shared structured knowledge, with chunk-to-document citations and token usage tracking.',
    ],
    technologies: ['Python 3.11', 'FastAPI', 'React', 'PostgreSQL · pgvector', 'SQLAlchemy', 'Celery · Valkey', 'Docling', 'LiteLLM', 'Docker · Terraform'],
  },
  {
    id: 'knowledge-ontology-platform', number: '02', title: 'Knowledge Ontology & Reasoning Engine', category: 'Applied AI',
    stage: 'Knowledge graph · local LLM · offline service app', visual: 'graph',
    description: 'A crane-service knowledge platform that connects manuals to an editable ontology and Neo4j graph, retrieves cited document chunks, and explores both local LLM answers and offline field use.',
    contribution: [
      'Built document ingestion that extracts entities and relations, validates them against an editable domain ontology, and loads the resulting knowledge with provenance into Neo4j.',
      'Connected graph relationships to Azure AI Search results so relevant manual chunks can ground answers and link back to their source documents.',
      'Prototyped Muse Glimmer 30B as a locally hosted answer-writing model through llama.cpp, while keeping Azure retrieval and the managed Foundry path independently selectable.',
      'Built a Flutter and Dart service app around downloadable equipment knowledge packs stored in SQLite, allowing technicians to retrieve manual passages offline.',
      'Added a Qwen3 local inference path with llama_cpp_dart so the model can explain retrieved passages; model selection and on-device performance validation are still in progress.',
      'Created browser-based tools for ontology and domain management, document review, and knowledge-base administration.',
    ],
    technologies: ['Python', 'Streamlit', 'Neo4j', 'Azure AI Search', 'Muse Glimmer 30B', 'llama.cpp', 'Flutter · Dart', 'Qwen3 · llama_cpp_dart', 'SQLite'],
  },
  {
    id: 'raphael-voice-bot', number: '03', title: 'Raphael · Personal AI Assistant', category: 'Applied AI',
    stage: 'Personal AI operating system · active development', visual: 'voice',
    description: 'A personal AI operating system for chat and voice, project memory, morning reports, an AI news scout, and GitHub activity—all in a user-scoped application.',
    contribution: [
      'Built a browser voice runtime with wake-word handling, phrase buffering, turn gating, barge-in and echo control, recovery behavior, and talk or silent modes.',
      'Connected browser speech input to server-side OpenAI Whisper transcription and OpenAI text-to-speech responses, with short spoken chat replies.',
      'Implemented chat context from recent messages and user-scoped project memory, with intent routing for project status, scout, and memory actions.',
      'Added scheduled morning reports and an RSS-based AI news scout, with heuristic relevance ranking and written explanations of why an item matters.',
      'Integrated GitHub repository listing, event tracking, and daily snapshots; protected integration tokens with ASP.NET Data Protection.',
      'Structured the application as a modular .NET 9 monolith with React and TypeScript, PostgreSQL-backed data, Elasticsearch lexical memory search, and Hangfire jobs.',
    ],
    technologies: ['C# · .NET 9', 'ASP.NET Core', 'React 19 · TypeScript', 'Web Speech API', 'OpenAI Whisper · TTS', 'PostgreSQL · EF Core', 'Elasticsearch 8', 'Hangfire', 'GitHub API'],
  },
  {
    id: 'medical-record-retrieval', number: '04', title: 'Medical Record Retrieval', category: 'Healthcare data',
    stage: 'Healthcare platform · 2012–present', visual: 'network',
    description: 'A healthcare platform for managing medical record requests across provider networks, from submission through secure document exchange.',
    contribution: [
      'Architected retrieval and request-lifecycle workflows for payer, life sciences, and audit use cases.',
      'Delivered APIs, portals, file exchange, patient intake, facility discovery, and FHIR workflows.',
      'Supported production readiness in HIPAA/PHI-governed environments with secure integrations and audit trails.',
    ],
    technologies: ['Python', 'Django', 'Next.js', 'AWS', 'REST APIs', 'FHIR'],
  },
  {
    id: 'clinical-audit', number: '05', title: 'Clinical Audit & Claims Review', category: 'Clinical operations',
    stage: 'Healthcare platform', visual: 'release',
    description: 'A secure audit and claims review platform supporting hospital and insurance audit workflows across more than 4,000 hospitals.',
    contribution: [
      'Implemented document intake and claims review workflows for RAC/MAC operations.',
      'Built healthcare integrations and structured audit logging to improve traceability.',
      'Delivered and supported the platform on Microsoft Azure.',
    ],
    technologies: ['C#', '.NET Core', 'Microsoft Azure', 'Healthcare integrations', 'Audit logging'],
  },
];

const featuredProjectIds = new Set(['knowledge-studio', 'knowledge-ontology-platform', 'raphael-voice-bot', 'medical-record-retrieval', 'clinical-audit']);
export const featuredProjects = projects.filter(project => featuredProjectIds.has(project.id));

export const expertise = [
  { id: 'ai', number: '01', title: 'AI & document intelligence', icon: 'sparkles', description: 'Build retrieval systems that connect language models to relevant documents and evidence.', tools: ['OpenAI', 'Claude', 'RAG', 'BM25', 'Hybrid retrieval', 'LangGraph', 'Vector search', 'MRR', 'RRF'], example: 'Knowledge Studio, document ingestion, retrieval evaluation, and grounded answers.' },
  { id: 'architecture', number: '02', title: 'Healthcare architecture & APIs', icon: 'layers', description: 'Translate healthcare workflows into secure applications, APIs, and integrations.', tools: ['.NET / ASP.NET Core', 'Python', 'Django', 'REST APIs', 'FHIR', 'HIPAA / PHI governance'], example: 'Medical record retrieval, patient intake, facility discovery, and secure exchange.' },
  { id: 'web', number: '03', title: 'Application engineering', icon: 'code', description: 'Build web applications and services across the stack, from user-facing workflows to backend APIs.', tools: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript', 'Node.js'], example: 'Healthcare applications and document intelligence interfaces.' },
  { id: 'knowledge', number: '04', title: 'Data & retrieval systems', icon: 'network', description: 'Structure and retrieve information so people can find useful, traceable answers.', tools: ['PostgreSQL', 'pgvector', 'OpenSearch', 'Embeddings', 'Vector databases', 'SQL'], example: 'Hybrid retrieval with lexical and semantic ranking.' },
  { id: 'cloud', number: '05', title: 'Cloud & delivery', icon: 'cloud', description: 'Take secure systems through integration, production readiness, deployment, and support.', tools: ['AWS', 'Microsoft Azure', 'Docker', 'Terraform', 'Azure DevOps', 'CI/CD'], example: 'Cloud-hosted healthcare platforms and secure document exchange.' },
  { id: 'quality', number: '06', title: 'Security & production readiness', icon: 'check', description: 'Keep regulated systems reliable, auditable, and ready for real-world use.', tools: ['HIPAA / PHI', 'RBAC', 'Audit logging', 'Monitoring', 'Structured logging', 'Production validation'], example: 'Traceable workflows and production launch support.' },
] as const;

export const process = [
  { number: '01', title: 'Discover', text: 'Understand the people, business goals, existing systems, and constraints before proposing a solution.' },
  { number: '02', title: 'Architect', text: 'Shape the system, define its contracts, and explain the decisions and tradeoffs clearly.' },
  { number: '03', title: 'Build & validate', text: 'Get hands-on. Use prototypes, working software, and tests to turn assumptions into evidence.' },
  { number: '04', title: 'Deliver & improve', text: 'Support integration, deployment, and real-world use. Learn from the way the system operates.' },
];

export const experience = [
  { period: '2012 — present', role: 'Solution Engineer — Healthcare Platforms', organization: 'Relevantz Technology Services (since January 2016)', detail: 'Embedded with a leading medical records provider, delivering secure retrieval, patient intake, facility discovery, clinical audit, claims review, and FHIR workflows. Client names are confidential.' },
  { period: '2009 — 2012', role: 'Software Engineer (Trainee to Engineer)', organization: 'OKS Prepress Services Pvt Ltd', detail: 'Built and supported C#, ASP.NET, ADO.NET, and SQL applications, growing from trainee to software engineer.' },
];

export const domains = ['Healthcare platforms', 'Medical records', 'Clinical audit', 'AI document intelligence'];
