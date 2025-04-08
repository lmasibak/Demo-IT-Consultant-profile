"use client"

import Image from "next/image"
import { Calendar, Code, Cpu, Database, Globe, Lightbulb, Server } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { CyberCard } from "@/components/cyber-card"
import { AnimatedElement, AnimatedContainer } from "@/components/animated-element"
import { useState, useEffect } from "react"

export default function AboutPageClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 cyber-grid">
      <div className="grid gap-12 lg:grid-cols-2">
        <AnimatedElement animation="fadeInLeft" className="space-y-4">
          <h1 className="text-4xl font-cyber tracking-tight mb-6">
            <GlitchText text="About Me" />
          </h1>
          <div className="space-y-4 font-cyber-mono">
            <p>
              Hello! I'm <span className="text-primary neon-text">Louis Jk Masiba</span>, a passionate full-stack developer and
              IT consultant with over 8 years of experience in the industry. I specialize in creating robust, scalable,
              and user-friendly digital solutions for businesses of all sizes.
            </p>
            <p>
              My journey in technology began when I was 12 years old, tinkering with HTML and CSS to build my first
              website. That early fascination with creating things on the internet evolved into a lifelong passion and
              career.
            </p>
            <p>
              After graduating with a degree in Computer Science from Tech University, I worked for several tech
              companies before deciding to pursue freelancing full-time. This decision allowed me to work on a diverse
              range of projects and continuously expand my skill set.
            </p>
            <p>
              When I'm not coding, you can find me hiking in the mountains, reading science fiction, or experimenting
              with new technologies. I believe in continuous learning and staying updated with the latest trends in the
              tech world.
            </p>
          </div>

          <h2 className="text-2xl font-cyber mt-10 mb-4">
            <GlitchText text="My Approach" variant="pink" />
          </h2>
          <div className="space-y-4 font-cyber-mono">
            <p>
              I believe in a collaborative approach to projects. I work closely with my clients to understand their
              business goals, target audience, and specific requirements. This ensures that the final product not only
              looks great but also delivers tangible results.
            </p>
            <p>
              Quality, reliability, and attention to detail are at the core of everything I do. I'm committed to
              delivering projects on time and within budget, without compromising on quality.
            </p>
          </div>
        </AnimatedElement>

        <div className="space-y-8">
          <AnimatedElement animation="scaleIn" className="relative overflow-hidden rounded-lg">
            <CyberCard className="p-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="John Doe"
                width={800}
                height={600}
                className="object-cover rounded-lg"
              />
            </CyberCard>
          </AnimatedElement>

          <AnimatedContainer className="space-y-6">
            <h2 className="text-2xl font-cyber">
              <GlitchText text="Technical Skills" />
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                <span className="font-cyber-mono">JavaScript/TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-secondary" />
                <span className="font-cyber-mono">React/Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <span className="font-cyber-mono">Node.js/Express</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-secondary" />
                <span className="font-cyber-mono">SQL/NoSQL Databases</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <span className="font-cyber-mono">DevOps/AWS</span>
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-secondary" />
                <span className="font-cyber-mono">UI/UX Design</span>
              </div>
            </div>
          </AnimatedContainer>

          <AnimatedContainer className="space-y-6">
            <h2 className="text-2xl font-cyber">
              <GlitchText text="Experience Timeline" variant="pink" />
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-cyber text-secondary neon-text-pink">Freelance Developer & IT Consultant</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">2019 - Present</p>
                  <p className="mt-1 font-cyber-mono">
                    Working with clients globally on web development and IT consulting projects.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-cyber text-primary neon-text">Senior Developer at Tech Solutions Inc.</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">2016 - 2019</p>
                  <p className="mt-1 font-cyber-mono">Led a team of developers working on enterprise applications.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-cyber text-secondary neon-text-pink">Web Developer at Digital Agency</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">2014 - 2016</p>
                  <p className="mt-1 font-cyber-mono">Developed websites and web applications for various clients.</p>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  )
}

