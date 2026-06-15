import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'rose' | 'plum' | 'gold' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'rose', className }: BadgeProps) {
  const stylesMap = {
    rose: {
      background: 'var(--gradient-rose)',
      color: '#fff',
      boxShadow: '0 2px 8px rgba(183, 110, 121, 0.25)',
    },
    plum: {
      background: 'var(--gradient-plum)',
      color: '#fff',
      boxShadow: '0 2px 8px rgba(74, 14, 45, 0.25)',
    },
    gold: {
      background: 'var(--gradient-gold)',
      color: 'var(--color-deep-plum)',
      boxShadow: '0 2px 8px rgba(200, 168, 130, 0.25)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-rose-gold)',
      border: '1px solid var(--color-rose-gold)',
    },
  };

  return (
    <span
      className={cn(className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.25rem 0.75rem',
        borderRadius: '50px',
        fontSize: 'var(--text-xs)',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        lineHeight: 1,
        ...stylesMap[variant],
      }}
    >
      {children}
    </span>
  );
}
