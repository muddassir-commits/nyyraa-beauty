import { Flower } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(styles.container, styles[align], className)}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      
      <div className={styles.decorator}>
        <div className={styles.line} />
        <span className={styles.leaf}>
          <Flower size={14} style={{ fill: 'currentColor' }} />
        </span>
        <div className={styles.line} />
      </div>

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
