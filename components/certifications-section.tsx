"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    provider: "Amazon Web Services",
    date: "2024",
    credentialId: "SAA-C03",
    verifyUrl: "https://www.credly.com/badges/508e260d-c078-4598-b7c8-2ba4e26aeb26/linked_in_profile",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },

  {
    title: "OCI 2024 Foundations Associate",
    provider: "Oracle Cloud Infrastructure",
    date: "2024",
    credentialId: "OCI-Foundations",
    verifyUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=8A837D0CAB323C9F4E71414C3110ABFCC2FC3EE7D85B98B694CAD78F31F4A68E",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    provider: "Red Hat",
    date: "2025",
    credentialId: "RHCSA",
    verifyUrl: "https://www.credly.com/badges/24cc9e8b-70c1-4a6a-88c5-c2376d32402c/linked_in_profile",
    color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    date: "2023",
    credentialId: "AZ-900",
    verifyUrl: "https://www.credly.com/badges/6504e5ed-21a8-494d-9d96-fb4f8b7b29b4/linked_in_profile",
    color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise in cloud platforms, container orchestration, and infrastructure automation.
            </p>
          </div>

          {/* Certifications grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.title} className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`h-12 w-12 rounded-lg ${cert.color} flex items-center justify-center`}>
                      <Award className="h-6 w-6" />
                    </div>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs"
                      aria-label="View on Credly"
                    >
                      <span className="hidden sm:inline">Verify</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.provider}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {cert.date}
                    </div>
                    <Badge variant="secondary" className="text-xs font-mono">
                      {cert.credentialId}
                    </Badge>
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
