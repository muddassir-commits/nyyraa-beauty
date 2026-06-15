'use client';

import { useState } from 'react';
import { Mail, Clock, ShieldCheck, MailCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/effects/ScrollReveal';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import { cn } from '@/lib/utils';
import styles from './contact.module.css';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('general');
  const [formMsg, setFormMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName.trim() && formEmail.trim() && formMsg.trim()) {
      setSubmitted(true);
      // Reset form
      setFormName('');
      setFormEmail('');
      setFormMsg('');
    }
  };

  const faqs = [
    {
      q: 'Are your products safe for sensitive skin?',
      a: 'Yes, absolutely. Every Nyyraa formula is dermatologically tested on sensitive, reactive skin types. We strictly avoid common irritants, essential oils, drying alcohols, synthetic fragrances, and parabens to ensure our products respect your skin barrier.',
    },
    {
      q: 'Do you ship all over India? How long does it take?',
      a: 'We offer express shipping nationwide. Standard delivery takes 3-5 business days to metropolitan cities (Mumbai, Delhi, Bangalore, etc.) and 5-7 business days for regional areas.',
    },
    {
      q: 'Is there a white cast with your sunscreens?',
      a: 'No. Our Invisible Gel Sunscreen melts like water to provide a completely clear, velvet-matte finish with zero residue. Our Tinted Mineral Sunscreen utilizes zinc oxide blended with a universal sheer mineral tint that offsets any chalkiness, adapting seamlessly to Indian skin tones.',
    },
    {
      q: 'How does the Skin Quiz recommendation work?',
      a: 'Our quiz evaluates your answers against a dermatological scoring matrix. By analyzing your skin type, environmental exposure, and primary goal, it matches you to the specific active concentrations (like Niacinamide or Marine Collagen) that will resolve your concern without overwhelming your skin.',
    },
    {
      q: 'Can I cancel or modify my order?',
      a: 'Yes, as long as your order has not been dispatched. Please email us at info@nyyraa.com with your order number within 2 hours of placing the order, and we will assist you.',
    },
    {
      q: 'Are your products pregnancy-safe?',
      a: 'Our products are free from harsh retinoids, high-strength salicylic acid, and hydroquinone, making them generally safe during pregnancy or breastfeeding. However, we always recommend consulting with your obstetrician before starting any new skincare routine.',
    },
    {
      q: 'How do I use the Velvet Lip Tint for a gradient look?',
      a: 'For a natural Korean-inspired gradient look, apply 2 dots of the Velvet Lip Tint in the center of your inner lips. Gently tap outwards using your index finger or press your lips together. The velvety formula blends out smoothly for a soft-focus stained look.',
    },
    {
      q: 'Do you offer cash on delivery (COD)?',
      a: 'Yes, we support Cash on Delivery (COD) for most pin codes across India, in addition to safe online checkout via Credit Cards, UPI, Netbanking, and digital wallets.',
    },
  ];

  return (
    <PageTransition>
      <div className={styles.page}>
        <div className="container section-padding">
          <SectionHeading
            title="Contact Us"
            subtitle="Let's Start a Conversation"
            description="Have questions about ingredients, orders, or need routine advice? Reach out to our skin support team. We're here to help you glow."
          />

          {/* Contact Form & Info grid */}
          <div className={styles.grid}>
            {/* Form card */}
            <ScrollReveal animation="slide-right">
              {submitted ? (
                <div className={styles.successCard}>
                  <MailCheck size={45} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. A skincare specialist from our support team will reply to your email within 24 hours.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className={styles.formCard}>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Name */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Full Name</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className={styles.input}
                        placeholder="e.g. Priyanka Patel"
                      />
                    </div>

                    {/* Email */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className={styles.input}
                        placeholder="e.g. priyanka@email.com"
                      />
                    </div>

                    {/* Subject */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Reason for Contact</label>
                      <select
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className={styles.select}
                      >
                        <option value="general">Routine Recommendation</option>
                        <option value="orders">Order Support & Shipping</option>
                        <option value="press">Press & Collaborations</option>
                        <option value="wholesale">Wholesale & Stockist</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Your Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formMsg}
                        onChange={(e) => setFormMsg(e.target.value)}
                        className={cn(styles.input, styles.textarea)}
                        placeholder="How can we help your skin glow today?"
                      />
                    </div>

                    <Button type="submit" variant="primary" fullWidth style={{ marginTop: '1rem' }}>
                      Send Message
                    </Button>
                  </form>
                </div>
              )}
            </ScrollReveal>

            {/* Info cards column */}
            <ScrollReveal animation="slide-left">
              <div className={styles.infoCol}>
                {/* Email Info */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className={styles.infoTitle}>Email Support</h3>
                    <p className={styles.infoText}>info@nyyraa.com</p>
                    <p className={styles.infoText} style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      General inquiries, routines, orders.
                    </p>
                  </div>
                </div>

                {/* Social Info */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <InstagramIcon style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div>
                    <h3 className={styles.infoTitle}>Instagram</h3>
                    <p className={styles.infoText}>@nyyraabeauty</p>
                    <p className={styles.infoText} style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      DMs open for quick skincare advice!
                    </p>
                  </div>
                </div>

                {/* Response Clock */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIcon}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className={styles.infoTitle}>Response Time</h3>
                    <p className={styles.infoText}>Within 24 Hours</p>
                    <p className={styles.infoText} style={{ opacity: 0.6, fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      Monday to Saturday, 9:00 AM - 6:00 PM IST.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* FAQ Accordion Section */}
          <div className={styles.faqSection}>
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Quick Support"
              align="center"
            />
            <ScrollReveal animation="fade-up">
              <div className={styles.faqContainer}>
                {faqs.map((faq, idx) => (
                  <Accordion key={idx} title={faq.q}>
                    {faq.a}
                  </Accordion>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
