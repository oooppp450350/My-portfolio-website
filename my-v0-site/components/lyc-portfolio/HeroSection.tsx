"use client"

import { motion } from "framer-motion"
import { Particles } from "./Particles"

export function HeroSection() {
    const title = "HI, I’m LYC"
    const letters = title.split("")

    return (
        // 首頁主視覺區塊：設定最小高度為視窗高度的 90%，並將內容置中顯示
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
            {/* 粒子特效背景元件 */}
            <Particles />

            {/* 主要內容區塊，設定初始淡入且由下往上浮現的動畫 */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 flex flex-col items-center"
            >
                {/* 
                  主要大標題 (Hero Title) 
                  使用 staggered 動畫，讓拆解開來的字母 (letters) 一個接一個地淡入出現，
                  營造打字機或是依序出現的特效。
                */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 1 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1, // 每個字母間隔 0.1 秒
                                delayChildren: 0.3    // 動畫開始前等待 0.3 秒
                            }
                        }
                    }}
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-[#AAE7EB]/50 flex justify-center flex-wrap"
                >
                    {letters.map((letter, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            {/* 如果字元是空白，則替換成不換行空格（&nbsp;），以避免排版擠扁 */}
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* 英文副標題 */}
                <p className="text-xl md:text-2xl text-white/70 mb-2 font-light tracking-wide">
                    A Web Designer & WordPress Developer
                </p>
                {/* 中文副標題 */}
                <p className="text-lg md:text-xl text-white/50 mb-10 font-medium">
                    網頁設計與 WordPress 網站開發
                </p>

                {/* CTA 按鈕 (Call to Action) */}
                <motion.a
                    href="#portfolio"
                    // 滑鼠懸停與點擊時的縮放回饋效果
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-colors hover:bg-primary/90"
                >
                    我的作品
                </motion.a>
            </motion.div>

            {/* Floating Design Elements */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 opacity-20 pointer-events-none"
            >
                <div className="w-full h-full bg-primary/30 rounded-full blur-3xl"></div>
            </motion.div>
        </section>
    )
}
