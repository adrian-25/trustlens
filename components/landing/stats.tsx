'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" })
      return controls.stop
    }
  }, [isInView, value, count])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 99.7, suffix: '%', label: 'Detection Accuracy' },
  { value: 50, suffix: 'ms', label: 'Avg Response Time' },
  { value: 2, suffix: 'B+', label: 'Transactions Analyzed' },
  { value: 500, suffix: 'M', label: 'Fraud Prevented' },
]

export function Stats() {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            Proven at Scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protecting billions of dollars in transactions across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
