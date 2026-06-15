'use client';

import Image from 'next/image';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/effects/ScrollReveal';
import { Sparkles, ShieldCheck, Heart, Leaf, Users, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import styles from './about.module.css';

export default function About() {
  const values = [
    {
      title: 'Korean Inspired',
      desc: 'We utilize advanced Korean formulation technologies like bio-fermentation, micro-emulsions, and ultra-hydrating water gels.',
      icon: <Sparkles size={22} />,
    },
    {
      title: 'Science Backed',
      desc: 'No buzzwords. We select active ingredients like Niacinamide, Collagen, and Hyaluronic Acid at concentrations proven to deliver.',
      icon: <ShieldCheck size={22} />,
    },
    {
      title: 'For Indian Skin',
      desc: 'Formulated to adapt to Indian climate humidity and dust, prioritizing barrier repair, hyperpigmentation, and sun shielding.',
      icon: <Users size={22} />,
    },
    {
      title: 'Cruelty Free',
      desc: 'We never test on animals. Every Nyyraa formula is 100% cruelty-free and built using ethically sourced, safe ingredients.',
      icon: <Heart size={22} />,
    },
    {
      title: 'Clean Beauty',
      desc: 'Formulated without parabens, phthalates, mineral oils, sulfates, or artificial sensitizing fragrances. Safe for sensitive skin.',
      icon: <Leaf size={22} />,
    },
    {
      title: 'Derm Tested',
      desc: 'Every single batch undergoes testing by independent dermatological labs to ensure suitability for reactive skin barriers.',
      icon: <Award size={22} />,
    },
  ];

  const timelineItems = [
    {
      year: '2024',
      title: 'The Seed Idea',
      desc: 'Frustrated by how heavy Korean routines felt in humid Indian climates, our founders set out to fuse K-beauty science with lightweight textures.',
    },
    {
      year: '2025',
      title: 'Seoul-Mumbai Lab Collaboration',
      desc: 'We partnered with leading formulation scientists in Seoul to test active delivery models optimized specifically for melanin-rich skin types.',
    },
    {
      year: '2026',
      title: 'Launch of Nyyraa Beauty',
      desc: 'We debuted our five core essentials: Velvet Lip Tint, Collagen Sheet Masks, and PA++++ Sunscreens, bringing a new standard of luxury skin health.',
    },
  ];

  return (
    <PageTransition>
      <div className={styles.page}>
        <div className="container section-padding">
          <SectionHeading
            title="Our Story"
            subtitle="The Fusion of Heritage & Science"
            description="Discover how Nyyraa Beauty redefines skincare by pairing advanced Korean cosmetic engineering with ingredients optimized for Indian skin biology."
          />

          {/* Intro Section */}
          <div className={styles.intro}>
            <ScrollReveal animation="slide-right">
              <div className={styles.introImageWrapper}>
                <Image
                  src="/images/brand/story-lifestyle.svg"
                  alt="Healthy glowing skin representation"
                  fill
                  className={styles.introImage}
                  priority
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <div className={styles.introContent}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--color-deep-plum)' }}>
                  Bridging Two Beauty Worlds
                </h3>
                <p className={styles.text}>
                  Korean skincare has taught the world the importance of deep hydration, layering, and treating the skin with extreme gentleness. Yet, the physical environment of the Indian subcontinent—characterized by intense UV levels, high particulate pollution, and sweating humidity—demands a different approach.
                </p>
                <p className={styles.text}>
                  At Nyyraa, we create skin-minimalist essentials that combine the advanced textures of Korean skin science with active clinical ingredients designed to target hyperpigmentation, regulate excess sebum, and build barrier resilience.
                </p>
                <p className={styles.text}>
                  We believe beauty is a ritual of self-appreciation. Our formulas are housed in premium frosted glass and finished with rose-gold details, making your daily routine a tactile, luxurious experience.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Core Values */}
          <div className={styles.valuesSection}>
            <SectionHeading
              title="Our Core Values"
              subtitle="What We Stand For"
              align="center"
            />
            <ScrollReveal animation="fade-up" stagger={0.1}>
              <div className={styles.valuesGrid}>
                {values.map((val, idx) => (
                  <div key={idx} className={styles.valueCard}>
                    <div className={styles.valueIcon}>{val.icon}</div>
                    <h3 className={styles.valueTitle}>{val.title}</h3>
                    <p className={styles.valueDesc}>{val.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Quote Banner */}
          <ScrollReveal animation="scale">
            <div className={styles.quoteCard}>
              <p className={styles.quoteText}>
                &ldquo;Skincare is not about copying a trend. It is about understanding your skin's biology, honoring its needs, and feeding it with safe, high-performance science.&rdquo;
              </p>
              <span className={styles.quoteAuthor}>— Nyyraa Skin Lab Team</span>
            </div>
          </ScrollReveal>

          {/* Chronological Timeline */}
          <div className={styles.timelineSection}>
            <SectionHeading
              title="Our Journey"
              subtitle="Milestones & Growth"
              align="center"
            />
            <div className={styles.timeline}>
              {timelineItems.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={cn(
                      styles.timelineItem,
                      isEven ? styles.timelineItemEven : styles.timelineItemOdd
                    )}
                  >
                    <span className={styles.timelineDot} />
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
