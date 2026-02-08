import { FadeIn, StaggerContainer } from "@/components/ui/animation-wrapper"

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "300+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
]

export function StatsSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <FadeIn key={stat.label} className="text-center space-y-2">
              <p className="font-heading text-3xl font-bold text-accent md:text-4xl">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
