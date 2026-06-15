import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import styles from './GlassCard.module.css';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  hoverEffect = false,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        styles.card,
        hoverEffect && styles.hoverEffect,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
