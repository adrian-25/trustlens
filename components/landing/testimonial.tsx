'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-3xl p-10 md:p-14 relative"
        >
          {/* Quote icon */}
          <div className="absolute -top-5 left-10">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>

          {/* Quote text */}
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed mb-10 text-pretty">
            We caught a $2.3M fraud ring in 48 hours using TrustLens. Our previous tool missed it for 6 months.
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center"
            >
              <span className="font-serif text-xl font-medium text-primary-foreground">SC</span>
            </motion.div>

            <div className="flex-1">
              <div className="font-medium text-foreground">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">Head of Risk, NeoBank Pro</div>
            </div>

            {/* Company logo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg"
            >
              <div className="w-6 h-6 bg-foreground/10 rounded flex items-center justify-center">
                <span className="font-serif text-xs font-medium text-foreground">N</span>
              </div>
              <span className="text-sm font-medium text-foreground">NeoBank Pro</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
