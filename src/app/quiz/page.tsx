'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, ArrowRight, Sun, Moon, Lightbulb, RefreshCw } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/shop/ProductCard';
import Button from '@/components/ui/Button';
import { quizQuestions } from '@/data/quiz-questions';
import { calculateQuizResults } from '@/lib/quiz-logic';
import { cn } from '@/lib/utils';
import styles from './quiz.module.css';

export default function SkinQuiz() {
  const [step, setStep] = useState<'intro' | 'questions' | 'results'>('intro');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = quizQuestions[currentQuestionIdx];
  const isLastQuestion = currentQuestionIdx === quizQuestions.length - 1;

  const handleStart = () => {
    setStep('questions');
    setCurrentQuestionIdx(0);
    setAnswers({});
  };

  const handleOptionSelect = (optionValue: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionValue,
    }));
  };

  const handleNext = () => {
    if (!answers[currentQuestion.id]) return; // Must select an answer

    if (isLastQuestion) {
      setStep('results');
    } else {
      setCurrentQuestionIdx((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIdx === 0) {
      setStep('intro');
    } else {
      setCurrentQuestionIdx((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setStep('intro');
    setCurrentQuestionIdx(0);
    setAnswers({});
  };

  // Calculate results if we are on the results screen
  const results = step === 'results' ? calculateQuizResults(answers) : null;

  // Progress percentage
  const progressPercent = ((currentQuestionIdx + 1) / quizQuestions.length) * 100;

  return (
    <PageTransition>
      <div className={styles.quizContainer}>
        {/* Intro Step */}
        {step === 'intro' && (
          <div className={styles.cardWrapper}>
            <div className={styles.intro}>
              <Sparkles size={45} className={styles.introIcon} />
              <h1 className={styles.introTitle}>Find Your Skincare Ritual</h1>
              <p className={styles.introText}>
                Achieving a healthy glow is about using the right formulas for your unique skin chemistry. Answer 6 quick questions designed by dermatologists to unlock a personalized routine optimized for your skin type under Indian weather conditions.
              </p>
              <Button variant="primary" size="lg" onClick={handleStart}>
                Start Skin Quiz
              </Button>
            </div>
          </div>
        )}

        {/* Questions Step */}
        {step === 'questions' && currentQuestion && (
          <div className={styles.cardWrapper}>
            {/* Progress bar */}
            <div className={styles.progressContainer}>
              <span className={styles.stepIndicator}>
                Question {currentQuestionIdx + 1} of {quizQuestions.length}
              </span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            {/* Question Card (using Framer Motion for slide animations) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className={styles.questionText}>{currentQuestion.question}</h2>
                {currentQuestion.subtitle && (
                  <p className={styles.questionSubtitle}>{currentQuestion.subtitle}</p>
                )}

                {/* Options Grid */}
                <div className={styles.optionsGrid}>
                  {currentQuestion.options.map((opt) => {
                    const isSelected = answers[currentQuestion.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        className={cn(styles.optionBtn, isSelected && styles.selectedOption)}
                        onClick={() => handleOptionSelect(opt.value)}
                      >
                        <span className={styles.optionIcon}>{opt.icon}</span>
                        <span className={styles.optionLabel}>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className={styles.navigation}>
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft size={14} /> Back
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
              >
                {isLastQuestion ? 'View Results' : 'Next'} <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        )}

        {/* Results Step */}
        {step === 'results' && results && (
          <div className={cn(styles.results, 'container')}>
            <div className={styles.resultHeader}>
              <span className={styles.profileLabel}>Your Skin Analysis</span>
              <h1 className={styles.resultTitle}>Your Glow Profile</h1>
              <p className={styles.profileDesc}>
                Based on your answers, we have evaluated your skin as: <strong style={{ color: 'var(--color-rose-gold-dark)' }}>{results.skinProfile}</strong> Here is your custom daily ritual and recommendations.
              </p>
            </div>

            {/* 1. Recommended Products Grid */}
            <div style={{ marginBottom: '5rem' }}>
              <h2 className={styles.sectionTitle}>Your Recommended Formulas</h2>
              <div className={styles.recommendationsGrid}>
                {results.recommendedProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>

            {/* 2. Custom Routines (Morning & Night) */}
            <div className={styles.routineSection}>
              <h2 className={styles.sectionTitle}>Your Daily Skincare Routine</h2>
              <div className={styles.routineGrid}>
                {/* Morning Routine */}
                <div className={styles.routineCol}>
                  <h3 className={styles.routineTitle}>
                    <Sun size={20} style={{ color: 'var(--color-rose-gold)' }} />
                    Morning Routine (AM)
                  </h3>
                  <div className={styles.stepList}>
                    {results.morningRoutine.map((step) => (
                      <div key={step.stepNumber} className={styles.stepItem}>
                        <span className={styles.stepNumber}>{step.stepNumber}</span>
                        <div className={styles.stepContent}>
                          <span className={styles.stepName}>{step.stepName}</span>
                          {step.productSlug ? (
                            <Link href={`/shop/${step.productSlug}`} className={styles.stepProductLink}>
                              {step.productName} &rarr;
                            </Link>
                          ) : (
                            <span className={styles.stepProductLink} style={{ color: 'rgba(74, 14, 45, 0.4)', cursor: 'default' }}>
                              {step.productName}
                            </span>
                          )}
                          <p className={styles.stepDesc}>{step.instruction}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Night Routine */}
                <div className={styles.routineCol}>
                  <h3 className={styles.routineTitle}>
                    <Moon size={20} style={{ color: 'var(--color-rose-gold-dark)' }} />
                    Night Routine (PM)
                  </h3>
                  <div className={styles.stepList}>
                    {results.nightRoutine.map((step) => (
                      <div key={step.stepNumber} className={styles.stepItem}>
                        <span className={styles.stepNumber}>{step.stepNumber}</span>
                        <div className={styles.stepContent}>
                          <span className={styles.stepName}>{step.stepName}</span>
                          {step.productSlug ? (
                            <Link href={`/shop/${step.productSlug}`} className={styles.stepProductLink}>
                              {step.productName} &rarr;
                            </Link>
                          ) : (
                            <span className={styles.stepProductLink} style={{ color: 'rgba(74, 14, 45, 0.4)', cursor: 'default' }}>
                              {step.productName}
                            </span>
                          )}
                          <p className={styles.stepDesc}>{step.instruction}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Pro Tips Section */}
            <div className={styles.tipsSection}>
              <h2 className={styles.sectionTitle}>Skincare Pro Tips for You</h2>
              <div className={styles.tipsCard}>
                <div className={styles.tipsGrid}>
                  {results.proTips.map((tip, idx) => (
                    <div key={idx} className={styles.tipItem}>
                      <Lightbulb size={18} className={styles.tipIcon} />
                      <p className={styles.tipText}>{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className={styles.actionsRow}>
              <Button variant="outline" onClick={handleRestart}>
                <RefreshCw size={14} /> Retake Quiz
              </Button>
              <Link href="/shop" passHref legacyBehavior>
                <Button variant="primary">Shop Collection</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
