"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./SectionTitle"

export function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-[#2B2B2B] text-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-16 items-center"
                >
                    {/* Illustration Side */}
                    <div className="flex-1 w-full max-w-md relative">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative aspect-square w-full"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                            <div className="relative w-full h-full bg-[#2B2B2B] rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                                <span className="text-white/30 text-sm">LYC Illustration Placeholder</span>
                                {/* 
                  <Image src="/images/lyc-illustration.png" alt="LYC Avatar" fill className="object-cover" /> 
                */}
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <div className="flex-1 space-y-8">
                        <SectionTitle title="About Me" />
                        <div className="space-y-6 text-lg text-white/80 font-light leading-relaxed">
                            <p>
                                我是LYC，意為 Lily Chen 的縮寫。
                            </p>
                            <p>
                                擅長透過 Figma 進行網頁介面設計與排版，具備 WordPress 網站架設經驗。在從事網頁設計工作之前，我也曾於專案之中負責網站與介面設計。
                            </p>
                            <p>
                                同時我也積極利用空餘時間製作 UI/UX 作品，以提升設計邏輯與使用者體驗的敏銳度，持續深化專業能力。
                            </p>
                            <p>
                                曾任 Pickup Design 週報小組成員，也做過一陣子的健身教練。興趣是看漫畫、看動畫、繪圖以及探索美食。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
