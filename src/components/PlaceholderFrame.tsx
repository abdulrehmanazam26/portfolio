import { cn } from '@/lib/utils';

/**
 * Stand-in for a real screenshot/photo. No network access was available
 * while building this to pull stock imagery, and there's no real client
 * work to show yet — so this renders an honest "placeholder" frame instead
 * of a fabricated image. Swap for a real `next/image` once assets exist.
 */
export function PlaceholderFrame({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-bone/10 bg-gradient-to-br from-violet/20 via-ink to-magenta/10',
        className,
      )}
    >
      <span className="font-body text-caption uppercase tracking-caption text-bone/50">
        {label}
      </span>
    </div>
  );
}
