"use client"

import React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "03062991249",
    href: "tel:+923062991249",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/923062991249",
  },
  {
    icon: Mail,
    label: "Email",
    value: "msrinterior.pk@gmail.com",
    href: "mailto:msrinterior.pk@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    href: null,
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const whatsappMessage = `Hi MSR Interior!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`

    window.open(
      `https://wa.me/923062991249?text=${whatsappMessage}`,
      "_blank"
    )

    setSubmitted(true)
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Get In Touch
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            Contact Us
          </h1>
          <p className="mx-auto max-w-xl text-primary-foreground/80 leading-relaxed">
            Have a question or want to discuss your project? We are here to
            help.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Send className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-card-foreground">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for reaching out. Your message has been sent via
                    WhatsApp. We will get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg border border-border bg-card p-6 md:p-8 space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="e.g. 03001234567"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or question..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message via WhatsApp
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 space-y-5">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map((item) => {
                    const content = (
                      <span className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                          <item.icon className="h-4 w-4 text-accent" />
                        </span>
                        <span>
                          <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="block text-sm text-card-foreground">
                            {item.value}
                          </span>
                        </span>
                      </span>
                    )

                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="block rounded-md transition-colors hover:bg-secondary p-2 -m-2"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="p-2 -m-2">{content}</div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-secondary p-6 space-y-3">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Quick Response
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For the fastest response, message us directly on WhatsApp. We
                  typically reply within 30 minutes during business hours.
                </p>
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a
                    href="https://wa.me/923062991249"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Open WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
