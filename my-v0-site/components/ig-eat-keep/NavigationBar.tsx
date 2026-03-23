"use client"

import { SlidersHorizontal, Plus, Home, User } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = "filter" | "import" | "home" | "profile"

interface NavigationBarProps {
  active?: NavItem
  className?: string
}

const navItems: { id: NavItem; icon: React.ElementType; label: string }[] = [
  { id: "filter",  icon: SlidersHorizontal, label: "篩選" },
  { id: "import",  icon: Plus,              label: "匯入" },
  { id: "home",    icon: Home,              label: "首頁" },
  { id: "profile", icon: User,              label: "個人頁面" },
]

export function NavigationBar({ active = "home", className }: NavigationBarProps) {
  return (
    <nav
      className={cn(
        "flex items-end justify-center w-[393px] h-[76px] px-2",
        "bg-[#fcfcfc] shadow-[0px_-4px_8px_0px_rgba(202,175,175,0.25)]",
        className
      )}
    >
      {navItems.map(({ id, icon: Icon, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            className="flex flex-1 flex-col items-center justify-center pb-4 pt-3 gap-1 min-w-0"
          >
            <div
              className={cn(
                "flex flex-col items-center gap-1 w-full rounded-[100px] p-1",
                isActive &&
                  "bg-gradient-to-b from-[#ff6f61] to-[#ffb74d] from-[16%]"
              )}
            >
              <Icon
                size={32}
                strokeWidth={1.5}
                className={cn(
                  isActive ? "text-white" : "text-[#ff6f61]"
                )}
              />
              <span
                className={cn(
                  "text-[12px] font-medium leading-4 tracking-[0.5px] whitespace-nowrap",
                  isActive ? "text-white" : "text-[#ff6f61]"
                )}
              >
                {label}
              </span>
            </div>
          </button>
        )
      })}
    </nav>
  )
}
