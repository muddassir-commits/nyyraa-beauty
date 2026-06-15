import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger only in client-side context
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Custom global GSAP defaults
  gsap.config({
    nullTargetWarn: false, // Suppress warnings if target is null (safe for React)
  });
}

export { gsap, ScrollTrigger };
