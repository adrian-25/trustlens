"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import dynamic from "next/dynamic"

const RotatingCube = dynamic(() => import("./rotating-cube").then(m => m.RotatingCube), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] flex items-center justify-center">
      <div className="w-32 h-32 border border-[#00d68f]/30 rounded-lg animate-pulse" />
    </div>
  )
})

const features = [
  { num: "01", title: "Real-Time Detection", desc: "Analyze transactions in under 300ms" },
  { num: "02", title: "Explainable AI", desc: "SHAP-powered insights for every decision" },
  { num: "03", title: "Zero False Positives", desc: "99.9% accuracy with human oversight" },
  { num: "04", title: "Instant Integration", desc: "Deploy in minutes with our REST API" },
]

export function ValueProps() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why{" "}
              <span className="bg-gradient-to-r from-[#4f7cff] to-[#00d68f] bg-clip-text text-transparent">
                TrustLens
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Built by fraud prevention experts, powered by cutting-edge AI.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <span className="text-3xl font-bold text-[#4f7cff]/30 group-hover:text-[#4f7cff] transition-colors">
                    {feature.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - 3D Cube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <RotatingCube />
            {/* Glow */}
            <div className="absolute inset-0 bg-[#00d68f]/10 blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
