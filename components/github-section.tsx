"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, GitFork, Star, Users, ExternalLink, Gitlab } from "lucide-react"

const githubStats = {
  username: "FatmaMejri1",
  publicRepos: "6",
  followers: "4",
  contributions: "100+",
  stars: "10+",
}

const topRepos = [
  {
    name: "smart-carrer-pipeline",
    description: "CI/CD pipeline for the Smart Career Hub intelligent recruitment platform.",
    language: "GitLab CI",
    languageColor: "#FC6D26",
    stars: "2",
    forks: 1,
    url: "https://gitlab.com/FatmaMejri1/smart-carrer-pipeline",
    platform: "gitlab",
  },
  {
    name: "echrini-app-pipeline",
    description: "Automated CI/CD pipeline for the Echrini application.",
    language: "GitLab CI",
    languageColor: "#FC6D26",
    stars: "1",
    forks: 0,
    url: "https://gitlab.com/FatmaMejri1/echrini-app-pipeline",
    platform: "gitlab",
  },
  {
    name: "careerhub-intelligent-platform",
    description: "Intelligent web platform for recruitment with AI-driven CV generation and profile matching.",
    language: "HTML",
    languageColor: "#e34c26",
    stars: "5",
    forks: 2,
    url: "https://github.com/FatmaMejri1/careerhub-intelligent-platform",
    platform: "github",
  },
  {
    name: "MyLocal-Microservices-Platform",
    description: "Microservices platform with GitOps-oriented deployment using Argo CD and Kubernetes.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: "3",
    forks: 1,
    url: "https://github.com/FatmaMejri1/MyLocal-Microservices-Based-Local-Recommendation-Platform",
    platform: "github",
  },
]

export function GitHubSection() {
  return (
    <section id="github" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Open Source</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              GitHub & GitLab Activity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building in public and contributing to the open source community.
            </p>
          </div>

          {/* GitHub stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Repositories", value: githubStats.publicRepos, icon: Github },
              { label: "Followers", value: githubStats.followers, icon: Users },
              { label: "Contributions", value: githubStats.contributions, icon: GitFork },
              { label: "Stars Earned", value: githubStats.stars, icon: Star },
            ].map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contribution graph placeholder */}
          <Card className="mb-12 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contribution Activity</h3>
              <div className="h-32 bg-gradient-to-r from-muted via-primary/20 to-muted rounded-lg flex items-end justify-center gap-1 p-4">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      // Use deterministic pattern based on indices
                      const seed = (weekIndex * 7 + dayIndex) % 10
                      const intensity = seed < 2 ? "bg-primary" : seed < 4 ? "bg-primary/60" : seed < 6 ? "bg-primary/30" : "bg-muted-foreground/20"
                      return (
                        <div
                          key={dayIndex}
                          className={`w-2 h-2 rounded-sm ${intensity}`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top repositories */}
          <h3 className="text-xl font-semibold text-foreground mb-6">Popular Repositories</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {topRepos.map((repo) => (
              <Card key={repo.name} className="group hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {repo.platform === "github" ? (
                        <Github className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Gitlab className="h-5 w-5 text-[#FC6D26]" />
                      )}
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                      aria-label="View repository"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      {repo.language}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {repo.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4" />
                      {repo.forks}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View profile button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button asChild variant="outline">
              <a href="https://github.com/FatmaMejri1" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://gitlab.com/FatmaMejri1" target="_blank" rel="noopener noreferrer">
                <Gitlab className="h-4 w-4 mr-2 text-[#FC6D26]" />
                View GitLab Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
