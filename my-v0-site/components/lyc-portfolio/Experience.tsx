"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./SectionTitle"

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-[#2B2B2B] text-white">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <SectionTitle title="Education" />
                        <div className="space-y-8">
                            <div className="flex justify-between items-start border-b border-white/10 pb-6 group">
                                <span className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">巴拉圭亞松森大學食品工程系</span>
                                <span className="text-white/50">2015~2017</span>
                            </div>
                            <div className="flex justify-between items-start border-b border-white/10 pb-6 group">
                                <span className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">成功大學工業設計系</span>
                                <span className="text-white/50">2018~2023</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <SectionTitle title="Experience" />
                        <div className="space-y-8">
                            <div className="flex justify-between items-start border-b border-white/10 pb-6 group">
                                <span className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">Pick up Design 週報發布</span>
                                <span className="text-white/50">2022~2025</span>
                            </div>
                            <div className="flex justify-between items-start border-b border-white/10 pb-6 group">
                                <span className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">墨璿科技－UI/Web設計</span>
                                <span className="text-white/50">2023~2024</span>
                            </div>
                            <div className="flex justify-between items-start border-b border-white/10 pb-6 group">
                                <span className="text-lg md:text-xl font-medium group-hover:text-primary transition-colors">World Gym －健身教練</span>
                                <span className="text-white/50">2025~2026</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
