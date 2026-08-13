/**
 * A fixed, full-viewport dark backdrop that sits behind every section —
 * slow-drifting glow blobs over a faint moving grid, so the black
 * background feels alive on scroll instead of flat everywhere the 3D
 * scenes aren't running.
 */
export function AnimatedBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(237,234,245,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(237,234,245,0.05)_1px,transparent_1px)] [background-size:64px_64px] motion-safe:animate-[grid-drift_40s_linear_infinite]" />
      <div className="absolute left-[10%] top-[8%] h-[38vw] w-[38vw] rounded-full bg-violet/20 blur-[110px] motion-safe:animate-[drift_18s_ease-in-out_infinite]" />
      <div className="absolute bottom-[6%] right-[8%] h-[34vw] w-[34vw] rounded-full bg-magenta/14 blur-[120px] motion-safe:animate-[drift_22s_ease-in-out_infinite_reverse]" />
      <div className="absolute left-[45%] top-[55%] h-[26vw] w-[26vw] rounded-full bg-cyan/10 blur-[100px] motion-safe:animate-[drift_26s_ease-in-out_infinite]" />
      <div
        className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.10] blur-[80px] motion-safe:animate-[spin-slow_60s_linear_infinite]"
        style={{
          background:
            'conic-gradient(from 0deg, #7B4DFF, transparent 20%, transparent 45%, #E0389B, transparent 65%, transparent 90%, #3DE0E8, #7B4DFF)',
        }}
      />
      <Particles />
    </div>
  );
}

const PARTICLES = [
  { left: '12%', size: 3, delay: '0s', duration: '14s', color: 'bg-cyan/60' },
  { left: '24%', size: 2, delay: '2s', duration: '18s', color: 'bg-violet/60' },
  { left: '38%', size: 4, delay: '5s', duration: '16s', color: 'bg-magenta/50' },
  { left: '52%', size: 2, delay: '1s', duration: '20s', color: 'bg-bone/40' },
  { left: '67%', size: 3, delay: '7s', duration: '15s', color: 'bg-cyan/50' },
  { left: '78%', size: 2, delay: '3s', duration: '19s', color: 'bg-violet/50' },
  { left: '88%', size: 3, delay: '9s', duration: '17s', color: 'bg-magenta/40' },
];

function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute bottom-0 rounded-full ${p.color} motion-safe:animate-[float-up_var(--dur)_linear_infinite]`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            // @ts-expect-error custom property for the animation duration
            '--dur': p.duration,
          }}
        />
      ))}
    </>
  );
}
