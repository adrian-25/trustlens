"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f7cff] to-[#00d68f] flex items-center justify-center">
              <span className="text-black font-bold text-sm">TL</span>
            </div>
            <span className="text-xl font-bold text-white">TrustLens</span>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "How It Works", "Pricing", "Docs"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/login"
            className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
