"use client"

import { motion } from "framer-motion"

export function Marquee() {
    // 根據指示，更新跑馬燈上的字詞
    const items = [
        "JavaScript",
        "HTML/CSS",
        "WordPress",
        "Web Developer",
        "Web design"
    ]

    // 四角星芒 SVG 圖示，填色為 #AAE8EC
    const StarIcon = () => (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#AAE8EC" className="my-6">
            <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
        </svg>
    )

    return (
        <>
            {/* 左側跑馬燈區塊：由下往上輪播 */}
            <div className="fixed left-0 top-0 h-screen w-[81px] border-r border-[#2B2B2B] bg-[#2B2B2B] flex flex-col justify-start overflow-hidden z-20 hidden md:flex pointer-events-none">
                <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                    className="flex flex-col h-[200%]"
                >
                    {/* 第一組 */}
                    <div className="flex flex-col items-center">
                        {items.map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-white text-2xl font-black uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
                                    {item}
                                </span>
                                <StarIcon />
                            </div>
                        ))}
                    </div>
                    {/* 重複第一組作無縫連接 */}
                    <div className="flex flex-col items-center">
                        {items.map((item, i) => (
                            <div key={`dup-${i}`} className="flex flex-col items-center">
                                <span className="text-white text-2xl font-black uppercase tracking-widest [writing-mode:vertical-rl] rotate-180">
                                    {item}
                                </span>
                                <StarIcon />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* 右側跑馬燈區塊：由上往下輪播 */}
            <div className="fixed right-0 top-0 h-screen w-[81px] border-l border-[#2B2B2B] bg-[#2B2B2B] flex flex-col justify-start overflow-hidden z-20 hidden md:flex pointer-events-none">
                <motion.div
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                    className="flex flex-col h-[200%]"
                >
                    {/* 第一組 */}
                    <div className="flex flex-col items-center">
                        {items.map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-white text-2xl font-black uppercase tracking-widest [writing-mode:vertical-rl]">
                                    {item}
                                </span>
                                <StarIcon />
                            </div>
                        ))}
                    </div>
                    {/* 重複第一組作無縫連接 */}
                    <div className="flex flex-col items-center">
                        {items.map((item, i) => (
                            <div key={`dup-${i}`} className="flex flex-col items-center">
                                <span className="text-white text-2xl font-black uppercase tracking-widest [writing-mode:vertical-rl]">
                                    {item}
                                </span>
                                <StarIcon />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}
