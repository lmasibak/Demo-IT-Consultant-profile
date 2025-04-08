"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { CyberCard } from "@/components/cyber-card"
import { AnimatedElement, AnimatedContainer } from "@/components/animated-element"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with payment processing and inventory management for a fashion retailer.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    variant: "cyan",
  },
  {
    title: "CRM System",
    description:
      "Custom customer relationship management system for a marketing agency to track clients and campaigns.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Express", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    variant: "pink",
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for a fitness startup that tracks workouts and nutrition.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    variant: "cyan",
  },
  {
    title: "Real Estate Website",
    description: "Property listing and search platform with advanced filtering and user accounts.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    variant: "pink",
  },
  {
    title: "Healthcare Dashboard",
    description: "Admin dashboard for healthcare providers to manage patient data and appointments.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Chart.js", "Auth0"],
    liveUrl: "#",
    githubUrl: "#",
    variant: "cyan",
  },
  {
    title: "Educational Platform",
    description: "Online learning platform with course management, video lessons, and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    variant: "pink",
  },
]

export default function ProjectsPageClient() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
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
          <GlitchText text="My Projects" />
        </h1>
        <p className="text-xl text-muted-foreground font-cyber-mono">
          A showcase of my recent work, including web applications, mobile apps, and other digital solutions.
        </p>
      </AnimatedElement>

      {/* Featured Projects */}
      <div className="mb-16">
        <AnimatedElement animation="fadeInLeft" className="text-2xl font-cyber mb-8">
          <GlitchText text="Featured Projects" variant="pink" />
        </AnimatedElement>
        <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div key={index}>
              <CyberCard
                variant={project.variant === "pink" ? "pink" : "cyan"}
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6 bg-background/80 backdrop-blur-sm">
                  <h3
                    className={`text-xl font-cyber mb-2 ${project.variant === "pink" ? "text-secondary neon-text-pink" : "text-primary neon-text"}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-cyber-mono mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs rounded-md font-cyber-mono border ${
                          project.variant === "pink"
                            ? "bg-secondary/10 border-secondary/50"
                            : "bg-primary/10 border-primary/50"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link href={project.liveUrl} passHref>
                      <Button variant={project.variant === "pink" ? "cyber-pink" : "cyber"} size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Button>
                    </Link>
                    <Link href={project.githubUrl} passHref>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </CyberCard>
            </div>
          ))}
        </AnimatedContainer>
      </div>

      {/* Other Projects */}
      <div>
        <AnimatedElement animation="fadeInLeft" className="text-2xl font-cyber mb-8">
          <GlitchText text="More Projects" />
        </AnimatedElement>
        <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <div key={index}>
              <CyberCard
                variant={project.variant === "pink" ? "pink" : "cyan"}
                className="group relative flex flex-col overflow-hidden rounded-lg"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6 bg-background/80 backdrop-blur-sm">
                  <h3
                    className={`text-xl font-cyber mb-2 ${project.variant === "pink" ? "text-secondary neon-text-pink" : "text-primary neon-text"}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-cyber-mono mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 text-xs rounded-md font-cyber-mono border ${
                          project.variant === "pink"
                            ? "bg-secondary/10 border-secondary/50"
                            : "bg-primary/10 border-primary/50"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Link href={project.liveUrl} passHref>
                      <Button variant={project.variant === "pink" ? "cyber-pink" : "cyber"} size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </Button>
                    </Link>
                    <Link href={project.githubUrl} passHref>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Github className="h-4 w-4" /> Code
                      </Button>
                    </Link>
                  </div>
                </div>
              </CyberCard>
            </div>
          ))}
        </AnimatedContainer>
      </div>

      {/* Project Process */}
      <AnimatedElement
        animation="fadeInUp"
        className="mt-16 p-8 bg-muted/20 rounded-lg border border-primary/50 neon-border cyber-grid"
      >
        <h2 className="text-2xl font-cyber mb-6 text-center">
          <GlitchText text="My Project Process" variant="pink" />
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 pulse">
              <span className="font-bold text-primary font-cyber">1</span>
            </div>
            <h3 className="font-cyber text-primary neon-text mb-2">Research</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">Understanding the problem and user needs</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 pulse-pink">
              <span className="font-bold text-secondary font-cyber">2</span>
            </div>
            <h3 className="font-cyber text-secondary neon-text-pink mb-2">Design</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">Creating wireframes and visual designs</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 pulse">
              <span className="font-bold text-primary font-cyber">3</span>
            </div>
            <h3 className="font-cyber text-primary neon-text mb-2">Development</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">
              Building the solution with clean, efficient code
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 pulse-pink">
              <span className="font-bold text-secondary font-cyber">4</span>
            </div>
            <h3 className="font-cyber text-secondary neon-text-pink mb-2">Launch</h3>
            <p className="text-sm text-muted-foreground font-cyber-mono">Testing, deployment, and ongoing support</p>
          </div>
        </div>
      </AnimatedElement>

      {/* Call to Action */}
      <AnimatedElement animation="fadeInUp" className="mt-16 text-center">
        <h2 className="text-2xl font-cyber mb-4">
          <GlitchText text="Have a project in mind?" />
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-cyber-mono">
          I'm always open to discussing new projects and creative ideas. Let's create something amazing together.
        </p>
        <Link href="/contact" passHref>
          <Button variant="cyber" size="lg" className="cyber-button">
            Get in Touch
          </Button>
        </Link>
      </AnimatedElement>
    </div>
  )
}

