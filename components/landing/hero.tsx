"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const laptopRotateX = useTransform(scrollYProgress, [0, 0.5], [45, 0])
  const laptopScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.1])
  const laptopY = useTransform(scrollYProgress, [0, 0.5], [100, -50])

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-black overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4f7cff]/20 blur-[150px]"
        />
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00d68f]/15 blur-[150px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Stop Fraud
            <br />
            <span className="bg-gradient-to-r from-[#4f7cff] to-[#00d68f] bg-clip-text text-transparent">
              Before It Happens
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Real-time AI-powered fraud detection with explainable insights. 
            Protect your business with zero false positives.
          </p>
          
          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/login"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <a
              href="#architecture"
              className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </motion.div>

        {/* 3D Laptop Mockup */}
        <motion.div
          style={{ 
            rotateX: laptopRotateX,
            scale: laptopScale,
            y: laptopY,
          }}
          className="mt-20 perspective-[1000px]"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Laptop Frame */}
            <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl p-2 border border-gray-700">
              {/* Screen */}
              <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
                {/* Dashboard Content */}
                <DashboardMockup />
                
                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Laptop Base */}
            <div className="h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl" />
            <div className="h-2 bg-gray-800 mx-16 rounded-b-lg" />
            
            {/* Glow Effect */}
            <div className="absolute -inset-10 bg-gradient-to-r from-[#4f7cff]/20 to-[#00d68f]/20 blur-3xl -z-10 opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  const [fraudScore, setFraudScore] = useState(0)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setFraudScore(prev => {
          if (prev >= 94) {
            clearInterval(interval)
            return 94
          }
          return prev + 2
        })
      }, 50)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-4 h-full bg-[#0a0a0a]">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-gray-500">TrustLens Dashboard</div>
      </div>
      
      {/* Dashboard Grid */}
      <div className="grid grid-cols-3 gap-3 h-[calc(100%-40px)]">
        {/* Fraud Score Card */}
        <div className="glass-card rounded-lg p-3 flex flex-col items-center justify-center">
          <div className="text-xs text-gray-400 mb-2">Fraud Score</div>
          <div className="relative w-16 h-16">
            <svg className="w-full h-full -rotate-90">
              <circle cx="32" cy="32" r="28" stroke="#1a1a1a" strokeWidth="4" fill="none" />
              <circle 
                cx="32" cy="32" r="28" 
                stroke="url(#scoreGradient)" 
                strokeWidth="4" 
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${fraudScore * 1.76} 176`}
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4f7cff" />
                  <stop offset="100%" stopColor="#00d68f" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-white">{fraudScore}%</span>
            </div>
          </div>
        </div>
        
        {/* Chart Card */}
        <div className="glass-card rounded-lg p-3 col-span-2">
          <div className="text-xs text-gray-400 mb-2">Transactions</div>
          <div className="flex items-end gap-1 h-12">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#4f7cff] to-[#00d68f]"
              />
            ))}
          </div>
        </div>
        
        {/* Alert Feed */}
        <div className="glass-card rounded-lg p-3 col-span-2">
          <div className="text-xs text-gray-400 mb-2">Recent Alerts</div>
          <div className="space-y-1.5 text-xs">
            {[
              { status: "blocked", amount: "$12,400" },
              { status: "flagged", amount: "$3,200" },
              { status: "approved", amount: "$890" },
            ].map((alert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="flex items-center justify-between"
              >
                <span className="text-gray-400">TXN #{4821 + i}</span>
                <span className={
                  alert.status === "blocked" ? "text-red-400" :
                  alert.status === "flagged" ? "text-yellow-400" : "text-green-400"
                }>
                  {alert.status.toUpperCase()}
                </span>
                <span className="text-gray-300">{alert.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="glass-card rounded-lg p-3 flex flex-col justify-center">
          <div className="text-xs text-gray-400">Accuracy</div>
          <div className="text-xl font-bold text-[#00d68f]">99.9%</div>
        </div>
      </div>
    </div>
  )
}
