'use client';

import { useReducedMotion } from '@/lib/useReducedMotion';
import { cn } from '@/lib/utils';

const ORBITS = [
  { radius: 60, size: 7, color: 'var(--cyan)', duration: 14, direction: 1, angle: 20 },
  { radius: 95, size: 8, color: 'var(--violet)', duration: 20, direction: -1, angle: 160 },
  { radius: 128, size: 6, color: 'var(--magenta)', duration: 26, direction: 1, angle: 260 },
] as const;

/**
 * A tasteful SVG standing in for an automated system — a core hub with
 * nodes in continuous, layered orbit around it, each ring a different
 * speed and direction. Uses native SVG SMIL animation (animateTransform)
 * rather than CSS transforms, which some render engines don't apply to
 * SVG <g> elements — SMIL is the reliable, universally-supported path.
 * Skipped entirely under prefers-reduced-motion.
 */
export function NetworkGraphic({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const cx = 150;
  const cy = 150;

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      className={cn('h-auto w-full overflow-visible', className)}
      role="img"
      aria-label="Diagram of nodes orbiting a central hub, representing an automated, connected system"
    >
      {ORBITS.map((orbit, i) => (
        <circle
          key={`ring-${i}`}
          cx={cx}
          cy={cy}
          r={orbit.radius}
          stroke="currentColor"
          strokeOpacity={0.15}
          strokeWidth={1}
          strokeDasharray="3 6"
        />
      ))}

      {ORBITS.map((orbit, i) => {
        const from = orbit.angle;
        const to = orbit.angle + 360 * orbit.direction;
        return (
          <g key={`orbit-${i}`} transform={reducedMotion ? `rotate(${from} ${cx} ${cy})` : undefined}>
            {!reducedMotion && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${from} ${cx} ${cy}`}
                to={`${to} ${cx} ${cy}`}
                dur={`${orbit.duration}s`}
                repeatCount="indefinite"
              />
            )}
            <line
              x1={cx}
              y1={cy}
              x2={cx + orbit.radius}
              y2={cy}
              stroke="currentColor"
              strokeOpacity={0.2}
              strokeWidth={1.2}
            />
            <circle cx={cx + orbit.radius} cy={cy} r={orbit.size} fill={orbit.color} fillOpacity={0.95}>
              {!reducedMotion && (
                <animate
                  attributeName="r"
                  values={`${orbit.size};${orbit.size * 1.3};${orbit.size}`}
                  dur="3s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
          </g>
        );
      })}

      <rect
        x={cx - 16}
        y={cy - 16}
        width={32}
        height={32}
        rx={7}
        transform={`rotate(45 ${cx} ${cy})`}
        stroke="currentColor"
        strokeOpacity={0.5}
        strokeWidth={1.5}
      />
      <circle cx={cx} cy={cy} r={5} fill="var(--bone)">
        {!reducedMotion && (
          <animate attributeName="r" values="5;6.5;5" dur="3s" repeatCount="indefinite" />
        )}
      </circle>
    </svg>
  );
}
