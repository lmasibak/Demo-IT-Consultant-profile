"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedBackgroundProps {
  className?: string
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Grid properties
    const gridSize = 30
    const gridColor = "rgba(0, 255, 255, 0.15)"
    const gridColorAlt = "rgba(255, 0, 255, 0.15)"

    // Particles properties
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const particleCount = 50

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        color: Math.random() > 0.5 ? "rgba(0, 255, 255, 0.7)" : "rgba(255, 0, 255, 0.7)",
      })
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      if (!ctx || !canvas) return

      animationId = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 0.5

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw diagonal lines
      ctx.strokeStyle = gridColorAlt
      for (let i = -canvas.height; i < canvas.width; i += gridSize * 2) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i + canvas.height, canvas.height)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isClient])

  if (!isClient) {
    return null
  }

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 opacity-50 ${className}`} />
}

