/**
 * A fixed, full-viewport backdrop behind every section — a static, subtle
 * gradient wash and a faint technical grid. Deliberately not animated: a
 * constantly-looping background competes with content instead of
 * supporting it.
 */
export function AnimatedBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
      <div className="absolute inset-0 opacity-[0.25] [background-image:linear-gradient(rgba(237,234,245,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(237,234,245,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute left-[10%] top-[6%] h-[38vw] w-[38vw] rounded-full bg-violet/10 blur-[120px]" />
      <div className="absolute bottom-[8%] right-[10%] h-[32vw] w-[32vw] rounded-full bg-magenta/8 blur-[130px]" />
    </div>
  );
}
