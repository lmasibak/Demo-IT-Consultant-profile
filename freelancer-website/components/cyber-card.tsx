"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface CyberCardProps {
  children: React.ReactNode
  className?: string
  variant?: "cyan" | "pink" | "yellow"
  hoverEffect?: boolean
}

export function CyberCard({ children, className, variant = "cyan", hoverEffect = true }: CyberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const variantClasses = {
    cyan: "cyber-card border-primary",
    pink: "cyber-card-pink border-secondary",
    yellow: "border-accent",
  }

  const hoverClasses = {
    cyan: "hover-glow",
    pink: "hover-glow-pink",
    yellow: "hover-glow-yellow",
  }

  return (
    <div
      className={cn(
        "relative rounded-md overflow-hidden transition-all duration-300",
        variantClasses[variant],
        hoverEffect && hoverClasses[variant],
        isHovered && "scale-[1.02]",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="scanline">{children}</div>
    </div>
  )
}

