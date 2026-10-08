"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "For small projects",
    features: [
      "Up to 1K transactions/month",
      "Basic fraud scoring",
      "Email support",
      "API access",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$299",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Up to 100K transactions/month",
      "Advanced AI scoring",
      "SHAP explanations",
      "Priority support",
      "Custom rules engine",
      "Analytics dashboard",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited transactions",
      "Custom ML models",
      "Dedicated success manager",
      "SLA guarantee",
      "On-premise deployment",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" ref={ref} className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            Start free, scale as you grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative ${plan.highlighted ? "md:-mt-4" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4f7cff] to-[#00d68f] text-black text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div 
                className={`h-full rounded-2xl p-8 ${
                  plan.highlighted 
                    ? "glass-card border-[#4f7cff]/50 glow-blue" 
                    : "glass-card"
                }`}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-[#00d68f] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="#" 
                  className={`block w-full text-center py-3 rounded-full text-sm font-semibold transition-all ${
                    plan.highlighted 
                      ? "bg-white text-black hover:bg-gray-100" 
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
