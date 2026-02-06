import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=80"
          alt="Luxurious interior with modern false ceiling design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Premium Interior Solutions
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Transform your space with expert craftsmanship
          </h1>
          <p className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            From elegant false ceilings to premium office setups, we bring your
            interior vision to life with quality materials and skilled
            craftsmanship.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              <Link href="/order" className="flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a href="tel:+923062991249" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call 03062991249
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
