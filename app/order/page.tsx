"use client"

import React from "react"

import { useState } from "react"
import { Phone, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const serviceOptions = [
  "False Ceiling",
  "PVC Wall Panels",
  "PVC Floor Tiles",
  "Custom Furniture",
  "Sofas",
  "Multiple Services",
  "Other",
]

export default function OrderPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    const whatsappMessage = `Hi MSR Decor! I'd like to place an order.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0ADetails: ${encodeURIComponent(message)}`

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
            Get Started
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            Order Now
          </h1>
          <p className="mx-auto max-w-xl text-primary-foreground/80 leading-relaxed">
            Fill out the form below and we will get back to you with a free
            quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-lg border border-border bg-card p-8 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Send className="h-7 w-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-card-foreground">
                    Request Sent!
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for your interest. Your order details have been
                    sent via WhatsApp. We will respond within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg border border-border bg-card p-6 md:p-8 space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
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
                    <Label htmlFor="service">Service Required</Label>
                    <Select name="service" required>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">City / Area</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. Lahore, Johar Town"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe what you need -- room size, design preferences, budget range, etc."
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Order via WhatsApp
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  Prefer to call or message?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reach us directly for a quicker response. We are available
                  during business hours.
                </p>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a
                      href="tel:+923062991249"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Call 03062991249
                    </a>
                  </Button>
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
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-secondary p-6 space-y-4">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  How it works
                </h3>
                <ol className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Submit your request",
                      desc: "Fill out the form with your project details.",
                    },
                    {
                      step: "2",
                      title: "Free consultation",
                      desc: "We contact you to discuss requirements and visit your site.",
                    },
                    {
                      step: "3",
                      title: "Get your quote",
                      desc: "Receive a detailed, no-obligation price estimate.",
                    },
                    {
                      step: "4",
                      title: "We get to work",
                      desc: "Once approved, our team begins your project on schedule.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
