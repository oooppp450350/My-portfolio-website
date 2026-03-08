"use client"

import { motion } from "framer-motion"

export function Footer() {
    return (
        // 頁尾區塊：設定上下內距、深色背景、半透明文字，並加上頂部微弱分隔線
        <footer className="py-12 bg-[#2B2B2B] text-white/50 border-t border-white/5">
            {/* 置中內容容器 */}
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    // 當此元件進入視窗範圍時觸發淡入動畫 (只觸發一次)
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {/* 主要聯絡標題 */}
                    <h2 className="text-3xl font-black tracking-tighter text-white">Contact me</h2>

                    {/* 聯絡資訊連結區域 */}
                    <div className="flex justify-center gap-4">
                        {/* 連結：滑鼠懸停時會變主色，並且稍微向上偏移 */}
                        <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">Email</a>
                        <span className="text-white/20">|</span>
                        <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">Instagram</a>
                        <span className="text-white/20">|</span>
                        <a href="#" className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">LinkedIn</a>
                    </div>

                    {/* 版權宣告區域：動態抓取當前年份 */}
                    <p className="text-sm pt-8">
                        © {new Date().getFullYear()} LYC Portfolio. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
