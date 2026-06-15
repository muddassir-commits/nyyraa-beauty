'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapConfig';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  stagger = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let fromVars: gsap.TweenVars = { opacity: 0 };
    let toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    };

    if (animation === 'fade-up') {
      fromVars.y = 40;
      toVars.y = 0;
    } else if (animation === 'scale') {
      fromVars.scale = 0.92;
      toVars.scale = 1;
    } else if (animation === 'slide-left') {
      fromVars.x = 40;
      toVars.x = 0;
    } else if (animation === 'slide-right') {
      fromVars.x = -40;
      toVars.x = 0;
    }

    if (stagger > 0 && el.children.length > 0) {
      toVars.stagger = stagger;
      gsap.fromTo(Array.from(el.children), fromVars, toVars);
    } else {
      gsap.fromTo(el, fromVars, toVars);
    }
  }, [animation, delay, duration, stagger]);

  return <div ref={elementRef} style={{ width: '100%' }}>{children}</div>;
}
