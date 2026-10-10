import React from 'react';
import { Check, Network, Code2, FileText, Database, Users, AudioLines } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { AnimatedScene } from './AnimatedScene';

const graphNodes = [{ Icon: Code2, label: 'SOURCES' }, { Icon: Database, label: 'RETRIEVAL' }, { Icon: FileText, label: 'EVIDENCE' }, { Icon: Users, label: 'ANSWERS' }];

export function ProjectVisual({ type }: { type: Project['visual'] }) {
  if (type === 'graph') return <div className="project-visual visual-graph" aria-hidden="true">
    <span className="visual-label">DOCUMENTS → GROUNDED ANSWERS</span>
    <AnimatedScene className="knowledge-scene">
      <div className="knowledge-map">
        <svg className="knowledge-links" viewBox="0 0 400 240" fill="none"><g stroke="currentColor" strokeWidth="1.2" opacity=".3"><path d="M70 55Q145 55 200 120M70 185Q145 185 200 120M330 55Q255 55 200 120M330 185Q255 185 200 120" /><path d="M70 55V185M330 55V185" strokeDasharray="3 7" /></g><g className="knowledge-flow" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 140"><path d="M70 55Q145 55 200 120M70 185Q145 185 200 120M330 55Q255 55 200 120M330 185Q255 185 200 120" /></g></svg>
        <div className="knowledge-hub"><Database size={38} strokeWidth={1.4} /><span>RAG</span></div>
        {graphNodes.map(({ Icon, label }, index) => <div className={`knowledge-node node-${index}`} key={label}><Icon size={20} strokeWidth={1.4} /><span>{label}</span></div>)}
      </div>
      <span className="knowledge-caption">Evidence-grounded enterprise knowledge</span>
    </AnimatedScene>
  </div>;
  if (type === 'network') return <div className="project-visual visual-network" aria-hidden="true">
    <span className="visual-label">REQUEST → SECURE EXCHANGE</span>
    <svg viewBox="0 0 460 260"><g stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M230 130 85 62M230 130 85 203M230 130 375 62M230 130 375 203M85 62 85 203M375 62 375 203" /></g><g fill="var(--visual-node)" stroke="currentColor"><circle cx="230" cy="130" r="38" /><circle cx="85" cy="62" r="23" /><circle cx="85" cy="203" r="23" /><circle cx="375" cy="62" r="23" /><circle cx="375" cy="203" r="23" /></g><g fill="currentColor" fontFamily="monospace" textAnchor="middle" fontSize="11"><text x="230" y="134">RECORD</text><text x="85" y="66">REQUEST</text><text x="85" y="207">PROVIDER</text><text x="375" y="66">PORTAL</text><text x="375" y="207">AUDIT</text></g></svg>
  </div>;
  if (type === 'voice') return <div className="project-visual visual-voice" aria-hidden="true"><span className="visual-label">SPEECH → AI ASSISTANCE</span><div className="waveform">{[24,38,58,32,76,110,70,44,92,128,86,54,76,104,62,34,68,92,48,28,42,20].map((height, index) => <span key={index} style={{ height: `${height}px`, animationDelay: `${index * 70}ms` }} />)}</div><div className="visual-bottom"><AudioLines size={18} /><span>Raphael · Voice bot</span></div></div>;
  return <div className="project-visual visual-release" aria-hidden="true"><span className="visual-label">IDEA → WORKING SOFTWARE</span><div className="visual-symbol"><Network size={66} strokeWidth={1} /></div><div className="visual-steps">{['INTAKE', 'REVIEW', 'AUDIT'].map((step, i) => <React.Fragment key={step}><span>{i === 2 && <Check size={12} />}{step}</span>{i < 2 && <i />}</React.Fragment>)}</div></div>;
}
