"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Play, Terminal, GitBranch, Container, Cloud, Activity, Shield, ExternalLink } from "lucide-react"

const labs = [
  {
    icon: Cloud,
    title: "AWS Cloud Quest: Solutions Architect",
    description: "Architectural challenges in a 3D simulation, focusing on high availability, cost optimization, and multi-tier apps.",
    whatBuilt: "Hands-on implementation of VPC, ELB, and Auto Scaling for production-ready infrastructures.",
    whyBuilt: "To master AWS architecture best practices through practical, scenario-based learning.",
    technologies: ["AWS", "VPC", "EC2", "S3", "Auto Scaling"],
    verifyUrl: "https://www.credly.com/badges/db15b4cf-e5a0-4227-ba24-b96251bffede/linked_in_profile",
  },
  {
    icon: Activity,
    title: "AWS Educate: Cloud Ops",
    description: "Foundational training in cloud operations, focusing on monitoring and automation.",
    whatBuilt: "Implementation of operational dashboards and basic automation workflows.",
    whyBuilt: "To understand the core principles of managing cloud environments at scale.",
    technologies: ["AWS", "CloudWatch", "Systems Manager"],
    verifyUrl: "https://www.credly.com/badges/0fe05606-b756-4bfe-9083-122a826af7e7/linked_in_profile",
  },
  {
    icon: Shield,
    title: "AWS Educate: Security",
    description: "Exploration of AWS security services and the shared responsibility model.",
    whatBuilt: "Security configurations including IAM policies, security groups, and encryption.",
    whyBuilt: "To build a security-first mindset in cloud infrastructure design.",
    technologies: ["AWS", "IAM", "Security Groups", "KMS"],
    verifyUrl: "https://www.credly.com/badges/95e7f055-8d63-431d-9a90-048feeaa56a3/linked_in_profile",
  },
  {
    icon: Container,
    title: "AWS Educate: Compute",
    description: "Hands-on experience with various AWS compute options including EC2 and Lambda.",
    whatBuilt: "Deployment and management of compute resources for diverse application needs.",
    whyBuilt: "To evaluate and select the right compute power for specific workloads.",
    technologies: ["AWS", "EC2", "Lambda", "EBS"],
    verifyUrl: "https://www.credly.com/badges/91dbbdf8-19b5-4353-a46a-bea8bcf6e8d2/linked_in_profile",
  },
  {
    icon: GitBranch,
    title: "AWS Educate: Networking",
    description: "Deep dive into virtual private clouds and global networking services.",
    whatBuilt: "VPC architecture with subnets, route tables, and internet gateways.",
    whyBuilt: "To understand how to design secure and isolated network environments.",
    technologies: ["AWS", "VPC", "Route 53", "CloudFront"],
    verifyUrl: "https://www.credly.com/badges/93757485-7ec0-4055-8818-42b342d0e1e5/linked_in_profile",
  },
  {
    icon: Cloud,
    title: "AWS Educate: Storage",
    description: "Exploration of AWS storage solutions including S3, EBS, and EFS.",
    whatBuilt: "Configuration of scalable and durable storage for various data types.",
    whyBuilt: "To master data persistence and storage optimization in the cloud.",
    technologies: ["AWS", "S3", "EFS", "Glacier"],
    verifyUrl: "https://www.credly.com/badges/1f93aac1-8723-4a5c-bd90-adceda9009f1/linked_in_profile",
  },
  {
    icon: Terminal,
    title: "AWS Educate: Databases",
    description: "Hands-on with AWS database services like RDS and DynamoDB.",
    whatBuilt: "Setup and management of relational and NoSQL databases.",
    whyBuilt: "To understand data modeling and database scaling in a cloud-native way.",
    technologies: ["AWS", "RDS", "DynamoDB", "Aurora"],
    verifyUrl: "https://www.credly.com/badges/16dadc05-ef28-4b58-b0e5-457f7d1ac1f0/linked_in_profile",
  },
  {
    icon: Activity,
    title: "AWS Educate: Serverless",
    description: "Introduction to serverless architecture and event-driven computing.",
    whatBuilt: "Serverless functions and integrations using AWS Lambda and API Gateway.",
    whyBuilt: "To build highly scalable applications without managing servers.",
    technologies: ["AWS", "Lambda", "API Gateway", "EventBridge"],
    verifyUrl: "https://www.credly.com/badges/1846e1af-e3b3-4db2-b066-9e405b6aac0e/linked_in_profile",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Quest: Cloud Practitioner",
    description: "Practical cloud foundational challenges in a simulated business environment.",
    whatBuilt: "Core AWS infrastructure setup and security configurations.",
    whyBuilt: "To gain hands-on proficiency with essential cloud services.",
    technologies: ["AWS", "Cloud Concepts", "Security", "IAM"],
    verifyUrl: "https://www.credly.com/badges/eb2d8ec2-5813-4b3c-b876-c48f77d0fc6c/linked_in_profile",
  },
]

export function DevOpsLabs() {
  return (
    <section id="devops-labs" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Hands-On Experience</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Cloud Hands On practice
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical experience with modern cloud tools and infrastructures through hands-on labs and certifications.
            </p>
          </div>

          {/* Labs grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab) => (
              <Card key={lab.title} className="group hover:border-primary/50 transition-all duration-300 flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <lab.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors mt-4">
                    {lab.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-6">
                    {lab.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {lab.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button size="sm" variant="outline" className="w-full" asChild>
                      <a href={lab.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify Badge
                      </a>
                    </Button>
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
