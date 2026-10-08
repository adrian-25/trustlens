'use client'

import { motion } from 'framer-motion'

const companies = [
  'NeoBank Pro',
  'PayShield',
  'FinCore',
  'LendFast',
  'CryptoGuard',
  'NeoBank Pro',
  'PayShield',
  'FinCore',
  'LendFast',
  'CryptoGuard',
]

export function SocialProof() {
  return (
    <section className="py-16 px-6 bg-secondary/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          Trusted by teams at
        </p>
      </motion.div>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling logos */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {companies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity"
            >
              {/* Fake logo mark */}
              <div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
                <span className="font-serif text-lg font-medium text-foreground">
                  {company.charAt(0)}
                </span>
              </div>
              <span className="font-medium text-foreground whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
