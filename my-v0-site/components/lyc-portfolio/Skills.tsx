"use client"

import { motion } from "framer-motion"
import { Palette, MonitorSmartphone, SearchCode, Pencil, Dumbbell, Hand } from "lucide-react"
import { SectionTitle } from "./SectionTitle"

const skillCards = [
    {
        icon: <Palette className="w-8 h-8 text-[#AAE7EB]" />,
        title: "網站設計",
        desc: "使用 Figma 規劃及繪製吸引人的網站佈局，提升訪客的體驗以及對於產品及服務的認識。",
    },
    {
        icon: <MonitorSmartphone className="w-8 h-8 text-[#AAE7EB]" />,
        title: "網站開發",
        desc: "WordPress 網站架設\nFramer 網站架設\n網站動態製作\nHTML/CSS/JS",
    },
    {
        icon: <SearchCode className="w-8 h-8 text-[#AAE7EB]" />,
        title: "UI/UX 設計",
        desc: "Wireframe/Sitemap\n功能與架構規劃\n使用Figma進行介面繪製\n使用者與產品分析",
    },
    {
        icon: <Pencil className="w-8 h-8 text-[#AAE7EB]" />,
        title: "插畫繪製",
        desc: "動漫風格人物手繪\n簡單插圖繪製",
    },
    {
        icon: <Dumbbell className="w-8 h-8 text-[#AAE7EB]" />,
        title: "運動教學",
        desc: "重量訓練動作指導\nTRX/壺鈴/拳擊等特殊項目\n個人化訓練菜單安排",
    },
    {
        icon: <Hand className="w-8 h-8 text-[#AAE7EB]" />,
        title: "運動按摩",
        desc: "徒手筋膜放鬆\n道具放鬆(拔罐、筋膜刀)\n活動度評估與鬆解",
    }
]

export function Skills() {
    return (
        // 外部容器：設定深色背景、上下 padding 以及相對定位，便於後續元素佈局
        <section id="skills" className="py-24 px-6 md:px-12 bg-[#2B2B2B] text-white relative flex justify-center">
            {/* 內容容器：限制最大寬度，並確保在手機版置中，桌機版靠左對齊以適應右側標題 */}
            <div className="container mx-auto max-w-6xl relative z-10 w-full lg:w-[90%] lg:mr-auto">
                {/* 手機版標題：在螢幕寬度小於 lg 時顯示於上方 */}
                <div className="lg:hidden mb-12">
                    <SectionTitle title="Skills" />
                </div>

                {/* 桌機版標題：在螢幕寬度大於 lg 時顯示於右側，並且固定在視窗右方 (sticky position) */}
                <div className="absolute right-0 top-0 h-full hidden lg:flex pt-32 lg:-mr-12 xl:-mr-24">
                    <div className="sticky top-32 h-fit">
                        <SectionTitle title="Skills" vertical />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 relative w-full lg:w-11/12">
                    {/* 左側：詳細技能卡片區域 (Grid Layout) */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
                        {skillCards.map((card, i) => (
                            <motion.div
                                key={i}
                                // 卡片動畫：由下往上浮現
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                // 利用 index 計算 delay，呈現依序出現的瀑布流效果
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                // 卡片互動：滑鼠移上時稍微上浮，並帶入發光邊框效果
                                whileHover={{ y: -5, borderColor: "rgba(168, 230, 236, 0.5)" }}
                                className="p-8 rounded-3xl border border-white/10 bg-[#2B2B2B]/50 backdrop-blur-sm transition-all text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
                                {/* 支援換行符號 (\n) 的 p 標籤 */}
                                <p className="text-white/70 whitespace-pre-line leading-relaxed text-sm md:text-base">
                                    {card.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* 右側：語言能力與軟體技能小區塊 */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-6 z-10">
                        {/* 語言能力區塊 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl border border-white/10 bg-[#2B2B2B]/50 text-center"
                        >
                            <h3 className="text-xl font-bold text-primary mb-6">語言能力</h3>
                            <div className="grid grid-cols-2 gap-4 text-white/80">
                                <span>中文</span>
                                <span>英文</span>
                                <span>西班牙文</span>
                                <span>日文</span>
                            </div>
                        </motion.div>

                        {/* 軟體技能區塊 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="p-8 rounded-3xl border border-white/10 bg-[#2B2B2B]/50 text-center flex-1"
                        >
                            <h3 className="text-xl font-bold text-primary mb-6">軟體技能</h3>
                            {/* 設計需求：排列為 Grid，包含各方軟體圖示 */}
                            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 w-full px-4 md:px-8 place-items-center">
                                {/* Figma */}
                                <span className="w-16 h-16 bg-transparent border-none flex items-center justify-center" title="Figma">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-14 h-14" />
                                </span>
                                {/* HTML5 */}
                                <span className="w-16 h-16 bg-transparent border-none flex items-center justify-center" title="HTML5">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-14 h-14 object-contain" style={{ transform: "scale(1.1)" }} />
                                </span>
                                {/* CSS3 */}
                                <span className="w-16 h-16 bg-transparent border-none flex items-center justify-center" title="CSS3">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-14 h-14 object-contain" style={{ transform: "scale(1.1)" }} />
                                </span>
                                {/* JavaScript */}
                                <span className="w-16 h-16 bg-transparent border-none flex items-center justify-center" title="JavaScript">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
                                </span>
                                {/* WordPress */}
                                <span className="w-16 h-16 bg-transparent border-none flex items-center justify-center" title="WordPress">
                                    <img src="https://cdn.simpleicons.org/wordpress/white" alt="WordPress" className="w-14 h-14" />
                                </span>
                                {/* Elementor */}
                                <span className="w-16 h-16 bg-transparent border-none flex items-center justify-center" title="Elementor">
                                    <div className="w-12 h-12 bg-[#FF4B91] rounded-full flex items-center justify-center">
                                        <img src="https://cdn.simpleicons.org/elementor/white" alt="Elementor" className="w-6 h-6" />
                                    </div>
                                </span>
                                {/* Procreate (依照使用者要求放置該欄位與樣式) */}
                                <span className="w-16 h-16 bg-transparent border-none flex items-center justify-center col-span-2 md:col-span-1 md:justify-self-start" title="Procreate">
                                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center overflow-hidden">
                                        {/* 使用使用者指定放置在 public 資料夾下的 Procreate 高解析 PNG */}
                                        <img src="/procreate-icon.png" alt="Procreate" className="w-full h-full object-cover" />
                                    </div>
                                </span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
