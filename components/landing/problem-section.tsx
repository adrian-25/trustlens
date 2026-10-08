'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { AlertTriangle, Clock, HelpCircle } from 'lucide-react'

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
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
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}

const painPoints = [
  {
    icon: AlertTriangle,
    stat: '1 in 5',
    description: 'transactions flagged incorrectly',
  },
  {
    icon: Clock,
    stat: '48 hours',
    description: 'average fraud detection time',
  },
  {
    icon: HelpCircle,
    stat: 'Black box',
    description: "AI you can't explain to regulators",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#52b788] text-sm font-medium tracking-wider uppercase mb-4 block">
            The Problem
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#f0f4f0] mb-6">
            <AnimatedNumber value={485} prefix="$" suffix=" Billion" />
          </h2>
          <p className="text-xl text-[#f0f4f0]/70">
            lost to fraud globally in 2024
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.description}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#f0f4f0]/5 border border-[#f0f4f0]/10 rounded-2xl p-8 text-center"
            >
              <div className="w-14 h-14 bg-[#f0f4f0]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-7 h-7 text-[#52b788]" />
              </div>
              <div className="font-serif text-3xl md:text-4xl font-medium text-[#f0f4f0] mb-3">
                {point.stat}
              </div>
              <p className="text-[#f0f4f0]/60 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
