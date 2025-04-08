"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { CyberCard } from "@/components/cyber-card"
import { AnimatedElement, AnimatedContainer } from "@/components/animated-element"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      // In a real application, you would send the form data to your server or a form service
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitError("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 cyber-grid">
      <AnimatedElement animation="fadeInDown" className="text-center mb-12">
        <h1 className="text-4xl font-cyber tracking-tight mb-4">
          <GlitchText text="Contact Me" />
        </h1>
        <p className="text-xl text-muted-foreground font-cyber-mono max-w-2xl mx-auto">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
        </p>
      </AnimatedElement>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <AnimatedElement animation="fadeInLeft">
          <CyberCard className="p-6">
            <h2 className="text-2xl font-cyber mb-6">
              <GlitchText text="Send Me a Message" />
            </h2>

            {submitSuccess ? (
              <div className="bg-primary/20 text-primary p-4 rounded-lg mb-6 font-cyber-mono border border-primary/50 neon-border">
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-cyber mb-2 text-primary">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="bg-background/50 border-primary/50 font-cyber-mono"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-cyber mb-2 text-primary">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 border-primary/50 font-cyber-mono"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-cyber mb-2 text-primary">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-background/50 border-primary/50 font-cyber-mono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-cyber mb-2 text-primary">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    className="bg-background/50 border-primary/50 font-cyber-mono"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-900/20 text-red-300 p-4 rounded-lg font-cyber-mono border border-red-500/50">
                    {submitError}
                  </div>
                )}

                <Button type="submit" variant="cyber" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CyberCard>
        </AnimatedElement>

        {/* Contact Information */}
        <AnimatedElement animation="fadeInRight" className="space-y-8">
          <CyberCard className="p-6">
            <h2 className="text-2xl font-cyber mb-6">
              <GlitchText text="Contact Information" variant="pink" />
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-cyber text-secondary">Email</h3>
                  <a
                    href="mailto:contact@johndoe.com"
                    className="text-muted-foreground hover:text-secondary font-cyber-mono"
                  >
                    kgalalelolm@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-cyber text-secondary">Phone</h3>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-secondary font-cyber-mono">
                    +27 (073) 683 4935
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                <div>
                  <h3 className="font-cyber text-secondary">Location</h3>
                  <p className="text-muted-foreground font-cyber-mono">Vanderbijlpark, Gauteng, RSA</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-secondary/30">
              <h3 className="font-cyber mb-4 text-secondary">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-primary/50 rounded-full hover:bg-primary/10 transition-colors hover-glow"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-secondary/50 rounded-full hover:bg-secondary/10 transition-colors hover-glow-pink"
                >
                  <Twitter className="h-5 w-5 text-secondary" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-primary/50 rounded-full hover:bg-primary/10 transition-colors hover-glow"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </CyberCard>

          <CyberCard variant="pink" className="p-6">
            <h2 className="text-2xl font-cyber mb-6">
              <GlitchText text="Availability" variant="pink" />
            </h2>
            <p className="text-muted-foreground mb-4 font-cyber-mono">
              I'm currently available for freelance work and new projects. My typical response time is within 24 hours.
            </p>
            <div className="space-y-2 font-cyber-mono">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-secondary">9:00 AM - 6:00 PM SAST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-secondary">By appointment</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-secondary">Closed</span>
              </div>
            </div>
          </CyberCard>
        </AnimatedElement>
      </div>

      {/* FAQ Section */}
      <AnimatedContainer className="mt-16">
        <h2 className="text-2xl font-cyber mb-6 text-center">
          <GlitchText text="Frequently Asked Questions" />
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <CyberCard className="p-6">
              <h3 className="font-cyber text-primary neon-text mb-2">What is your typical project process?</h3>
              <p className="text-muted-foreground font-cyber-mono">
                My process typically includes discovery, planning, design, development, testing, and launch phases. I
                maintain clear communication throughout the entire process.
              </p>
            </CyberCard>
          </div>
          <div>
            <CyberCard variant="pink" className="p-6">
              <h3 className="font-cyber text-secondary neon-text-pink mb-2">How do you charge for projects?</h3>
              <p className="text-muted-foreground font-cyber-mono">
                I offer both fixed-price quotes for well-defined projects and hourly rates for ongoing work. The pricing
                depends on the project scope and requirements.
              </p>
            </CyberCard>
          </div>
          <div>
            <CyberCard variant="pink" className="p-6">
              <h3 className="font-cyber text-secondary neon-text-pink mb-2">How long does a typical project take?</h3>
              <p className="text-muted-foreground font-cyber-mono">
                Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web
                application could take 2-3 months or more.
              </p>
            </CyberCard>
          </div>
          <div>
            <CyberCard className="p-6">
              <h3 className="font-cyber text-primary neon-text mb-2">Do you offer maintenance services?</h3>
              <p className="text-muted-foreground font-cyber-mono">
                Yes, I offer ongoing maintenance and support services to ensure your project continues to run smoothly
                after launch.
              </p>
            </CyberCard>
          </div>
        </div>
      </AnimatedContainer>
    </div>
  )
}

