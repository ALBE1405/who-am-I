export const shipped = [
  {
    id: 'document-intelligence',
    number: '01',
    category: 'APPLIED AI',
    title: 'Turning unstructured information into grounded answers.',
    name: 'Document Intelligence',
    path: ['Documents', 'Knowledge', 'Chat · Search · Compare · Editor'],
    problem:
      'Enterprise documents that cannot become answers unless the evidence is visible, the reader is allowed to see it, and the original file is left untouched.',
    system:
      'A multi-tenant knowledge layer. One pipeline compiles documents into structured knowledge. Chat, search, compare, and editing all read from that same layer — with citations. Pipeline outputs can be rebuilt. Human corrections stay authoritative.',
    decisions: [
      'Authorization-first retrieval',
      'Hybrid rank · RRF',
      'Rebuildable pipeline',
      'Human corrections stay authoritative',
      'Abstain when evidence is weak',
    ],
  },
  {
    id: 'medical-record-retrieval',
    number: '02',
    category: 'HEALTHCARE DATA',
    title: 'Connecting medical records at scale.',
    name: 'Medical Record Retrieval',
    problem:
      'Records that have to move across provider networks without losing the request, the file, or the audit trail.',
    system:
      'A Django and Next.js platform for the request lifecycle — APIs, portals, file exchange, and tenant-aware delivery on AWS.',
    decisions: ['Request lifecycle', 'Celery', 'Tenant feature flags', 'Secure exchange'],
  },
  {
    id: 'clinical-audit',
    number: '03',
    category: 'CLINICAL OPERATIONS',
    title: 'Bringing clarity to complex reviews.',
    name: 'Clinical Audit & Claims Review',
    problem: 'Hospital and insurance audit teams working through dense review work that has to stay traceable.',
    system:
      'A .NET Core application on Azure for intake, claims review, healthcare integrations, and structured audit logging.',
    decisions: ['.NET Core', 'Azure', 'Healthcare integrations', 'Audit logging'],
  },
  {
    id: 'on-device-field-inference',
    number: '04',
    category: 'ON-DEVICE AI',
    title: 'Running the model where the network cannot go.',
    name: 'On-device Field Inference',
    path: ['Phone', 'Muse Glimmer · Qwen', 'Offline answers'],
    problem:
      'Aerospace work happens on the line, in the hangar, and in places where a connection is the exception — and where sending operational context to a hosted model is the wrong default.',
    system:
      'A phone-side inference layer I have been exploring. Muse Glimmer and Qwen run locally on the device. The model, the prompt, and the answer stay on the phone. No round trip. No internet required.',
    decisions: [
      'Inference on the phone, not in the cloud',
      'Muse Glimmer and Qwen as the local models',
      'Offline-first — works with the radio off',
      'Operational context never leaves the device',
      'Understand the inference layer, not only the prompt',
    ],
  },
];

export const pillars = [
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

export const experiments = [
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

export const beliefs = [
  'Build for reality, not demos.',
  'AI should solve measurable problems, not exist because it is fashionable.',
  'Keep systems simple until complexity earns its place.',
  'Understand the whole system, not just the code.',
  'Good architecture balances technology, people, cost, security, and delivery.',
  'Stay curious.',
  'Be honest about what you know — and what you don’t.',
];

export type JourneyStage = {
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

export const journeyStages: JourneyStage[] = [
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
    quote:
      'I learned to choose the technology based on the problem rather than forcing every problem into the technology I already knew.',
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
    text: 'Alongside hosted models, I experiment with Muse Glimmer and Qwen — running and understanding the inference layer rather than treating the model as a black box. That includes running them locally on a phone, offline, without a network.',
    quote:
      'Sometimes the right engineering decision is a managed model. Sometimes understanding and controlling the model infrastructure matters.',
    building: ['Qwen', 'Muse Glimmer'],
    key: true,
  },
  {
    title: 'Medical intelligence',
    lesson: 'Exploring what comes next',
    text: 'Specialized models as governed capabilities — a platform idea, not a clinical product.',
  },
];

export const skillCatalog = [
  {
    id: 'engineering',
    label: 'Engineering',
    title: 'Engineering, connected to real work.',
    description: 'The languages and frameworks I use to build applications and services.',
    skills: ['.NET', 'C#', 'Python', 'Java', 'React', 'Next.js'],
  },
  {
    id: 'cloud',
    label: 'Cloud',
    title: 'Cloud, kept dependable.',
    description: 'How those systems are hosted, deployed, and operated.',
    skills: ['AWS', 'Azure', 'Docker', 'Terraform'],
  },
  {
    id: 'ai',
    label: 'AI',
    title: 'AI, connected to a real problem.',
    description: 'The layer I use when a problem needs retrieval, reasoning, or assistance.',
    skills: [
      'LLMs',
      'RAG',
      'Hybrid retrieval',
      'Agents',
      'LangGraph',
      'Vector search',
      'On-device inference',
      'Muse Glimmer',
      'Qwen',
    ],
  },
  {
    id: 'data',
    label: 'Data',
    title: 'Data, where the truth lives.',
    description: 'Where the truth lives, and how it moves between systems.',
    skills: ['PostgreSQL', 'pgvector', 'APIs', 'Healthcare data'],
  },
];

export const skillGroups = skillCatalog.map((group) => ({
  title: group.label,
  text: group.description,
  tools: group.skills.join(' · '),
}));

export const constellationSkills = ['.NET', 'Python', 'React', 'AWS', 'Azure', 'Qwen'];

export const skillCount = skillCatalog.reduce((sum, group) => sum + group.skills.length, 0);

export const resumeFile = 'Albert-Arokiyasouridass-resume.pdf';
