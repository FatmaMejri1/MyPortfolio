"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Calendar, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss DevOps and cloud architecture?
              I&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Email */}
              <Card className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-6">fatma.mjr11@gmail.com</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="mailto:fatma.mjr11@gmail.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-6">+216 29 362 908 </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://wa.me/21652388385" target="_blank" rel="noopener noreferrer">Message Me</a>
                  </Button>
                </CardContent>
              </Card>

              {/* LinkedIn */}
              <Card className="group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground mb-6">MEJRI Fatma</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://www.linkedin.com/in/fatma-mejri-a63652219/" target="_blank" rel="noopener noreferrer">Connect</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
