'use client';

import { useReducedMotion } from '@/lib/useReducedMotion';
import { cn } from '@/lib/utils';

// SMIL animations read the raw attribute value, not the CSS cascade, so
// these are hex literals rather than var(--cyan) — a CSS custom property
// inside an <animate> values list silently fails to resolve.
const CYAN = '#3DE0E8';
const VIOLET = '#7B4DFF';
const MAGENTA = '#E0389B';
const BONE = '#EDEAF5';

const ORBITS = [
  { radius: 60, size: 7, color: CYAN, duration: 14, direction: 1, angle: 20, packetDur: 2.2 },
  { radius: 95, size: 8, color: VIOLET, duration: 20, direction: -1, angle: 160, packetDur: 2.8 },
  { radius: 128, size: 6, color: MAGENTA, duration: 26, direction: 1, angle: 260, packetDur: 3.4 },
] as const;

// Every connecting line cycles through this palette, each starting at a
// different point in the loop so they don't all switch at once — it reads
// as a live network re-routing itself rather than one synced blink.
const LINE_COLORS: [string, string, string, string] = [CYAN, VIOLET, MAGENTA, BONE];

/**
 * A tasteful SVG standing in for an automated system — a core hub with
 * nodes in continuous, layered orbit around it, connecting lines that
 * cycle color on a staggered timer, and small "data packet" pulses that
 * travel each spoke from hub to node — a live, re-routing network rather
 * than a static diagram. Pure SVG SMIL (no WebGL, no CSS transform
 * dependence), and skipped entirely under prefers-reduced-motion.
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
      aria-label="Animated diagram of nodes orbiting a central hub, connected by lines that shift color, representing a live automated system"
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
              stroke={LINE_COLORS[0]}
              strokeOpacity={0.35}
              strokeWidth={1.2}
            >
              {!reducedMotion && (
                <>
                  <animate
                    attributeName="stroke"
                    values={[...LINE_COLORS, LINE_COLORS[0]].join(';')}
                    dur="8s"
                    begin={`${-i * 2.2}s`}
                    calcMode="discrete"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    values="0.35;0.9;0.35"
                    keyTimes="0;0.1;1"
                    dur="8s"
                    begin={`${-i * 2.2}s`}
                    repeatCount="indefinite"
                  />
                </>
              )}
            </line>

            {/* A small packet of light travels the spoke, hub to node and back — the "data flowing through the system" read. */}
            {!reducedMotion && (
              <circle r={2.5} fill={BONE}>
                <animateMotion
                  path={`M${cx},${cy} L${cx + orbit.radius},${cy} L${cx},${cy}`}
                  dur={`${orbit.packetDur}s`}
                  begin={`${-i * 0.6}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.9;1"
                  dur={`${orbit.packetDur}s`}
                  begin={`${-i * 0.6}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )}

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
      <circle cx={cx} cy={cy} r={5} fill={BONE}>
        {!reducedMotion && (
          <animate attributeName="r" values="5;6.5;5" dur="3s" repeatCount="indefinite" />
        )}
      </circle>
    </svg>
  );
}
