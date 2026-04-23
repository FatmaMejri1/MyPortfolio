"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Code, Star, Zap, Target } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "TEK-UP Digital Congress 2025",
    description: "Participated in the TEK-UP Digital Congress, exploring the latest trends in digital transformation and emerging technologies.",
    year: "2025",
  },
  {
    icon: Target,
    title: "TEK-UP Digital Future 7.0",
    description: "Engaged in discussions and workshops focused on the future of technology and its impact on the industry.",
    year: "2024",
  },
  {
    icon: Users,
    title: "SecuriNets Tekup Member",
    description: "Active member of the SecuriNets club, focusing on cybersecurity and network security.",
    year: "2024 - Present",
  },
  {
    icon: Code,
    title: "Maker Labs Member",
    description: "Contributing to innovative projects and hands-on workshops in the Maker Labs community.",
    year: "2024 - Present",
  },
  {
    icon: Star,
    title: "Klustra Tekup Member",
    description: "Participating in cloud computing and DevOps activities within the Klustra community.",
    year: "2024 - Present",
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Recognition</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Achievements & Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones and recognition from hackathons, competitions, conferences, and community contributions.
            </p>
          </div>

          {/* Achievements grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
