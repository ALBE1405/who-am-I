import type { ReactNode } from 'react';

const icons: Record<string, () => ReactNode> = {
  '.NET': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="3" fill="#512BD4" />
      <text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="700" fontFamily="Arial">
        .NET
      </text>
    </svg>
  ),
  'C#': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="3" fill="#68217A" />
      <text x="16" y="20" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Arial">
        C#
      </text>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4c-5 0-4.7 2.2-4.7 2.2V9h9.4V8s.2-4-4.7-4Z" fill="#3776AB" />
      <circle cx="13.2" cy="7" r="1" fill="#FFD43B" />
      <path d="M11.3 9v4.6S11 16 16 16s4.7-2.4 4.7-2.4V9H11.3Z" fill="#3776AB" />
      <path d="M16 28c5 0 4.7-2.2 4.7-2.2V23h-9.4v1s-.2 4 4.7 4Z" fill="#FFD43B" />
      <circle cx="18.8" cy="25" r="1" fill="#3776AB" />
      <path d="M20.7 23v-4.6S21 16 16 16s-4.7 2.4-4.7 2.4V23h9.4Z" fill="#FFD43B" />
    </svg>
  ),
  Java: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 6c3 4-2 5 0 8 3-2 5-5 3-8-3-1-4 0-3 0Z" fill="#E76F00" />
      <path d="M10 20c4 2 8 2 12 0-1 3-4 5-6 5s-5-2-6-5Z" fill="#5382A1" />
      <path d="M9 17c5 1.5 9 1.5 14 0" fill="none" stroke="#5382A1" strokeWidth="1.4" />
    </svg>
  ),
  React: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="2.2" fill="#61DAFB" />
      <ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 16 16)" />
      <ellipse cx="16" cy="16" rx="12" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(-60 16 16)" />
    </svg>
  ),
  'Next.js': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="12" fill="#111" />
      <path d="M13 11h2.2l4.8 7.4V11H22v10h-2.2L15 13.6V21H13V11Z" fill="#fff" />
    </svg>
  ),
  AWS: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M7 13 16 8l9 5v3l-9-5-9 5v-3Z" fill="#232F3E" />
      <path d="M8 22c4 3 12 3 16 0" fill="none" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Azure: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M14 6 7 24h6l7-18h-6Z" fill="#0089D6" />
      <path d="M18 14 13 24h12L22 14h-4Z" fill="#00A4EF" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="7" y="14" width="4" height="4" fill="#2496ED" />
      <rect x="12" y="14" width="4" height="4" fill="#2496ED" />
      <rect x="17" y="14" width="4" height="4" fill="#2496ED" />
      <rect x="12" y="9" width="4" height="4" fill="#2496ED" />
      <path d="M6 19c1 4 5 6 10 6s9-2 11-6H6Z" fill="#2496ED" />
    </svg>
  ),
  Terraform: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 7h6l6 4v6l-6-4V7Z" fill="#7B42BC" />
      <path d="M14 13h6l6 4v6l-6-4v-6Z" fill="#5C4EE5" />
      <path d="M14 21h6v6l-6-4v-2Z" fill="#4040B2" />
    </svg>
  ),
  PostgreSQL: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <ellipse cx="16" cy="16" rx="9" ry="11" fill="#336791" />
      <ellipse cx="16" cy="14" rx="4" ry="5" fill="#fff" opacity=".9" />
    </svg>
  ),
  pgvector: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="10" cy="16" r="3" fill="#336791" />
      <circle cx="22" cy="10" r="3" fill="#336791" />
      <circle cx="22" cy="22" r="3" fill="#336791" />
      <path d="M12.5 15 20 11M12.5 17 20 21" stroke="#336791" strokeWidth="1.5" />
    </svg>
  ),
  APIs: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 16h16M12 11l-5 5 5 5M20 11l5 5-5 5" fill="none" stroke="#174bd5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  'Healthcare data': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 7c-3 0-5 2.4-5 5.4 0 4.4 5 8.6 5 8.6s5-4.2 5-8.6C21 9.4 19 7 16 7Z" fill="#174bd5" />
      <path d="M16 12v6M13 15h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  LLMs: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="6" y="9" width="20" height="14" rx="4" fill="none" stroke="#174bd5" strokeWidth="1.6" />
      <path d="M11 15h10M11 19h7" stroke="#174bd5" strokeWidth="1.5" />
    </svg>
  ),
  RAG: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="13" cy="14" r="5" fill="none" stroke="#174bd5" strokeWidth="1.6" />
      <path d="M17 18 24 25" stroke="#174bd5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  'Hybrid retrieval': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="11" cy="16" r="4" fill="none" stroke="#174bd5" strokeWidth="1.5" />
      <circle cx="21" cy="16" r="4" fill="none" stroke="#174bd5" strokeWidth="1.5" />
      <path d="M15 16h2" stroke="#174bd5" strokeWidth="1.5" />
    </svg>
  ),
  Agents: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="12" r="4" fill="#174bd5" />
      <path d="M8 24c1.5-4 5-6 8-6s6.5 2 8 6" fill="none" stroke="#174bd5" strokeWidth="1.6" />
    </svg>
  ),
  LangGraph: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="8" cy="16" r="3" fill="#174bd5" />
      <circle cx="16" cy="8" r="3" fill="#174bd5" />
      <circle cx="24" cy="16" r="3" fill="#174bd5" />
      <circle cx="16" cy="24" r="3" fill="#174bd5" />
      <path d="M10.5 14 14 10.5M18 10.5 21.5 14M21.5 18 18 21.5M14 21.5 10.5 18" stroke="#174bd5" strokeWidth="1.2" />
    </svg>
  ),
  'Vector search': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 24 16 8l8 16" fill="none" stroke="#174bd5" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="2" fill="#174bd5" />
    </svg>
  ),
  'On-device inference': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="11" y="6" width="10" height="20" rx="2" fill="none" stroke="#174bd5" strokeWidth="1.6" />
      <circle cx="16" cy="22" r="1" fill="#174bd5" />
    </svg>
  ),
  'Muse Glimmer': () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 6 18 13l7 2-7 2-2 7-2-7-7-2 7-2Z" fill="#174bd5" />
    </svg>
  ),
  Qwen: () => (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="9" fill="none" stroke="#615CED" strokeWidth="2" />
      <path d="M20 20 25 25" stroke="#615CED" strokeWidth="2" strokeLinecap="round" />
      <text x="16" y="20" textAnchor="middle" fill="#615CED" fontSize="9" fontWeight="700" fontFamily="Arial">
        Q
      </text>
    </svg>
  ),
};

function Fallback({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <text x="16" y="20" textAnchor="middle" fill="#174bd5" fontSize="11" fontWeight="700" fontFamily="Arial">
        {name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}

export function SkillIcon({ name }: { name: string }) {
  const Icon = icons[name] ?? (() => <Fallback name={name} />);
  return (
    <span className="skill-logo">
      <Icon />
    </span>
  );
}
