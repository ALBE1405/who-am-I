import { type CSSProperties } from 'react';
import { customers, type Customer } from '../data/customers';
import { AnimatedScene } from './AnimatedScene';

function CustomerLogo({ customer }: { customer: Customer }) {
  const initials = customer.name.split(/\s+|\s*\/\s*/).map(part => part[0]).join('').slice(0, 3);
  return <span className="customer-logo customer-logo-initials" aria-hidden="true">{initials}</span>;
}

export function CustomerExperience() {
  return <section className="section customer-experience light-section" aria-labelledby="customers-heading" id="customers">
    <div className="container">
      <div className="customer-heading">
        <div data-reveal>
          <span className="eyebrow"><span className="eyebrow-dot" />Customer experience</span>
          <h2 id="customers-heading">Engineering across<br /><span className="accent-text">great companies.</span></h2>
        </div>
        <div className="customer-introduction" data-reveal>
          <span className="customer-count" aria-hidden="true">12<span>companies</span></span>
          <p>Customers I've worked with throughout my engineering journey. Different teams and challenges, with the same care for building useful software.</p>
        </div>
      </div>
      <ul className="customer-grid" aria-label="Customers I have worked with">
        {customers.map((customer, index) => <li key={customer.file} style={{ '--customer-delay': `${index % 4 * 75}ms` } as CSSProperties}>
          <AnimatedScene className="customer-reveal">
            <div className="customer-card">
              <span className="customer-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="customer-mark"><CustomerLogo customer={customer} /></div>
              <span className="customer-name" aria-hidden="true">{customer.name}</span>
            </div>
          </AnimatedScene>
        </li>)}
      </ul>
      <div className="customer-footnote" aria-hidden="true"><span className="customer-line" /><span>Experience, connected.</span><span className="customer-line" /></div>
    </div>
  </section>;
}
