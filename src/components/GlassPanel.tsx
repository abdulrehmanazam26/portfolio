import { cn } from '@/lib/utils';

export function GlassPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('glass-panel rounded-2xl p-8 md:p-12', className)}>
      {children}
    </div>
  );
}
