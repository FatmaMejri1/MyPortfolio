"use client"

import Link from "next/link"
import { Terminal, Github, Linkedin, Mail, Heart, Gitlab } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
  ],
  resources: [
    { label: "Certifications", href: "#certifications" },
    { label: "GitHub", href: "#github" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/FatmaMejri1", icon: Github },
    { label: "GitLab", href: "https://gitlab.com/FatmaMejri1", icon: Gitlab },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fatma-mejri-a63652219/", icon: Linkedin },
    { label: "Email", href: "mailto:fatma.mjr11@gmail.com", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Terminal className="h-5 w-5" />
              </div>
              <span className="font-semibold text-foreground">MEJRI Fatma</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Building resilient infrastructure and empowering teams through automation.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter or CTA */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Follow my journey in DevOps and cloud engineering.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              Get in touch
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MEJRI Fatma. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3.5 w-3.5 text-primary" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
