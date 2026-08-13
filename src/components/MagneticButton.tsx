'use client';

import { useRef, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

const PULL = 0.35;
const MAX_OFFSET = 14;

type MagneticButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

/** A CTA that leans gently toward the cursor when it's nearby, and springs back on leave. */
export function MagneticButton<T extends ElementType = 'a'>({
  as,
  children,
  className,
  ...props
}: MagneticButtonProps<T>) {
  const Tag = (as ?? 'a') as ElementType;
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const x = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * PULL));
    const y = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * PULL));
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const onMouseLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn('inline-block transition-transform duration-300 ease-signature', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
