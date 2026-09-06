const focusAreas = [
  'AI chatbot workflows',
  'Tool-using AI agents',
  'API-connected assistants',
  'Business workflow automation',
  'Prompt design and testing',
  'Combining web applications with AI capabilities',
];

export function AIFocusSection() {
  return (
    <section
      id="ai-focus"
      aria-label="AI learning and development focus"
      className="relative px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-violet/30 bg-gradient-to-br from-violet/10 via-transparent to-cyan/5 p-8 md:p-12">
        <span className="inline-block rounded-full border border-cyan/40 px-3 py-1 font-body text-caption uppercase tracking-caption text-cyan">
          Currently exploring
        </span>
        <h2 className="mt-4 font-display text-h2 font-bold leading-[1.05] tracking-display text-bone">
          AI Learning &amp; Development Focus
        </h2>
        <p className="mt-6 max-w-2xl font-body text-body leading-relaxed text-bone/80">
          I am currently developing practical skills in AI-assisted software development, chatbot
          workflows, tool-using agents, and API-connected automation. My focus is on combining my
          existing web development experience with AI capabilities that solve genuine business
          problems.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <li key={area} className="flex items-center gap-3 font-body text-body text-bone/85">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
