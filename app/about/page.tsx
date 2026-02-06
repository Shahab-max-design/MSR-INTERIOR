import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - MSR Interior",
  description:
    "Learn about MSR Interior, our story, values, and commitment to delivering premium interior decoration solutions in Pakistan.",
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make premium interior decoration accessible and affordable for every home and business in Pakistan, delivering quality craftsmanship at fair prices.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become Pakistan's most trusted name in interior decoration, known for quality materials, skilled workmanship, and exceptional customer service.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Honesty, quality, and customer satisfaction drive every project we undertake. We treat your space as if it were our own.",
  },
]

const timeline = [
  {
    year: "Founded",
    title: "MSR Interior Established",
    description:
      "Started with a small team specializing in false ceiling installations for residential clients.",
  },
  {
    year: "Growth",
    title: "Expanded Our Interior Services",
    description:
      "Added PVC wall panels, flooring solutions, and custom furniture to our service offerings.",
  },
  {
    year: "Scale",
    title: "Commercial Projects",
    description:
      "Began serving offices, shops, and commercial spaces alongside residential projects.",
  },
  {
    year: "Today",
    title: "500+ Projects Delivered",
    description:
      "Serving clients across Pakistan with a full range of interior decoration and furnishing solutions.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Who We Are
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            About MSR Interior
          </h1>
          <p className="mx-auto max-w-xl text-primary-foreground/80 leading-relaxed">
            Your trusted partner for interior decoration and custom furnishing
            solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg lg:w-1/2">
              {<Image
                src="https://plus.unsplash.com/premium_photo-1683129678799-a30041cebb62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBWQyUyMHBhbmVscyUyQyUyMGZsb29yaW5nJTJDJTIwZnVybml0dXJlJTIwZGV0YWlsc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="MSR Interior "
                fill
                className="object-cover"
              />}
            </div>
            <div className="w-full space-y-5 lg:w-1/2">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Our Story
              </p>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl text-balance">
                Built on craftsmanship and trust
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MSR Interior was founded with a simple goal: to bring
                  high-quality interior decoration services to homes and
                  businesses at prices that make sense. We saw that many people
                  wanted beautiful interiors but found the market confusing and
                  overpriced.
                </p>
                <p>
                  Starting with false ceiling installations, we quickly earned a
                  reputation for honest pricing, clean work, and timely project
                  completion. Our satisfied clients spread the word, and we grew
                  into a full-service interior decoration provider offering PVC
                  panels, flooring, custom furniture, and sofas.
                </p>
                <p>
                  Today, with over 500 completed projects, we continue to serve
                  clients across Pakistan with the same dedication to quality
                  and customer satisfaction that we started with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-lg bg-card p-8 border border-border space-y-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center space-y-3">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Journey
            </p>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl text-balance">
              How we got here
            </h2>
          </div>

          <div className="mt-14 mx-auto max-w-3xl space-y-0">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                    <span className="text-xs font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-10">
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
            Ready to work with us?
          </h2>
          <p className="mx-auto max-w-lg text-primary-foreground/80 leading-relaxed">
            Let us help you create the space you have always wanted. Get in
            touch today for a free consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
          >
            <Link href="/order" className="flex items-center gap-2">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
