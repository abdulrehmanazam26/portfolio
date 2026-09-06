import { cn } from '@/lib/utils';

/**
 * A tasteful SVG standing in for connected systems / APIs / workflow
 * automation — deliberately lightweight (no WebGL). The connections draw in
 * once on load and each node holds a slow, gentle pulse — motion that reads
 * as "live system," not a distracting background loop.
 */
export function NetworkGraphic({ className }: { className?: string }) {
  const nodes = [
    { x: 60, y: 40, r: 7, color: 'var(--cyan)' },
    { x: 200, y: 30, r: 6, color: 'var(--violet)' },
    { x: 260, y: 110, r: 8, color: 'var(--magenta)' },
    { x: 40, y: 140, r: 6, color: 'var(--violet)' },
    { x: 150, y: 170, r: 9, color: 'var(--cyan)' },
    { x: 220, y: 190, r: 5, color: 'var(--bone)' },
  ];
  const pairs: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [1, 4],
    [0, 3],
    [3, 4],
    [4, 5],
    [2, 5],
  ];
  const edges = pairs
    .map(([a, b]) => {
      const from = nodes[a];
      const to = nodes[b];
      return from && to ? { from, to } : null;
    })
    .filter((edge): edge is { from: (typeof nodes)[number]; to: (typeof nodes)[number] } => edge !== null);

  return (
    <svg
      viewBox="0 0 300 220"
      fill="none"
      className={cn('h-auto w-full overflow-visible', className)}
      role="img"
      aria-label="Diagram of connected nodes representing APIs and automated workflows"
    >
      {edges.map(({ from, to }, i) => {
        const length = Math.hypot(to.x - from.x, to.y - from.y);
        return (
          <line
            key={i}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeOpacity={0.25}
            strokeWidth={1.5}
            strokeDasharray={length}
            strokeDashoffset={length}
            className="motion-safe:animate-[draw-line_1s_ease-out_forwards]"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill={n.color}
          fillOpacity={0.9}
          className="motion-safe:animate-[node-pulse_4s_ease-in-out_infinite]"
          style={{ transformOrigin: `${n.x}px ${n.y}px`, animationDelay: `${i * 0.4}s` }}
        />
      ))}
      <rect
        x={110}
        y={90}
        width={40}
        height={40}
        rx={8}
        transform="rotate(45 130 110)"
        stroke="currentColor"
        strokeOpacity={0.4}
        strokeWidth={1.5}
      />
    </svg>
  );
}
