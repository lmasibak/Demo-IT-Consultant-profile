import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { GlitchText } from "@/components/glitch-text"

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/50 py-6 md:py-0 cyber-grid">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-sm text-muted-foreground font-cyber-mono">
          &copy; {new Date().getFullYear()} <GlitchText text="Louis JK Masiba" variant="cyan" className="text-xs" />. All
          rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glow p-1 rounded-full"
          >
            <Github className="h-5 w-5 text-primary hover:text-primary transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glow-pink p-1 rounded-full"
          >
            <Twitter className="h-5 w-5 text-secondary hover:text-secondary transition-colors" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-glow p-1 rounded-full"
          >
            <Linkedin className="h-5 w-5 text-primary hover:text-primary transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:contact@johndoe.com" className="hover-glow-yellow p-1 rounded-full">
            <Mail className="h-5 w-5 text-accent hover:text-accent transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

