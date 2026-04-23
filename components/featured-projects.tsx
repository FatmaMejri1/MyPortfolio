"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, ExternalLink, Gitlab } from "lucide-react"

const featuredProjects = [
  {
    title: "3D Marketplace with AI-Powered Recommendation Engine",
    problem: "Shopping for clothes online often leads to size mismatches and high return rates due to lack of physical fit visualization.",
    solution: "Developed a 3D marketplace featuring morphological body twins and a composite AI engine with six specialized services (NLP, Fit Detection, Preference Prediction, etc.).",
    impact: "Reduced return risk through precise morphology matching and personalized rankings, enhancing user confidence and shopping experience.",
    technologies: ["Python", "FastAPI", "Scikit-Learn", "Random Forest", "KNN", "TF-IDF", "Docker", "3D Modeling"],
    github: "https://github.com/FatmaMejri1/AI-Powered-Fashion-Marketplace",
    featured: true,
  },
  {
    title: "Smart Career Hub – Intelligent Web Platform with CI/CD & Microservices",
    problem: "Need for an intelligent platform to streamline recruitment and career management using AI.",
    solution: "Built a microservices-based platform integrating AI for CV generation and profile matching, with a robust CI/CD pipeline.",
    impact: "Automated CV processing and profile matching, achieving 90% faster processing and high scalability with Docker/GHCR.",
    technologies: ["Spring Boot", "Angular", "FastAPI", "Docker", "GitHub Actions", "NLP", "Generative AI", "PostgreSQL"],
    github: "https://github.com/FatmaMejri1/careerhub-intelligent-platform",
    gitlab: "https://gitlab.com/FatmaMejri1/smart-carrer-pipeline",
    featured: true,
  },
  {
    title: "MyLocal+ – GitOps-Oriented Microservices Platform",
    problem: "Lack of a scalable and automated local recommendation platform with modern DevOps practices.",
    solution: "Designed and implemented a microservices architecture with GitOps deployment using Argo CD and Kubernetes.",
    impact: "Achieved seamless automated deployments and high availability, ensuring 99.9% uptime and zero-downtime updates.",
    technologies: ["Symfony", "React", "MySQL", "Docker", "GitHub Actions", "GitOps", "Kubernetes", "Argo CD", "JWT"],
    github: "https://github.com/FatmaMejri1/MyLocal-Microservices-Based-Local-Recommendation-Platform",
    featured: true,
  },
  {
    title: "Smart Sales Analytics – Big Data Pipeline",
    problem: "Analyzing large-scale sales data in real-time to derive actionable business insights.",
    solution: "Architected a data pipeline on AWS (S3) with ETL processing using PySpark and visualization in Power BI.",
    impact: "Transformed raw sales data into real-time dashboards, enabling data-driven decision making for sales optimization.",
    technologies: ["AWS", "S3", "PySpark", "ETL", "Data Pipeline", "Star Schema", "Power BI"],
    github: "https://github.com/FatmaMejri1",
    featured: true,
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Featured Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Projects That Made an Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions that solved complex infrastructure challenges and delivered measurable business value.
            </p>
          </div>

          {/* Featured projects grid */}
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content side */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <div className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Problem</span>
                            <p className="text-muted-foreground text-sm mt-1">{project.problem}</p>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Solution</span>
                            <p className="text-muted-foreground text-sm mt-1">{project.solution}</p>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Impact</span>
                            <p className="text-foreground font-medium text-sm mt-1">{project.impact}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                          {(project as any).gitlab && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={(project as any).gitlab} target="_blank" rel="noopener noreferrer">
                                <Gitlab className="h-4 w-4 mr-2" />
                                GitLab
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button size="sm" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Visual side */}
                    <div className={`relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent min-h-[250px] lg:min-h-[400px] flex items-center justify-center ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%),linear-gradient(to_bottom,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%)] bg-[size:40px_40px] opacity-30" />
                      <div className="relative z-10 p-6">
                        <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center">
                          <ArrowUpRight className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
