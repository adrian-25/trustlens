"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    num: "01",
    title: "Connect your API",
    description: "Integrate TrustLens with your existing payment infrastructure in minutes"
  },
  {
    num: "02", 
    title: "Transactions Scored in 300ms",
    description: "Every transaction is analyzed in real-time using our AI models"
  },
  {
    num: "03",
    title: "Analysts Review with Full Explanation",
    description: "Your team gets actionable insights powered by explainable AI"
  }
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" ref={ref} className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg">
            Get started in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <svg 
            className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-24 hidden md:block"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 100 50 Q 300 20 500 50 Q 700 80 900 50"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f7cff" />
                <stop offset="100%" stopColor="#00d68f" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="text-center"
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#4f7cff] to-[#00d68f] mb-6">
                  <span className="text-xl font-bold text-black">{step.num}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
