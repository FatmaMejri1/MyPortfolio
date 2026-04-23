import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ProjectsSection } from "@/components/projects-section"
import { DevOpsLabs } from "@/components/devops-labs"
import { SkillsSection } from "@/components/skills-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { AchievementsSection } from "@/components/achievements-section"
import { BlogSection } from "@/components/blog-section"
import { GitHubSection } from "@/components/github-section"
import { ServicesSection } from "@/components/services-section"
import { CommunitySection } from "@/components/community-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <DevOpsLabs />
        <SkillsSection />
        <CertificationsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
