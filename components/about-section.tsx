"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Cloud, GitBranch, Server, Zap } from "lucide-react"

const highlights = [
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Architecting solutions across AWS, GCP, and Azure with focus on scalability and cost optimization.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Expert",
    description: "Designing automated pipelines that ship code reliably from development to production.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Managing infrastructure through Terraform and Ansible for reproducible, version-controlled environments.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Implementing monitoring and observability to ensure systems run at peak efficiency.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Passionate Software Engineer | DevOps & Cloud Focused
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Software Engineering student focused on DevOps and Cloud, with practical experience in academic projects and hackathons. 
              Strong skills in CI/CD, automation, and modern cloud tools. Rigorous, curious, and a team player, 
              dedicated to contributing and growing in stimulating technical environments.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Story */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">
                  My journey in tech is driven by a deep interest in infrastructure automation and cloud-native architectures. 
                  As a Software Engineering student at TEK-UP, I have specialized in bridging the gap between 
                  development and operations through robust CI/CD pipelines and containerization.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of automation to create efficient, reliable, and scalable systems. 
                  Whether it&apos;s managing Kubernetes clusters, architecting cloud solutions on AWS and Azure, 
                  or implementing GitOps workflows, I focus on delivering high-value technical solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I am actively involved in the tech community as a member of SecuriNets, Maker Labs, and Klustra. 
                  My goal is to continuously learn and apply emerging technologies to solve real-world infrastructure challenges.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime Achieved</div>
                </div>
              </div>
            </div>

            {/* Right column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <Card key={item.title} className="group hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
