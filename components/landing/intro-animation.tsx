'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'trust' | 'lens' | 'merge' | 'fade'>('trust')
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('lens'), 800),
      setTimeout(() => setPhase('merge'), 1600),
      setTimeout(() => setPhase('fade'), 2200),
      setTimeout(() => onComplete(), 2500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.1,
      },
    }),
  }

  return (
    <AnimatePresence>
      {phase !== 'fade' ? (
        <motion.div
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* TRUST */}
            <motion.div
              className="flex justify-center"
              animate={phase === 'merge' ? { y: 0, opacity: 0, scale: 0.5 } : {}}
              transition={{ duration: 0.4 }}
            >
              {'TRUST'.split('').map((letter, i) => (
                <motion.span
                  key={`trust-${i}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="font-serif text-6xl md:text-8xl text-white font-medium tracking-wider"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>

            {/* LENS */}
            {(phase === 'lens' || phase === 'merge') && (
              <motion.div
                className="flex justify-center mt-2"
                initial={{ opacity: 0 }}
                animate={phase === 'merge' 
                  ? { y: -60, opacity: 0, scale: 0.5 } 
                  : { opacity: 1 }
                }
                transition={{ duration: 0.4 }}
              >
                {'LENS'.split('').map((letter, i) => (
                  <motion.span
                    key={`lens-${i}`}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                    className="font-serif text-6xl md:text-8xl text-[#52b788] font-medium tracking-wider"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Merged TrustLens Logo */}
            {phase === 'merge' && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="font-serif text-5xl md:text-6xl">
                  <span className="text-white">Trust</span>
                  <span className="text-[#52b788]">Lens</span>
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
