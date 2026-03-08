"use client"

import { motion } from "framer-motion"

export function SectionTitle({ title, vertical = false }: { title: string, vertical?: boolean }) {
    const letters = title.split("")

    return (
        <div className={`flex ${vertical ? 'justify-start h-full' : 'justify-end w-full mb-12'}`}>
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 1 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.08
                        }
                    }
                }}
                className={`font-black tracking-tighter text-[#AAE7EB]/50 uppercase flex flex-wrap ${vertical ? 'text-6xl md:text-[100px] justify-start [writing-mode:vertical-rl] leading-[0.8] opacity-80' : 'text-4xl md:text-6xl lg:text-7xl justify-end text-right'}`}
            >
                {letters.map((letter, i) => (
                    <motion.span
                        key={i}
                        variants={{
                            hidden: { opacity: 0, display: "none" },
                            visible: { opacity: 1, display: "inline-block" }
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.h2>
        </div>
    )
}
