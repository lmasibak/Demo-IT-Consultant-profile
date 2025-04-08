"use client"

import { Code, Globe, Layout, Lightbulb, Rocket, Smartphone } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { CyberCard } from "@/components/cyber-card"
import { AnimatedElement, AnimatedContainer } from "@/components/animated-element"
import { useState, useEffect } from "react"

export default function ServicesPageClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 cyber-grid">
      <AnimatedElement animation="fadeInDown" className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-cyber tracking-tight mb-4">
          <GlitchText text="My Services" />
        </h1>
        <p className="text-xl text-muted-foreground font-cyber-mono">
          I offer a comprehensive range of IT services to help businesses thrive in the digital world. Each service is
          tailored to meet your specific needs and goals.
        </p>
      </AnimatedElement>

      <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Web Development */}
        <div>
          <CyberCard className="flex flex-col p-6 space-y-4 bg-muted/20">
            <div className="p-2 bg-primary/10 w-fit rounded-full pulse">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-xl font-cyber text-primary neon-text">Web Development</h2>
            <p className="text-muted-foreground font-cyber-mono flex-grow">
              Custom websites and web applications built with modern technologies to meet your business needs.
            </p>
            <div className="pt-4 border-t border-primary/30">
              <h3 className="font-cyber mb-2 text-primary">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  React
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  TypeScript
                </span>
              </div>
            </div>
          </CyberCard>
        </div>

        {/* Mobile App Development */}
        <div>
          <CyberCard variant="pink" className="flex flex-col p-6 space-y-4 bg-muted/20">
            <div className="p-2 bg-secondary/10 w-fit rounded-full pulse-pink">
              <Smartphone className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-xl font-cyber text-secondary neon-text-pink">Mobile App Development</h2>
            <p className="text-muted-foreground font-cyber-mono flex-grow">
              Native and cross-platform mobile applications for iOS and Android that deliver exceptional user
              experiences.
            </p>
            <div className="pt-4 border-t border-secondary/30">
              <h3 className="font-cyber mb-2 text-secondary">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  React Native
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Flutter
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Swift
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Kotlin
                </span>
              </div>
            </div>
          </CyberCard>
        </div>

        {/* E-commerce Solutions */}
        <div>
          <CyberCard className="flex flex-col p-6 space-y-4 bg-muted/20">
            <div className="p-2 bg-primary/10 w-fit rounded-full pulse">
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-xl font-cyber text-primary neon-text">E-commerce Solutions</h2>
            <p className="text-muted-foreground font-cyber-mono flex-grow">
              Complete online store solutions with secure payment processing, inventory management, and customer
              engagement tools.
            </p>
            <div className="pt-4 border-t border-primary/30">
              <h3 className="font-cyber mb-2 text-primary">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Shopify
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  WooCommerce
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Stripe
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Custom Solutions
                </span>
              </div>
            </div>
          </CyberCard>
        </div>

        {/* IT Consulting */}
        <div>
          <CyberCard variant="pink" className="flex flex-col p-6 space-y-4 bg-muted/20">
            <div className="p-2 bg-secondary/10 w-fit rounded-full pulse-pink">
              <Lightbulb className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-xl font-cyber text-secondary neon-text-pink">IT Consulting</h2>
            <p className="text-muted-foreground font-cyber-mono flex-grow">
              Strategic technology advice to optimize your business operations and achieve your goals.
            </p>
            <div className="pt-4 border-t border-secondary/30">
              <h3 className="font-cyber mb-2 text-secondary">Services:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Technology Assessment
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Digital Strategy
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Process Optimization
                </span>
              </div>
            </div>
          </CyberCard>
        </div>

        {/* UI/UX Design */}
        <div>
          <CyberCard className="flex flex-col p-6 space-y-4 bg-muted/20">
            <div className="p-2 bg-primary/10 w-fit rounded-full pulse">
              <Layout className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-xl font-cyber text-primary neon-text">UI/UX Design</h2>
            <p className="text-muted-foreground font-cyber-mono flex-grow">
              User-centered design that enhances user experience and creates intuitive, visually appealing interfaces.
            </p>
            <div className="pt-4 border-t border-primary/30">
              <h3 className="font-cyber mb-2 text-primary">Services:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  User Research
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Wireframing
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Prototyping
                </span>
                <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                  Usability Testing
                </span>
              </div>
            </div>
          </CyberCard>
        </div>

        {/* Digital Transformation */}
        <div>
          <CyberCard variant="pink" className="flex flex-col p-6 space-y-4 bg-muted/20">
            <div className="p-2 bg-secondary/10 w-fit rounded-full pulse-pink">
              <Rocket className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-xl font-cyber text-secondary neon-text-pink">Digital Transformation</h2>
            <p className="text-muted-foreground font-cyber-mono flex-grow">
              Helping businesses adapt and thrive in the digital age through strategic implementation of technology.
            </p>
            <div className="pt-4 border-t border-secondary/30">
              <h3 className="font-cyber mb-2 text-secondary">Services:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Business Analysis
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Process Automation
                </span>
                <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                  Cloud Migration
                </span>
              </div>
            </div>
          </CyberCard>
        </div>
      </AnimatedContainer>

      <AnimatedElement
        animation="fadeInUp"
        className="mt-16 p-8 bg-muted/20 rounded-lg border border-primary/50 neon-border cyber-grid"
      >
        <h2 className="text-2xl font-cyber mb-4 text-center">
          <GlitchText text="My Service Process" />
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 pulse">
              <span className="font-bold text-primary font-cyber">1</span>
            </div>
            <h3 className="font-cyber text-primary neon-text mb-2">Discovery</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">
              Understanding your business needs and project requirements
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 pulse-pink">
              <span className="font-bold text-secondary font-cyber">2</span>
            </div>
            <h3 className="font-cyber text-secondary neon-text-pink mb-2">Planning</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">
              Creating a detailed roadmap and technical specifications
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 pulse">
              <span className="font-bold text-primary font-cyber">3</span>
            </div>
            <h3 className="font-cyber text-primary neon-text mb-2">Execution</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">
              Developing and implementing the solution with regular updates
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 pulse-pink">
              <span className="font-bold text-secondary font-cyber">4</span>
            </div>
            <h3 className="font-cyber text-secondary neon-text-pink mb-2">Support</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">
              Ongoing maintenance and support to ensure long-term success
            </p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  )
}

