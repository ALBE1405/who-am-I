import { AudioLines, Boxes, Braces, CheckCheck, Cloud, Database, FileCode2, Network, Sparkles, Terminal, Users } from 'lucide-react';
import type { Skill, SkillSymbol } from '../data/skills';

export const skillSymbols = { sparkles: Sparkles, code: Braces, layers: Boxes, network: Network, database: Database, cloud: Cloud, check: CheckCheck, people: Users, terminal: Terminal, audio: AudioLines, file: FileCode2 };

export function SkillLogo({ skill, className = '' }: { skill: Skill; className?: string; eager?: boolean }) {
  const Icon = skillSymbols[skill.symbol as SkillSymbol];
  return <span className={`skill-logo ${className} has-symbol`} aria-hidden="true">
    <Icon size={28} strokeWidth={1.5} />
  </span>;
}
