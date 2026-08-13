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
    </div>
  );
}
