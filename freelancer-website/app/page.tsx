"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Laptop, Mail, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlitchText } from "@/components/glitch-text"
import { CyberCard } from "@/components/cyber-card"
import { AnimatedElement, AnimatedContainer } from "@/components/animated-element"
import { useEffect, useState } from "react"

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 cyber-grid relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <AnimatedContainer className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-cyber tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <GlitchText text="Louis JK Masiba" className="text-4xl sm:text-6xl xl:text-7xl" />
                </h1>
                <p className="text-xl text-secondary font-cyber-mono neon-text-pink">
                  Full-Stack Developer & IT Consultant
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-cyber-mono">
                I build <span className="text-primary neon-text">exceptional digital experiences</span> that solve real
                business problems. With over 5 years of experience in web development and IT consulting.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact" passHref>
                  <Button className="gap-1 cyber-button">
                    Get in Touch <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects" passHref>
                  <Button variant="secondary" className="cyber-button-pink">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
            <AnimatedElement animation="scaleIn" className="flex items-center justify-center">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-primary neon-border pulse">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Louis JK Masiba"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedElement>
          </AnimatedContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background cyber-grid-pink relative">
        <div className="container px-4 md:px-6">
          <AnimatedElement
            animation="fadeInUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-cyber tracking-tighter sm:text-5xl">
                <GlitchText text="My Services" variant="pink" />
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl font-cyber-mono">
                I offer a range of services to help businesses succeed in the digital world.
              </p>
            </div>
          </AnimatedElement>
          <AnimatedContainer className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <CyberCard className="flex flex-col p-6 space-y-4 bg-muted/20">
                <div className="p-2 bg-primary/10 w-fit rounded-full pulse">
                  <Code className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-cyber text-primary neon-text">Web Development</h3>
                <p className="text-muted-foreground font-cyber-mono">
                  Custom websites and web applications built with modern technologies.
                </p>
              </CyberCard>
            </div>
            <div>
              <CyberCard variant="pink" className="flex flex-col p-6 space-y-4 bg-muted/20">
                <div className="p-2 bg-secondary/10 w-fit rounded-full pulse-pink">
                  <Laptop className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-xl font-cyber text-secondary neon-text-pink">IT Consulting</h3>
                <p className="text-muted-foreground font-cyber-mono">
                  Strategic technology advice to optimize your business operations.
                </p>
              </CyberCard>
            </div>
            <div>
              <CyberCard className="flex flex-col p-6 space-y-4 bg-muted/20">
                <div className="p-2 bg-primary/10 w-fit rounded-full pulse">
                  <Rocket className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-cyber text-primary neon-text">Digital Transformation</h3>
                <p className="text-muted-foreground font-cyber-mono">
                  Helping businesses adapt and thrive in the digital age.
                </p>
              </CyberCard>
            </div>
          </AnimatedContainer>
          <AnimatedElement animation="fadeInUp" delay={0.6} className="flex justify-center mt-8">
            <Link href="/services" passHref>
              <Button variant="cyber-pink">View All Services</Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/10 cyber-grid relative">
        <div className="container px-4 md:px-6">
          <AnimatedElement
            animation="fadeInUp"
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-cyber tracking-tighter sm:text-5xl">
                <GlitchText text="Featured Projects" />
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl font-cyber-mono">
                Check out some of my recent work.
              </p>
            </div>
          </AnimatedElement>
          <AnimatedContainer className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <CyberCard className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="E-commerce Platform"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-background/80 backdrop-blur-sm">
                  <h3 className="font-cyber text-primary neon-text">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">
                    A full-featured online store with payment processing and inventory management.
                  </p>
                </div>
              </CyberCard>
            </div>
            <div>
              <CyberCard variant="pink" className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="CRM System"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-background/80 backdrop-blur-sm">
                  <h3 className="font-cyber text-secondary neon-text-pink">CRM System</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">
                    Custom customer relationship management system for a marketing agency.
                  </p>
                </div>
              </CyberCard>
            </div>
            <div>
              <CyberCard className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mobile App"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-background/80 backdrop-blur-sm">
                  <h3 className="font-cyber text-primary neon-text">Mobile App</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">
                    Cross-platform mobile application for a fitness startup.
                  </p>
                </div>
              </CyberCard>
            </div>
          </AnimatedContainer>
          <AnimatedElement animation="fadeInUp" delay={0.6} className="flex justify-center mt-8">
            <Link href="/projects" passHref>
              <Button variant="cyber">View All Projects</Button>
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background cyber-grid-pink relative animated-gradient">
        <div className="container px-4 md:px-6">
          <AnimatedContainer className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm font-cyber text-secondary">
                Let's Work Together
              </div>
              <h2 className="text-3xl font-cyber tracking-tighter md:text-4xl/tight">
                <GlitchText text="Have a project in mind?" variant="pink" />
                <br />
                <GlitchText text="Let's bring it to life." variant="pink" />
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-cyber-mono">
                I'm currently available for freelance work. If you have a project that needs some creative direction,
                I'd love to hear about it.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact" passHref>
                  <Button variant="cyber-pink" className="gap-1">
                    Contact Me <Mail className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <AnimatedElement animation="scaleIn" className="flex justify-center lg:justify-end">
              <CyberCard variant="pink" className="flex items-center space-x-4 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-cyber text-secondary neon-text-pink">70+</div>
                  <div className="text-sm text-muted-foreground font-cyber-mono">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-cyber text-secondary neon-text-pink">20+</div>
                  <div className="text-sm text-muted-foreground font-cyber-mono">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-cyber text-secondary neon-text-pink">5+</div>
                  <div className="text-sm text-muted-foreground font-cyber-mono">Years Experience</div>
                </div>
              </CyberCard>
            </AnimatedElement>
          </AnimatedContainer>
        </div>
      </section>
    </div>
  )
}

