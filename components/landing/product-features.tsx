"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    title: "AI Scoring",
    description: "Real-time fraud scoring using advanced machine learning models",
    chart: "gauge"
  },
  {
    title: "SHAP Explainability",
    description: "Understand every decision with transparent AI explanations",
    chart: "waterfall"
  },
  {
    title: "Alert Management",
    description: "Streamlined workflow for fraud analysts to review cases",
    chart: "feed"
  }
]

function GaugeChart() {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#1a1a1a" strokeWidth="8" fill="none" />
          <motion.circle
            cx="50" cy="50" r="40"
            stroke="url(#gaugeGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 251" }}
            whileInView={{ strokeDasharray: "188 251" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f7cff" />
              <stop offset="100%" stopColor="#00d68f" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">87</span>
        </div>
      </div>
    </div>
  )
}

function WaterfallChart() {
  const bars = [
    { value: 40, label: "Amount", positive: false },
    { value: 30, label: "Velocity", positive: false },
    { value: 25, label: "Location", positive: true },
    { value: 20, label: "Device", positive: false },
    { value: 15, label: "History", positive: true },
  ]

  return (
    <div className="flex items-end justify-center gap-2 h-32 px-4">
      {bars.map((bar, i) => (
        <motion.div
          key={bar.label}
          initial={{ height: 0 }}
          whileInView={{ height: `${bar.value * 2.5}%` }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className={`w-8 rounded-t-sm ${bar.positive ? "bg-[#00d68f]" : "bg-[#4f7cff]"}`}
        />
      ))}
    </div>
  )
}

function AlertFeed() {
  const alerts = [
    { id: "4821", status: "High Risk", color: "text-red-400" },
    { id: "4822", status: "Medium", color: "text-yellow-400" },
    { id: "4823", status: "Low Risk", color: "text-green-400" },
  ]

  return (
    <div className="space-y-2 p-4 h-32 overflow-hidden">
      {alerts.map((alert, i) => (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="flex items-center justify-between text-sm bg-white/5 rounded px-3 py-2"
        >
          <span className="text-gray-400">TXN #{alert.id}</span>
          <span className={alert.color}>{alert.status}</span>
        </motion.div>
      ))}
    </div>
  )
}

export function ProductFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to detect and prevent fraud at scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 group"
            >
              {/* Chart */}
              <div className="mb-6 bg-black/50 rounded-xl overflow-hidden">
                {feature.chart === "gauge" && <GaugeChart />}
                {feature.chart === "waterfall" && <WaterfallChart />}
                {feature.chart === "feed" && <AlertFeed />}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
