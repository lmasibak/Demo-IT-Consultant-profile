"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { AnimatedElement } from "@/components/animated-element"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <AnimatedElement animation="fadeInLeft" className="flex items-center gap-2">
          <Link href="/" className="font-cyber text-xl">
            <GlitchText text="LK" className="text-primary" />
          </Link>
        </AnimatedElement>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <AnimatedElement key={item.href} animation="fadeInDown" delay={index * 0.1}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-cyber uppercase tracking-wider transition-colors hover:text-primary relative group",
                  pathname === item.href ? "text-primary neon-text" : "text-muted-foreground",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === item.href ? "w-full" : "w-0",
                  )}
                ></span>
              </Link>
            </AnimatedElement>
          ))}
        </nav>

        <AnimatedElement animation="fadeInRight" className="flex items-center gap-2">
          <ModeToggle />

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </AnimatedElement>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-primary/50 bg-background/95 backdrop-blur">
          <nav className="container flex flex-col py-4 gap-4">
            {navItems.map((item, index) => (
              <AnimatedElement key={item.href} animation="fadeInLeft" delay={index * 0.1}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-cyber uppercase tracking-wider transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary neon-text" : "text-muted-foreground",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </AnimatedElement>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

