"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const articles = [
  {
    title: "How AI is Revolutionizing Fraud Detection in 2024",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Industry Insights"
  },
  {
    title: "Understanding SHAP Values in Fraud Prevention",
    date: "Dec 10, 2024", 
    readTime: "8 min read",
    category: "Technical Deep Dive"
  },
  {
    title: "Case Study: How NeoBank Reduced Fraud by 94%",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    category: "Case Studies"
  },
  {
    title: "The Future of Real-Time Transaction Monitoring",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "Industry Insights"
  }
]

export function NewsCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-gray-400 text-lg">
              Stay ahead with our fraud prevention research
            </p>
          </div>
          <button className="hidden md:block text-[#4f7cff] hover:text-[#6b8cff] transition-colors">
            View All Articles
          </button>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto hide-scrollbar -mx-6 px-6">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6 pb-4"
          >
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-6 min-w-[320px] md:min-w-[380px] cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-[#4f7cff] bg-[#4f7cff]/10 px-2 py-1 rounded">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4 line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
