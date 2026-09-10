import { useEffect, useState, type ReactNode } from 'react';

type SunilCarouselProps = {
  label: string;
  count: number;
  children: ReactNode[];
};

export default function SunilCarousel({ label, count, children }: SunilCarouselProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const sync = () => setVisible(mq.matches ? 1 : 2);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const last = Math.max(0, count - visible);

  useEffect(() => {
    setIndex((current) => Math.min(current, last));
  }, [last]);

  const go = (next: number) => {
    setIndex(Math.max(0, Math.min(last, next)));
  };

  return (
    <div className="sunil-carousel" style={{ ['--visible' as string]: String(visible) }}>
      <div className="sunil-carousel-row">
        <button
          type="button"
          className="sunil-carousel-btn"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
        <div className="sunil-carousel-stage" aria-roledescription="carousel" aria-label={label}>
          <div
            className="sunil-carousel-track"
            style={{ transform: `translateX(calc(-${index} * (100% / var(--visible))))` }}
          >
            {children.map((child, i) => {
              const inView = i >= index && i < index + visible;
              return (
                <div
                  className="sunil-carousel-slide"
                  key={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  aria-hidden={!inView}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="sunil-carousel-btn"
          onClick={() => go(index + 1)}
          disabled={index === last}
          aria-label="Next slide"
        >
          →
        </button>
      </div>
      <div className="sunil-carousel-dots" role="tablist" aria-label={`${label} slides`}>
        {Array.from({ length: last + 1 }, (_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? 'is-active' : undefined}
            aria-label={`Show slides starting at ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}
