"use client"

import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Rocket, Award } from "lucide-react"

const timelineEvents = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Engineering Cycle - Software Engineering & Information Systems",
    organization: "Université TEK-UP — Ariana",
    period: "2024 - 2027",
    description: "Cycle Ingénieur TIC — Génie Logiciel & Systèmes d'Information.",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Summer Internship — DevOps & CI/CD",
    organization: "Tunisia Software Technology — Lac 1",
    period: "July - August 2025",
    description: "Developed and deployed an e-commerce application with a focus on containerization and CI/CD.",
    achievements: [
      "Full-stack development of an e-commerce app (frontend & backend)",
      "Containerization with Docker and deployment on Kubernetes",
      "Implementation of CI/CD pipelines with GitLab for automated builds and deployments",
    ],
    technologies: ["Python 3.11", "Flask", "Docker", "Kubernetes", "GitLab CI/CD", "Git", "SQLite"],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Final Project Internship (PFE) — Infrastructure HA & Security",
    organization: "Prologic Tunisia — Charguia 1",
    period: "February - May 2024",
    description: "Focused on high availability infrastructure and open-source monitoring solutions.",
    achievements: [
      "Implemented high availability infrastructure with backup and supervision solutions",
      "Deployed network security solutions for threat detection and traffic prevention",
    ],
    technologies: ["Active Directory", "SQL Server", "SharePoint", "Veeam Backup", "Veeam One", "Zabbix", "Suricata"],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Licence in Industrial Informatics and Automation",
    organization: "ISTIC — Borj Cedria",
    period: "2021 - 2024",
    description: "Licence — Informatique Industrielle et Automatique.",
  },
]

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Experience & Milestones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A timeline of my professional growth, from writing my first lines of code to architecting enterprise-scale systems.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={`${event.title}-${event.period}`}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-1/2 md:-translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <event.icon className="h-4 w-4 text-primary" />
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="text-xs font-mono">
                          {event.period}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            event.type === "work" ? "border-blue-500/50 text-blue-600 dark:text-blue-400" :
                            event.type === "education" ? "border-green-500/50 text-green-600 dark:text-green-400" :
                            event.type === "achievement" ? "border-yellow-500/50 text-yellow-600 dark:text-yellow-400" :
                            "border-purple-500/50 text-purple-600 dark:text-purple-400"
                          }`}
                        >
                          {event.type === "work" ? "Work" : 
                           event.type === "education" ? "Education" : 
                           event.type === "achievement" ? "Achievement" : "Milestone"}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-primary mb-3">{event.organization}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {event.description}
                      </p>

                      {event.achievements && (
                        <ul className="space-y-1 mb-4">
                          {event.achievements.map((achievement) => (
                            <li key={achievement} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}

                      {event.technologies && (
                        <div className="flex flex-wrap gap-1.5">
                          {event.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs font-mono">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
