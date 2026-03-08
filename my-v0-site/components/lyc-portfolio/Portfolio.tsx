"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionTitle } from "./SectionTitle"

const projects = [
    {
        title: "IG KeepEat",
        type: "App Design / UI & UX",
        desc: "將 Instagram 收藏美食轉化為可執行美食地圖的 App 概念設計。",
        link: "#",
        color: "from-orange-500/20 to-pink-500/20"
    },
    {
        title: "5 秒 GOGO 清單",
        type: "App Design / UI & UX",
        desc: "專注於防止拖延的待辦事項 App。包含介面設計與互動規劃。",
        link: "#",
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Game City 生日宴",
        type: "Web Design / WordPress",
        desc: "籌備場地資訊 / 形象網站。WordPress 開發與視覺設計。",
        link: "#",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        title: "療癒之家",
        type: "Web Design / E-commerce",
        desc: "日本電商網站，打造溫馨治癒的購物體驗。Figma 介面設計。",
        link: "#",
        color: "from-yellow-500/20 to-amber-500/20"
    }
]

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#2B2B2B] text-white overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col mb-16">
                    <SectionTitle title="Web Projects" />
                    <motion.a
                        href="#"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:inline-flex items-center text-primary font-medium hover:underline underline-offset-4 self-end mt-4"
                    >
                        所有作品 ➔
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {projects.map((project, i) => (
                        <motion.a
                            href={project.link}
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group block relative rounded-[2rem] overflow-hidden bg-gradient-to-br ${project.color} border border-white/10 aspect-[16/10] p-6 lg:p-8 flex flex-col justify-end transition-all hover:border-primary/50`}
                        >
                            {/* Note: User should replace this div with actual project image later */}
                            <div className="absolute inset-0 z-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold mb-4 text-white/90">
                                    {project.type}
                                </span>
                                <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-white/70 line-clamp-2">{project.desc}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4">
                        所有作品 ➔
                    </a>
                </div>
            </div>
        </section>
    )
}
