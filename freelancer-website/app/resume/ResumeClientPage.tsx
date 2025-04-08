"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"
import { CyberCard } from "@/components/cyber-card"
import { AnimatedElement, AnimatedContainer } from "@/components/animated-element"
import { useState, useEffect } from "react"

export default function ResumeClientPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // Prevent hydration mismatch
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 cyber-grid">
      <div className="max-w-4xl mx-auto">
        <AnimatedElement
          animation="fadeInDown"
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-4xl font-cyber tracking-tight">
              <GlitchText text="Resume" />
            </h1>
            <p className="text-muted-foreground mt-2 font-cyber-mono">My professional experience and qualifications</p>
          </div>
          <Button variant="cyber" className="gap-2">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </AnimatedElement>

        <div className="space-y-12">
          {/* Profile Summary */}
          <AnimatedElement animation="fadeInUp" className="space-y-4">
            <h2 className="text-2xl font-cyber mb-4">
              <GlitchText text="Profile Summary" variant="pink" />
            </h2>
            <CyberCard variant="pink" className="p-6">
              <p className="font-cyber-mono">
                Full-stack developer and IT consultant with 5+ years of experience in designing, developing, and
                deploying web and mobile applications. Specialized in React, Next.js, Node.js, and cloud technologies.
                Proven track record of delivering high-quality solutions that drive business growth and enhance user
                experience.
              </p>
            </CyberCard>
          </AnimatedElement>

          {/* Work Experience */}
          <section>
            <AnimatedElement animation="fadeInLeft" className="text-2xl font-cyber mb-6">
              <GlitchText text="Work Experience" />
            </AnimatedElement>
            <AnimatedContainer className="space-y-8">
              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4375rem] top-1.5 pulse"></div>
                <h3 className="text-xl font-cyber text-primary neon-text">Freelance Developer & IT Consultant</h3>
                <p className="text-muted-foreground mb-2 font-cyber-mono">2019 - Present</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-cyber-mono">
                  <li>Developed and deployed 30+ web and mobile applications for clients across various industries.</li>
                  <li>Provided IT consulting services to help businesses optimize their technology infrastructure.</li>
                  <li>Implemented e-commerce solutions that increased client sales by an average of 35%.</li>
                  <li>Designed and developed custom CRM systems that improved client workflow efficiency by 40%.</li>
                  <li>Maintained long-term relationships with clients, with a 90% retention rate.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
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
                    AWS
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                    MongoDB
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-secondary pl-6 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[0.4375rem] top-1.5 pulse-pink"></div>
                <h3 className="text-xl font-cyber text-secondary neon-text-pink">
                  Senior Developer at LELOTech.
                </h3>
                <p className="text-muted-foreground mb-2 font-cyber-mono">2016 - 2019</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-cyber-mono">
                  <li>Led a team of 5 developers working on enterprise applications.</li>
                  <li>Architected and implemented scalable backend solutions using Node.js and AWS.</li>
                  <li>Reduced application load time by 60% through performance optimization techniques.</li>
                  <li>Implemented CI/CD pipelines that reduced deployment time by 75%.</li>
                  <li>Conducted code reviews to ensure code quality.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                    React
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                    AWS
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                    PostgreSQL
                  </span>
                  <span className="px-2 py-1 bg-secondary/10 text-xs rounded-md font-cyber-mono border border-secondary/50">
                    Docker
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4375rem] top-1.5 pulse"></div>
                <h3 className="text-xl font-cyber text-primary neon-text">Web Developer at LELOTech</h3>
                <p className="text-muted-foreground mb-2 font-cyber-mono">2017 - 2023</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground font-cyber-mono">
                  <li>Developed responsive websites and web applications for various clients.</li>
                  <li>Collaborated with designers to implement pixel-perfect UI designs.</li>
                  <li>Built custom WordPress themes and plugins for content management.</li>
                  <li>Implemented SEO best practices that improved client search rankings.</li>
                  <li>Participated in client meetings to gather requirements and provide technical insights.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                    PHP
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                    WordPress
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                    MySQL
                  </span>
                  <span className="px-2 py-1 bg-primary/10 text-xs rounded-md font-cyber-mono border border-primary/50">
                    HTML/CSS
                  </span>
                </div>
              </div>
            </AnimatedContainer>
          </section>

          {/* Education */}
          <section>
            <AnimatedElement animation="fadeInLeft" className="text-2xl font-cyber mb-6">
              <GlitchText text="Education" variant="pink" />
            </AnimatedElement>
            <AnimatedContainer className="space-y-6">
              <div className="border-l-4 border-secondary pl-6 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[0.4375rem] top-1.5 pulse-pink"></div>
                <h3 className="text-xl font-cyber text-secondary neon-text-pink">Diploma in IT</h3>
                <p className="text-muted-foreground font-cyber-mono">Central University of Technology, 2023</p>
                <p className="mt-2 font-cyber-mono">
                  Graduated in the Top 15%, with specialisation in Software Development.
                </p>
              </div>
            </AnimatedContainer>
          </section>

          {/* Skills */}
          <section>
            <AnimatedElement animation="fadeInLeft" className="text-2xl font-cyber mb-6">
              <GlitchText text="Skills" />
            </AnimatedElement>
            <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CyberCard className="p-6">
                  <h3 className="font-cyber text-primary neon-text mb-3">Frontend Development</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">React/Next.js</span>
                        <span className="text-sm font-cyber-mono">95%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full pulse" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">JavaScript/TypeScript</span>
                        <span className="text-sm font-cyber-mono">90%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full pulse" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">HTML/CSS/Tailwind</span>
                        <span className="text-sm font-cyber-mono">95%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full pulse" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">Vue.js</span>
                        <span className="text-sm font-cyber-mono">80%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full pulse" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              </div>
              <div>
                <CyberCard variant="pink" className="p-6">
                  <h3 className="font-cyber text-secondary neon-text-pink mb-3">Backend Development</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">Node.js/Express</span>
                        <span className="text-sm font-cyber-mono">90%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full pulse-pink" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">MongoDB/PostgreSQL</span>
                        <span className="text-sm font-cyber-mono">85%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full pulse-pink" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">GraphQL</span>
                        <span className="text-sm font-cyber-mono">80%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full pulse-pink" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">AWS/Cloud Services</span>
                        <span className="text-sm font-cyber-mono">85%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full pulse-pink" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              </div>
              <div>
                <CyberCard variant="pink" className="p-6">
                  <h3 className="font-cyber text-secondary neon-text-pink mb-3">Mobile Development</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">React Native</span>
                        <span className="text-sm font-cyber-mono">85%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full pulse-pink" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">Flutter</span>
                        <span className="text-sm font-cyber-mono">70%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full pulse-pink" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              </div>
              <div>
                <CyberCard className="p-6">
                  <h3 className="font-cyber text-primary neon-text mb-3">Other Skills</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">UI/UX Design</span>
                        <span className="text-sm font-cyber-mono">80%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full pulse" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">DevOps/CI/CD</span>
                        <span className="text-sm font-cyber-mono">75%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full pulse" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-cyber-mono">Project Management</span>
                        <span className="text-sm font-cyber-mono">85%</span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full pulse" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              </div>
            </AnimatedContainer>
          </section>

          {/* Certifications */}
          <section>
            <AnimatedElement animation="fadeInLeft" className="text-2xl font-cyber mb-6">
              <GlitchText text="Certifications" variant="pink" />
            </AnimatedElement>
            <AnimatedContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <CyberCard variant="pink" className="p-4">
                  <h3 className="font-cyber text-secondary neon-text-pink">AWS Certified Solutions Architect</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">Amazon Web Services, 2021</p>
                </CyberCard>
              </div>
              <div>
                <CyberCard className="p-4">
                  <h3 className="font-cyber text-primary neon-text">Professional Scrum Master I</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">Scrum.org, 2020</p>
                </CyberCard>
              </div>
              <div>
                <CyberCard className="p-4">
                  <h3 className="font-cyber text-primary neon-text">Google Cloud Professional Developer</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">Google, 2019</p>
                </CyberCard>
              </div>
              <div>
                <CyberCard variant="pink" className="p-4">
                  <h3 className="font-cyber text-secondary neon-text-pink">MongoDB Certified Developer</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">MongoDB, 2018</p>
                </CyberCard>
              </div>
            </AnimatedContainer>
          </section>

          {/* Languages */}
          <section>
            <AnimatedElement animation="fadeInLeft" className="text-2xl font-cyber mb-6">
              <GlitchText text="Languages" />
            </AnimatedElement>
            <AnimatedContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <CyberCard className="p-4">
                  <h3 className="font-cyber text-primary neon-text">English</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">Native</p>
                </CyberCard>
              </div>
              <div>
                <CyberCard variant="pink" className="p-4">
                  <h3 className="font-cyber text-secondary neon-text-pink">Afrikaans</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">Professional Proficiency</p>
                </CyberCard>
              </div>
              <div>
                <CyberCard className="p-4">
                  <h3 className="font-cyber text-primary neon-text">Zulu</h3>
                  <p className="text-sm text-muted-foreground font-cyber-mono">Basic</p>
                </CyberCard>
              </div>
            </AnimatedContainer>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-cyber mb-4">
              <GlitchText text="References" variant="pink" />
            </h2>
            <p className="text-muted-foreground font-cyber-mono">Available upon request.</p>
          </section>
        </div>

        {/* Call to Action */}
        <AnimatedElement animation="fadeInUp" className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 font-cyber-mono">Interested in working together?</p>
          <Link href="/contact" passHref>
            <Button variant="cyber" size="lg">
              Contact Me
            </Button>
          </Link>
        </AnimatedElement>
      </div>
    </div>
  )
}

