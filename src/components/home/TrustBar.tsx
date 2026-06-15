'use client';

import { Sparkles, ShieldCheck, Heart, Trash2, Layers, Users } from 'lucide-react';
import styles from './TrustBar.module.css';

export default function TrustBar() {
  const claims = [
    { text: 'Korean Inspired', icon: <Sparkles size={16} /> },
    { text: 'Dermatologically Tested', icon: <ShieldCheck size={16} /> },
    { text: 'Cruelty Free', icon: <Heart size={16} /> },
    { text: 'Paraben Free', icon: <Trash2 size={16} /> },
    { text: 'For All Skin Types', icon: <Layers size={16} /> },
    { text: 'For Indian Skin', icon: <Users size={16} /> },
  ];

  // Duplicate the claims array to make an infinite marquee
  const doubleClaims = [...claims, ...claims, ...claims];

  return (
    <div className={styles.trustBar}>
      <div className={styles.marquee}>
        {doubleClaims.map((claim, index) => (
          <div key={index} className={styles.item}>
            <span style={{ color: 'var(--color-rose-gold-light)', display: 'flex', alignItems: 'center' }}>
              {claim.icon}
            </span>
            <span>{claim.text}</span>
            <span className={styles.bullet}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
