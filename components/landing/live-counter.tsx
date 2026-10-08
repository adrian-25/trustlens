"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function LiveCounter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: 2.4, suffix: "B", prefix: "$", label: "Fraud Prevented" },
    { value: 99.9, suffix: "%", prefix: "", label: "Detection Accuracy" },
    { value: 300, suffix: "ms", prefix: "<", label: "Response Time" },
    { value: 10000, suffix: "+", prefix: "", label: "Businesses Protected" },
  ]

  return (
    <section ref={ref} className="py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4f7cff]/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 text-lg">
            Real results from real businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-glow-blue mb-2">
                <span className="bg-gradient-to-r from-[#4f7cff] to-[#00d68f] bg-clip-text text-transparent">
                  <AnimatedCounter 
                    target={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix}
                  />
                </span>
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
