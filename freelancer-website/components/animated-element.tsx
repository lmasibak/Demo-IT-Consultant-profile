"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "none"

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  as?: React.ElementType
}

export function AnimatedElement({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  as: Component = "div",
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once])

  const animationClasses = {
    fadeIn: "opacity-0 transition-opacity",
    fadeInUp: "opacity-0 translate-y-8 transition-all",
    fadeInDown: "opacity-0 -translate-y-8 transition-all",
    fadeInLeft: "opacity-0 -translate-x-8 transition-all",
    fadeInRight: "opacity-0 translate-x-8 transition-all",
    scaleIn: "opacity-0 scale-95 transition-all",
    none: "",
  }

  const visibleClasses = {
    fadeIn: "opacity-100",
    fadeInUp: "opacity-100 translate-y-0",
    fadeInDown: "opacity-100 translate-y-0",
    fadeInLeft: "opacity-100 translate-x-0",
    fadeInRight: "opacity-100 translate-x-0",
    scaleIn: "opacity-100 scale-100",
    none: "",
  }

  const style = {
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}s`,
  }

  return (
    <Component
      ref={ref}
      className={cn(animationClasses[animation], isVisible && visibleClasses[animation], className)}
      style={style}
    >
      {children}
    </Component>
  )
}

export function AnimatedContainer({
  children,
  className,
  animation = "fadeIn",
  staggerDelay = 0.1,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  as: Component = "div",
}: Omit<AnimatedElementProps, "delay"> & { staggerDelay?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, once])

  return (
    <Component ref={ref} className={cn(className)}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child

        return React.cloneElement(child as React.ReactElement<any>, {
          className: cn(child.props.className),
          style: {
            ...child.props.style,
            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0) scale(1)"
              : animation === "scaleIn"
                ? "translateY(0) scale(0.95)"
                : "translateY(20px) scale(1)",
            transition: `all ${duration}s ease-out ${index * staggerDelay}s`,
          },
        })
      })}
    </Component>
  )
}

