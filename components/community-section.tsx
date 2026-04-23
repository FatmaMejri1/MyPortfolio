"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Mic, Heart } from "lucide-react"

const activities = [
  {
    type: "conference",
    title: "TEK-UP Digital Congress 2025",
    role: "Participant",
    description: "Participated in the TEK-UP Digital Congress, exploring the latest trends in digital transformation and emerging technologies.",
    date: "2025",
  },
  {
    type: "conference",
    title: "TEK-UP Digital Future 7.0",
    role: "Participant",
    description: "Engaged in discussions and workshops focused on the future of technology and its impact on the industry.",
    date: "2024",
  },
]

const organizations = [
  { name: "SecuriNets Tekup", role: "Membre", current: true },
  { name: "Maker Labs", role: "Membre", current: true },
  { name: "Klustra Tekup", role: "Membre", current: true },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Giving Back</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Community & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Active participation in tech communities through speaking, mentoring, and open source contributions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Activities */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-6">Recent Activities</h3>
              {activities.map((activity) => (
                <Card key={activity.title} className="group hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        {activity.type === "conference" && <Mic className="h-5 w-5 text-primary" />}
                        {activity.type === "hackathon" && <Calendar className="h-5 w-5 text-primary" />}
                        {activity.type === "meetup" && <Users className="h-5 w-5 text-primary" />}
                        {activity.type === "volunteer" && <Heart className="h-5 w-5 text-primary" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {activity.title}
                          </h4>
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {activity.role}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{activity.description}</p>
                        <span className="text-xs text-muted-foreground font-mono">{activity.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Organizations */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Organizations</h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {organizations.map((org) => (
                      <li key={org.name} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${org.current ? "bg-primary" : "bg-muted-foreground/50"}`} />
                        <div>
                          <div className="font-medium text-foreground text-sm">{org.name}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-2">
                            {org.role}
                            {org.current && (
                              <Badge variant="outline" className="text-xs py-0 px-1.5">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
