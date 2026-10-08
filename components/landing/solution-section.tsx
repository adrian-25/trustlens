'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const beforeItems = [
  'Manual review bottlenecks',
  'High false positive rates',
  'Days to detect fraud patterns',
  'Unexplainable decisions',
]

const afterItems = [
  'Instant automated decisions',
  '99.7% accuracy rate',
  'Real-time pattern detection',
  'Full audit trail & explainability',
]

export function SolutionSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Transition gradient from dark */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1a1a2e] to-transparent -translate-y-full" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            The Solution
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4 text-balance">
            TrustLens changes everything
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the difference intelligent fraud prevention makes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">Before TrustLens</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-5 h-5 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-destructive" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border-2 border-primary/30 rounded-2xl p-8 relative"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              With TrustLens
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground">After TrustLens</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
