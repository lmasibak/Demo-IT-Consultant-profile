"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  variant?: "cyan" | "pink" | "yellow"
  as?: React.ElementType
}

export function GlitchText({ text, className, variant = "cyan", as: Component = "span" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(
      () => {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      },
      Math.random() * 5000 + 3000,
    )

    return () => clearInterval(glitchInterval)
  }, [])

  const variantClasses = {
    cyan: "neon-text",
    pink: "neon-text-pink",
    yellow: "neon-text-yellow",
  }

  return (
    <Component
      className={cn("font-cyber relative inline-block", variantClasses[variant], isGlitching && "glitch", className)}
      data-text={text}
    >
      {text}
    </Component>
  )
}

