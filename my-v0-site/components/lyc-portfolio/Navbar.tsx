"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                    LYC
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        About Me
                    </Link>
                    <Link href="#experience" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Experience
                    </Link>
                    <Link href="#skills" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Skills
                    </Link>
                    <Link href="#portfolio" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Portfolio
                    </Link>
                </nav>
            </div>
        </motion.header>
    )
}
