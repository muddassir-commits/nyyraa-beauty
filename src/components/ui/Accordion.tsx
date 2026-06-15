'use client';

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './Accordion.module.css';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.header} onClick={toggleAccordion} aria-expanded={isOpen}>
        <span>{title}</span>
        <ChevronDown
          size={18}
          className={cn(styles.icon, isOpen && styles.iconRotated)}
        />
      </button>
      <div
        className={styles.contentWrapper}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
