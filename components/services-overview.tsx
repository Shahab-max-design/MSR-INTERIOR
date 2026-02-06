import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "False Ceiling",
    description:
      "Custom-designed false ceilings with modern LED integration, gypsum board finishing, and elegant patterns for any room.",
    image: "https://plus.unsplash.com/premium_photo-1704988993814-a9dac402315b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmFsc2UlMjBDZWlsaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "PVC Wall Panels",
    description:
      "Durable, waterproof PVC wall panels in a wide range of textures and colors to elevate your walls.",
    image: "data:image/jpeg;base64,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",
  },
  {
    title: "PVC Floor Tiles",
    description:
      "High-quality PVC flooring solutions offering wood-look and stone-look finishes at affordable prices.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ff6Jnk5gjp0_5PSbH8xGfrQ9JKoi3aHVhA&s",
  },
  {
    title: "Custom Furniture",
    description:
      "Bespoke furniture crafted to your exact specifications -- wardrobes, cabinets, tables, and storage solutions.",
    image: "/images/custom-furniture.jpg",
  },
  {
    title: "Sofas",
    description:
      "Comfortable, stylish sofas made to order with premium upholstery and durable frames for lasting quality.",
    image: "/images/sofas.jpg",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide complete interior solutions tailored to your style,
            budget, and space requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors group-hover:text-accent/80">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
