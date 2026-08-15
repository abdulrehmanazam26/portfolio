import { cn } from '@/lib/utils';

const PATHS: Record<string, string> = {
  Restaurant: 'M6 3v7a2 2 0 0 0 2 2v9M6 3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2M10 3v9M17 3c-2 1-3 3-3 6s1 4 3 4v8',
  Florist:
    'M12 21v-8m0 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm0-6a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm0 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z',
  Shop: 'M4 8l1-4h14l1 4M4 8v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8M4 8h16M9 12a3 3 0 0 0 6 0',
  Showroom: 'M3 4h8v8H3V4Zm10 0h8v8h-8V4ZM3 14h8v6H3v-6Zm10 0h8v6h-8v-6Z',
  Pharmacy:
    'M4.5 4.5 8 8m0 0 3.5-3.5a2.5 2.5 0 1 1 3.5 3.5L11.5 11.5m-3.5-3.5L4.5 11.5a2.5 2.5 0 1 0 3.5 3.5L11.5 11.5m0 0 3.5 3.5a2.5 2.5 0 1 1-3.5 3.5L8 15',
};

export function BusinessIcon({
  type,
  className,
}: {
  type: string;
  className?: string;
}) {
  const d = PATHS[type];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('h-5 w-5', className)}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
