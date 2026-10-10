import { useState } from 'react';
import { AudioLines, Boxes, Braces, CheckCheck, Cloud, Database, FileCode2, Network, Sparkles, Terminal, Users } from 'lucide-react';
import type { Skill, SkillSymbol } from '../data/skills';
import { useSite } from './SiteContext';

export const skillSymbols = { sparkles: Sparkles, code: Braces, layers: Boxes, network: Network, database: Database, cloud: Cloud, check: CheckCheck, people: Users, terminal: Terminal, audio: AudioLines, file: FileCode2 };

export function SkillLogo({ skill, className = '', eager = false }: { skill: Skill; className?: string; eager?: boolean }) {
  const { asset } = useSite();
  const [failed, setFailed] = useState(false);
  const Icon = skillSymbols[skill.symbol as SkillSymbol];
  const hasBrand = Boolean(skill.logo) && !failed;
  return <span className={`skill-logo ${className} ${hasBrand ? 'has-brand' : 'has-symbol'}`} aria-hidden="true">
    {hasBrand
      ? <img src={asset(`skill-icons/${skill.logo}.svg`)} width="28" height="28" alt="" loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />
      : <Icon size={28} strokeWidth={1.5} />}
  </span>;
}
