'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ArchitectureDiagram() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const nodes = [
    { id: 'input', label: 'Transaction Input', position: 'top-left', description: 'Real-time data ingestion' },
    { id: 'output', label: 'Risk Score Output', position: 'top-right', description: 'Instant risk assessment' },
    { id: 'review', label: 'Analyst Review', position: 'bottom-right', description: 'Human-in-the-loop' },
    { id: 'feedback', label: 'Feedback Loop', position: 'bottom-left', description: 'Continuous learning' },
  ]

  return (
    <section id="architecture" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            How TrustLens Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A closed-loop system that continuously learns and adapts to new fraud patterns
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div ref={ref} className="relative max-w-4xl mx-auto aspect-square md:aspect-[4/3]">
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
            {/* Dashed lines connecting nodes */}
            <motion.path
              d="M100 75 L200 150"
              stroke="#2d6a4f"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="animate-dash"
            />
            <motion.path
              d="M300 75 L200 150"
              stroke="#2d6a4f"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="animate-dash"
            />
            <motion.path
              d="M300 225 L200 150"
              stroke="#2d6a4f"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
              className="animate-dash"
            />
            <motion.path
              d="M100 225 L200 150"
              stroke="#2d6a4f"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="animate-dash"
            />
            {/* Connecting outer nodes */}
            <motion.path
              d="M100 75 L300 75"
              stroke="#2d6a4f"
              strokeWidth="1"
              strokeDasharray="6 4"
              fill="none"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.1 }}
            />
            <motion.path
              d="M300 75 L300 225"
              stroke="#2d6a4f"
              strokeWidth="1"
              strokeDasharray="6 4"
              fill="none"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.3 }}
            />
            <motion.path
              d="M300 225 L100 225"
              stroke="#2d6a4f"
              strokeWidth="1"
              strokeDasharray="6 4"
              fill="none"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.5 }}
            />
            <motion.path
              d="M100 225 L100 75"
              stroke="#2d6a4f"
              strokeWidth="1"
              strokeDasharray="6 4"
              fill="none"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.7 }}
            />
          </svg>

          {/* Center Node - AI Engine */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-card border-2 border-primary shadow-xl flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-serif text-sm md:text-base font-semibold text-foreground">AI Engine</span>
              <span className="text-xs text-muted-foreground">Core Analysis</span>
            </div>
          </motion.div>

          {/* Corner Nodes */}
          {nodes.map((node, index) => {
            const positions: Record<string, string> = {
              'top-left': 'top-0 left-0 md:top-4 md:left-4',
              'top-right': 'top-0 right-0 md:top-4 md:right-4',
              'bottom-right': 'bottom-0 right-0 md:bottom-4 md:right-4',
              'bottom-left': 'bottom-0 left-0 md:bottom-4 md:left-4',
            }
            
            const icons: Record<string, React.ReactNode> = {
              'input': (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              ),
              'output': (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              'review': (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
              'feedback': (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
            }

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className={`absolute ${positions[node.position]} w-28 md:w-36`}
              >
                <div className="bg-card rounded-xl p-4 border border-border shadow-sm card-hover">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    {icons[node.id]}
                  </div>
                  <h3 className="font-medium text-sm text-foreground mb-1">{node.label}</h3>
                  <p className="text-xs text-muted-foreground">{node.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
