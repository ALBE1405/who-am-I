export function JourneyPath({ steps, caption }: { steps: string[]; caption?: string }) {
  return (
    <p className="journey-path">
      {steps.map((step, i) => (
        <span key={step} className="journey-path-step">
          {i > 0 && (
            <span className="journey-path-arrow" aria-hidden="true">
              →
            </span>
          )}
          {step}
        </span>
      ))}
      {caption ? <span className="journey-path-note">{caption}</span> : null}
    </p>
  );
}
