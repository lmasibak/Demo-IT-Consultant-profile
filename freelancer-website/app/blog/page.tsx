"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { CyberCard } from "@/components/cyber-card"
import { AnimatedElement, AnimatedContainer } from "@/components/animated-element"
import { useState, useEffect } from "react"

const blogPosts = [
  {
    title: "10 Essential Tips for Modern Web Development",
    excerpt:
      "Learn the most important practices for building fast, accessible, and maintainable web applications in 2023.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 15, 2023",
    readTime: "8 min read",
    tags: ["Web Development", "Best Practices"],
    slug: "essential-web-development-tips",
    variant: "cyan",
  },
  {
    title: "The Future of JavaScript: What's Coming in 2023 and Beyond",
    excerpt: "Explore the upcoming features and trends in JavaScript that will shape the future of web development.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 22, 2023",
    readTime: "10 min read",
    tags: ["JavaScript", "Web Development"],
    slug: "future-of-javascript",
    variant: "pink",
  },
  {
    title: "Building Scalable Backend Systems with Node.js",
    excerpt: "A comprehensive guide to architecting backend systems that can handle growth and high traffic.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 10, 2023",
    readTime: "12 min read",
    tags: ["Node.js", "Backend", "Architecture"],
    slug: "scalable-nodejs-backends",
    variant: "cyan",
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Learn how to identify and fix performance bottlenecks in your React applications.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 5, 2023",
    readTime: "9 min read",
    tags: ["React", "Performance", "Optimization"],
    slug: "react-performance-optimization",
    variant: "pink",
  },
  {
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt: "A beginner-friendly guide to TypeScript and how it can improve your JavaScript development workflow.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 12, 2022",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript"],
    slug: "typescript-for-javascript-developers",
    variant: "cyan",
  },
  {
    title: "The Complete Guide to Modern CSS Techniques",
    excerpt:
      "Explore the latest CSS features and techniques that make styling modern websites easier and more powerful.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 28, 2022",
    readTime: "11 min read",
    tags: ["CSS", "Web Design"],
    slug: "modern-css-techniques",
    variant: "pink",
  },
]

export default function BlogPage() {
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
          <GlitchText text="Blog & Resources" />
        </h1>
        <p className="text-xl text-muted-foreground font-cyber-mono">
          Insights, tutorials, and resources about web development, IT consulting, and technology.
        </p>
      </AnimatedElement>

      {/* Featured Post */}
      <AnimatedElement animation="fadeInUp" className="mb-16">
        <CyberCard className="group relative overflow-hidden rounded-lg">
          <div className="aspect-[2/1] overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Featured blog post"
              width={1200}
              height={600}
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:p-8 bg-background/80 backdrop-blur-sm">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center text-xs bg-primary/20 text-primary px-2 py-1 rounded-md border border-primary/50 font-cyber-mono">
                <Tag className="mr-1 h-3 w-3" /> Featured
              </span>
              <span className="inline-flex items-center text-xs text-muted-foreground font-cyber-mono">
                <Calendar className="mr-1 h-3 w-3" /> May 1, 2023
              </span>
              <span className="inline-flex items-center text-xs text-muted-foreground font-cyber-mono">
                <Clock className="mr-1 h-3 w-3" /> 15 min read
              </span>
            </div>
            <h2 className="text-2xl font-cyber mb-3 text-primary neon-text">
              <GlitchText text="How Digital Transformation is Reshaping Business in 2023" />
            </h2>
            <p className="text-muted-foreground mb-6 font-cyber-mono">
              An in-depth look at how businesses are leveraging technology to innovate, adapt, and thrive in an
              increasingly digital world. Learn about the key trends, challenges, and opportunities in digital
              transformation.
            </p>
            <Link href="/blog/digital-transformation-2023" passHref>
              <Button variant="cyber" className="gap-1">
                Read Article <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CyberCard>
      </AnimatedElement>

      {/* Blog Posts Grid */}
      <AnimatedContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index}>
            <CyberCard
              variant={post.variant === "pink" ? "pink" : "cyan"}
              className="group relative flex flex-col overflow-hidden rounded-lg"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow p-6 bg-background/80 backdrop-blur-sm">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`inline-flex items-center text-xs rounded-md px-2 py-1 font-cyber-mono border ${
                        post.variant === "pink"
                          ? "bg-secondary/10 border-secondary/50"
                          : "bg-primary/10 border-primary/50"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3
                  className={`text-xl font-cyber mb-2 ${post.variant === "pink" ? "text-secondary neon-text-pink" : "text-primary neon-text"}`}
                >
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow font-cyber-mono">{post.excerpt}</p>
                <div className="flex items-center text-xs text-muted-foreground mt-auto mb-4 font-cyber-mono">
                  <span className="inline-flex items-center">
                    <Calendar className="mr-1 h-3 w-3" /> {post.date}
                  </span>
                  <span className="inline-flex items-center ml-4">
                    <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`} passHref>
                  <Button variant={post.variant === "pink" ? "cyber-pink" : "cyber"} className="gap-1 w-full">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CyberCard>
          </div>
        ))}
      </AnimatedContainer>

      {/* Categories */}
      <AnimatedElement animation="fadeInUp" className="mt-16">
        <h2 className="text-2xl font-cyber mb-6">
          <GlitchText text="Categories" variant="pink" />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/blog/category/web-development" passHref>
            <CyberCard className="p-4 text-center hover-glow">
              <h3 className="font-cyber text-primary neon-text">Web Development</h3>
              <p className="text-sm text-muted-foreground font-cyber-mono">12 articles</p>
            </CyberCard>
          </Link>
          <Link href="/blog/category/javascript" passHref>
            <CyberCard variant="pink" className="p-4 text-center hover-glow-pink">
              <h3 className="font-cyber text-secondary neon-text-pink">JavaScript</h3>
              <p className="text-sm text-muted-foreground font-cyber-mono">8 articles</p>
            </CyberCard>
          </Link>
          <Link href="/blog/category/design" passHref>
            <CyberCard className="p-4 text-center hover-glow">
              <h3 className="font-cyber text-primary neon-text">Design</h3>
              <p className="text-sm text-muted-foreground font-cyber-mono">6 articles</p>
            </CyberCard>
          </Link>
          <Link href="/blog/category/backend" passHref>
            <CyberCard variant="pink" className="p-4 text-center hover-glow-pink">
              <h3 className="font-cyber text-secondary neon-text-pink">Backend</h3>
              <p className="text-sm text-muted-foreground font-cyber-mono">5 articles</p>
            </CyberCard>
          </Link>
        </div>
      </AnimatedElement>

      {/* Newsletter */}
      <AnimatedElement
        animation="fadeInUp"
        className="mt-16 p-8 bg-muted/20 rounded-lg border border-primary/50 neon-border cyber-grid"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-cyber mb-4">
            <GlitchText text="Subscribe to My Newsletter" />
          </h2>
          <p className="text-muted-foreground mb-6 font-cyber-mono">
            Get the latest articles, tutorials, and resources delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md bg-background/50 border border-primary/50 font-cyber-mono focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button variant="cyber" type="submit">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4 font-cyber-mono">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </AnimatedElement>
    </div>
  )
}

