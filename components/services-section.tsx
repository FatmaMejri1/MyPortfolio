"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitBranch, Cloud, Server, Shield, Activity, Rocket } from "lucide-react"

const services = [
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Design",
    description: "Design and implement automated deployment pipelines that reduce release cycles from weeks to hours with built-in quality gates.",
    features: ["Automated testing", "Security scanning", "Multi-environment deployments", "Rollback capabilities"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Design scalable, cost-effective cloud infrastructure on AWS, GCP, or Azure with focus on reliability and performance.",
    features: ["Multi-region setups", "Disaster recovery", "Cost optimization", "Security hardening"],
  },
  {
    icon: Server,
    title: "Kubernetes Solutions",
    description: "Deploy and manage production Kubernetes clusters with GitOps workflows, monitoring, and auto-scaling.",
    features: ["Cluster setup", "Helm charts", "Service mesh", "Observability"],
  },
  {
    icon: Shield,
    title: "DevSecOps Integration",
    description: "Embed security practices throughout the development lifecycle with automated scanning and compliance checks.",
    features: ["Vulnerability scanning", "Secret management", "Compliance automation", "Security monitoring"],
  },
  {
    icon: Activity,
    title: "Monitoring & Observability",
    description: "Implement comprehensive monitoring solutions with alerting, dashboards, and SLO tracking for proactive operations.",
    features: ["Metrics collection", "Log aggregation", "Distributed tracing", "Alert management"],
  },
  {
    icon: Rocket,
    title: "Platform Engineering",
    description: "Build internal developer platforms that accelerate delivery and improve developer experience through self-service.",
    features: ["Self-service portals", "Golden paths", "Platform APIs", "Documentation"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">What I Offer</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Services & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From designing cloud architectures to implementing CI/CD pipelines, 
              I help organizations build reliable, scalable infrastructure.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need help with your infrastructure or DevOps challenges?
            </p>
            <Button size="lg" asChild>
              <a href="#contact">Let&apos;s Discuss Your Project</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
