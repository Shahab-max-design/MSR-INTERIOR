import { Shield, Clock, Palette, BadgeCheck, Truck, Headphones } from "lucide-react"
import { FadeIn, StaggerContainer } from "@/components/ui/animation-wrapper"

const features = [
  {
    icon: Shield,
    title: "Quality Materials",
    description:
      "We source only premium-grade materials for long-lasting, beautiful results.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Projects completed on schedule with clear timelines and regular updates.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description:
      "Every project is tailored to your unique style and space requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Skilled Craftsmen",
    description:
      "Experienced professionals ensure precise installation and flawless finishing.",
  },
  {
    icon: Truck,
    title: "Free Site Visit",
    description:
      "We visit your location to assess the space and provide an accurate estimate.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "After-service support to ensure your complete satisfaction with our work.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto max-w-2xl text-center space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            The MSR Interior Difference
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            With years of experience and hundreds of satisfied clients, we
            deliver results that exceed expectations.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FadeIn
              key={feature.title}
              className="flex flex-col items-start gap-4 rounded-lg bg-card p-6 border border-border"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
