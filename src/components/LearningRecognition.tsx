import { GraduationCap } from 'lucide-react';
import { SectionHeading } from './ui';

export function LearningRecognition() {
  return <section id="education" className="section light-section grid-texture learning-recognition">
    <div className="container">
      <SectionHeading label="Education" title={<>A foundation in<br />engineering.</>} />
      <div className="academic-foundation" data-reveal>
        <div className="academic-heading"><GraduationCap size={30} strokeWidth={1.4} aria-hidden="true" /><h3>Academic foundation</h3></div>
        <p><strong>Bachelor of Engineering, Electronics & Communication Engineering</strong><span>Anna University</span></p>
        <p><strong>Diploma, Electronics & Communication Engineering</strong></p>
      </div>
    </div>
  </section>;
}
