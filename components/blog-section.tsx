"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react"

const blogPosts = [
  {
    title: "Zero-Downtime Kubernetes Deployments: A Practical Guide",
    excerpt: "Learn how to implement rolling updates, blue-green deployments, and canary releases in Kubernetes without disrupting your users.",
    date: "2024-02-15",
    readTime: "12 min read",
    tags: ["Kubernetes", "DevOps", "CI/CD"],
    slug: "zero-downtime-kubernetes-deployments",
  },
  {
    title: "Building Production-Ready CI/CD Pipelines with GitHub Actions",
    excerpt: "A comprehensive guide to creating robust, secure, and efficient CI/CD pipelines using GitHub Actions for modern applications.",
    date: "2024-01-28",
    readTime: "15 min read",
    tags: ["GitHub Actions", "CI/CD", "Automation"],
    slug: "production-ready-cicd-github-actions",
  },
  {
    title: "Infrastructure as Code: Terraform Best Practices in 2024",
    excerpt: "Explore advanced Terraform patterns, module design, state management, and team collaboration strategies for enterprise environments.",
    date: "2024-01-10",
    readTime: "18 min read",
    tags: ["Terraform", "IaC", "AWS"],
    slug: "terraform-best-practices-2024",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Knowledge Sharing</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
                Blog & Articles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Deep dives into DevOps practices, cloud architecture, and lessons learned from real-world projects.
              </p>
            </div>
            <Button variant="outline" asChild className="shrink-0">
              <a href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Blog posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group hover:border-primary/50 transition-all duration-300 flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
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
