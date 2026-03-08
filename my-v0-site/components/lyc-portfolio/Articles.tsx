"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "./SectionTitle"

const articles = [
    {
        title: "Print for Figma",
        tag: "Figma 教學",
        date: "2024.03"
    },
    {
        title: "UX 學習平台— UXcel",
        tag: "學習資源",
        date: "2024.02"
    },
    {
        title: "Napkin AI 介紹",
        tag: "AI 工具",
        date: "2024.01"
    },
    {
        title: "Framer 教學資源",
        tag: "學習資源",
        date: "2023.12"
    },
    {
        title: "網頁動態特效",
        tag: "設計資源",
        date: "2023.11"
    }
]

export function Articles() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#2B2B2B] text-white overflow-hidden border-t border-white/5">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 flex flex-col items-end"
                >
                    <SectionTitle title="Weekly Report" />
                    <p className="text-white/50 w-full text-right mt-2">精選文章與每週報告</p>
                </motion.div>

                <div className="space-y-4">
                    {articles.map((article, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl border border-white/10 bg-[#2B2B2B]/50 transition-all cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 md:mb-0">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary w-fit">
                                    {article.tag}
                                </span>
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                            </div>

                            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                <span className="text-white/40 text-sm whitespace-nowrap">{article.date}</span>
                                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 transform duration-300">
                                    閱讀文章 ➔
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
