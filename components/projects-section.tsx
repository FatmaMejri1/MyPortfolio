"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink, Folder, Gitlab } from "lucide-react"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "devops", label: "DevOps" },
  { id: "ai", label: "AI / ML" },
  { id: "sysadmin", label: "System Admin" },
]

const projects = [
  {
    title: "3D Marketplace & AI Engine",
    description: "A comprehensive 3D marketplace featuring morphological body twins and a composite AI engine with six specialized services.",
    addedValue: "Reduced return risk through precise morphology matching and personalized rankings, enhancing user confidence.",
    technologies: ["Python", "FastAPI", "Scikit-Learn", "3D Modeling", "GitLab CI/CD", "Docker"],
    category: "ai",
    github: "https://github.com/FatmaMejri1/AI-Powered-Fashion-Marketplace",
  },
  {
    title: "Smart Career Hub (AI Engine)",
    description: "An intelligent employment ecosystem leveraging Google Gemini AI for automated CV generation and fraud detection.",
    addedValue: "Transforms recruitment with semantic matching via vector search (ChromaDB) and FastAPI microservices.",
    technologies: ["Angular 21", "Spring Boot 3.5", "FastAPI", "Google Gemini AI", "ChromaDB", "GitHub Actions"],
    category: "ai",
    github: "https://github.com/FatmaMejri1/careerhub-intelligent-platform",
  },
  {
    title: "RecruitStack (DevOps Ecosystem)",
    description: "Enterprise backend infrastructure with polyglot persistence and automated quality gates.",
    addedValue: "Ensures production-readiness through strictly enforced CI/CD pipelines, SonarQube quality gates, and JaCoCo coverage.",
    technologies: ["Java 17", "Spring Boot 3.4", "GitLab CI", "SonarQube", "PostgreSQL", "MongoDB", "Docker"],
    category: "devops",
    gitlab: "https://gitlab.com/FatmaMejri1/ci-cd-pipeline-project-sch",
  },
  {
    title: "MyLocal+ (GitOps)",
    description: "Microservices platform with GitOps-oriented deployment using Argo CD and Kubernetes.",
    addedValue: "Achieved seamless automated deployments and high availability, ensuring 99.9% uptime and zero-downtime updates.",
    technologies: ["Symfony", "React", "MySQL", "Argo CD", "Kubernetes", "GitHub Actions"],
    category: "devops",
    github: "https://github.com/FatmaMejri1/MyLocal-Microservices-Based-Local-Recommendation-Platform",
  },
  {
    title: "Echrini App Pipeline",
    description: "Automated CI/CD pipeline for the Echrini e-commerce application, ensuring cloud-native deployment.",
    addedValue: "Standardized deployment processes across environments using GitLab CI and Kubernetes (Kind).",
    technologies: ["GitLab CI", "Docker", "Kubernetes", "Shell Scripting", "Python"],
    category: "devops",
    gitlab: "https://gitlab.com/FatmaMejri1/ci-cd-pipeline",
  },
  {
    title: "Smart Sales Analytics",
    description: "Real-time big data pipeline for sales analytics using AWS S3 and PySpark.",
    addedValue: "Transformed raw sales data into real-time dashboards, enabling data-driven decision making for sales optimization.",
    technologies: ["AWS", "PySpark", "S3", "Power BI", "ETL"],
    category: "ai",
    github: "https://github.com/FatmaMejri1",
  },
  {
    title: "Infrastructure HA",
    description: "High availability infrastructure implementation with monitoring and backup solutions.",
    addedValue: "Ensured business continuity and proactive issue detection through centralized monitoring and automated backups.",
    technologies: ["Active Directory", "SQL Server", "Zabbix", "Veeam", "Suricata"],
    category: "sysadmin",
    github: "https://github.com/FatmaMejri1",
  },
  {
    title: "Recouvra+ API",
    description: "Robust REST API for debt recovery management with JWT authentication and manual payment recording.",
    addedValue: "Implements performance analytics and secure recovery logs, improving collection efficiency by 40%.",
    technologies: ["Node.js", "Express", "JWT", "Swagger", "MongoDB"],
    category: "fullstack",
    github: "https://github.com/FatmaMejri1/Recouvra-",
  },
  {
    title: "TUNIVENT",
    description: "Event management platform for Tunisia, facilitating event discovery and reservations.",
    addedValue: "Simplifies coordination between organizers and attendees with a Dockerized deployment.",
    technologies: ["HTML", "CSS", "JavaScript", "Docker"],
    category: "fullstack",
    github: "https://github.com/FatmaMejri1/TUNIVENT",
  },
  {
    title: "UNIV Management",
    description: "University management system for handling academic records and student data.",
    addedValue: "Centralized student data management with secure SQL backend.",
    technologies: ["PHP", "MySQL", "CSS", "Bootstrap"],
    category: "fullstack",
    github: "https://github.com/FatmaMejri1/UNIV",
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-muted),transparent_40%)] opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Projects & Technical Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects spanning full-stack development, DevOps automation, AI/ML, and system administration.
            </p>
          </div>

          {/* Category tabs */}
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <div className="flex justify-center mb-10">
              <TabsList className="flex-wrap h-auto gap-2 bg-transparent p-0">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border data-[state=active]:border-primary"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card key={project.title} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Folder className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                              aria-label="GitHub repository"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {(project as any).gitlab && (
                            <a
                              href={(project as any).gitlab}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                              aria-label="GitLab repository"
                            >
                              <Gitlab className="h-5 w-5" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                              aria-label="Live demo"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">Description</span>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        
                        {(project as any).addedValue && (
                          <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">Added Value</span>
                            <p className="text-sm text-foreground font-medium line-clamp-2">
                              {(project as any).addedValue}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs font-mono">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* View all button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
