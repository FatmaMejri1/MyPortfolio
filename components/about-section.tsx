"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <section id="about" className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,var(--primary-muted),transparent_70%)] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-primary font-mono text-sm tracking-wider uppercase">My Story</span>
                <h2 className="text-3xl sm:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight">
                  Bridging the gap between <span className="text-primary">Development</span> and <span className="text-primary">Operations</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I am a Software Engineering student at <span className="text-foreground font-semibold">TEK-UP</span> with a relentless passion for infrastructure automation and cloud-native solutions. My journey is defined by a curiosity for how complex systems work and a drive to make them more efficient.
                  </p>
                  <p>
                    Specializing in <span className="text-foreground font-semibold">DevOps & Cloud</span>, I focus on building resilient CI/CD pipelines, containerized environments, and scalable cloud architectures. I believe that great software isn&apos;t just about the code—it&apos;s about how that code is delivered, managed, and scaled in production.
                  </p>
                  <p>
                    Whether I&apos;m architecting multi-tier AWS environments or fine-tuning GitLab CI pipelines, my goal remains the same: to deliver high-quality, high-availability technical solutions that solve real-world challenges.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["Rigorous", "Team Player", "Problem Solver", "Curious Learner"].map((trait) => (
                  <Badge key={trait} variant="secondary" className="px-4 py-1.5 text-sm font-medium bg-primary/5 border-primary/10 text-primary">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Visual/Quick Facts Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent blur-2xl opacity-50" />
                <Card className="relative bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden shadow-2xl">
                  <CardContent className="p-8 space-y-8">
                    <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">Core Principles</h3>
                    
                    <div className="space-y-6">
                      {[
                        { icon: Zap, title: "Automation First", desc: "If it can be automated, it should be." },
                        { icon: Server, title: "Scalability", desc: "Systems that grow gracefully with demand." },
                        { icon: Cloud, title: "Cloud Native", desc: "Modern solutions for modern infrastructures." },
                        { icon: GitBranch, title: "GitOps", desc: "Infrastructure as code, versioned and controlled." }
                      ].map((principle, i) => (
                        <div key={i} className="flex gap-4 group">
                          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <principle.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground leading-tight">{principle.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{principle.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">Community Involvement</div>
                      <div className="flex flex-wrap gap-2">
                        {["SecuriNets", "Maker Labs", "Klustra"].map((club) => (
                          <Badge key={club} variant="outline" className="font-mono text-xs">
                            {club}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
