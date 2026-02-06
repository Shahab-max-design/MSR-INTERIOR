import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, MessageCircle, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - MSR Decor",
  description:
    "Explore our full range of interior decoration services including false ceilings, PVC wall panels, flooring, custom furniture, and sofas.",
}

const services = [
  {
    title: "False Ceiling",
    description:
      "Create stunning ceiling designs that transform any room. Our false ceiling solutions combine aesthetics with functionality, featuring modern LED integration, sound insulation, and clean geometric patterns.",
    image: "https://media.istockphoto.com/id/140472560/photo/interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=oh1XXjoeiVSXKzcEjhV4Wp4x6L1xzyNx3yZBz2JhALU=",
    badge: null,
    whatsapp:
      "https://wa.me/923062991249?text=Hello,%20I%20want%20to%20order%20False%20Ceiling%20service.",
    email:
      "msrinterior.pk@gmail.com",
    features: [
      "Gypsum board and POP ceilings",
      "Integrated LED strip and spotlight designs",
      "Multi-level and tray ceiling options",
      "Sound insulation capability",
      "Moisture-resistant options for kitchens and bathrooms",
    ],
  },
  {
    title: "PVC Wall Panels",
    description:
      "Upgrade your walls with durable, waterproof PVC panels available in a wide variety of textures, patterns, and colors. Perfect for bedrooms, living rooms, offices, and commercial spaces.",
    image: "https://images.unsplash.com/photo-1708549359552-b036f1632dd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHB2YyUyMHdhbGwlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D",
    badge: null,
    whatsapp:
      "https://wa.me/923062991249?text=Hello,%20I%20want%20to%20order%20PVC%20Wall%20Panels%20service.",
    email:
      "msrinterior.pk@gmail.com",
    features: [
      "Waterproof and moisture-resistant",
      "Easy to clean and maintain",
      "Wide range of textures and colors",
      "Quick and clean installation",
      "Fire-retardant options available",
    ],
  },
  {
    title: "PVC Floor Tiles",
    description:
      "Get the look of premium wood or stone flooring at a fraction of the cost. Our PVC floor tiles are durable, easy to install, and available in realistic finishes.",
    image: "https://media.istockphoto.com/id/1989640580/photo/a-technician-is-cutting-luxury-vinyl-floor-tiles-with-a-cutter-to-lay-the-floor-before.webp?a=1&b=1&s=612x612&w=0&k=20&c=FYYtOAua8QHtIcDMPxOdcu-TNkzTg0xJfcQgG3swiPo=",
    badge: null,
    whatsapp:
      "https://wa.me/923062991249?text=Hello,%20I%20want%20to%20order%20PVC%20Floor%20Tiles%20service.",
    email:
      "msrinterior.pk@gmail.com",
    features: [
      "Wood-look and stone-look finishes",
      "Scratch and water resistant",
      "Comfortable underfoot",
      "Easy DIY-friendly installation",
      "Long-lasting with minimal maintenance",
    ],
  },
  {
    title: "Custom Furniture",
    description:
      "Bespoke furniture designed and built to your exact requirements. From wardrobes and kitchen cabinets to office desks and shelving units, we craft it all.",
    image: "https://plus.unsplash.com/premium_photo-1744836747668-07f7ae73e4df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fEN1c3RvbSUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    badge: null,
    whatsapp:
      "https://wa.me/923062991249?text=Hello,%20I%20want%20to%20order%20Custom%20Furniture%20service.",
    email:
      "msrinterior.pk@gmail.com",
    features: [
      "Made-to-measure designs",
      "Premium wood and laminate options",
      "Wardrobes, cabinets, and shelving",
      "Kitchen and office furniture",
      "Delivered and installed by our team",
    ],
  },
  {
    title: "Sofas",
    description:
      "Handcrafted sofas built for comfort and style. Choose from a range of fabrics, colors, and configurations to find the perfect sofa for your living space.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop",
    badge: null,
    whatsapp:
      "https://wa.me/923062991249?text=Hello,%20I%20want%20to%20order%20Sofas%20service.",
    email:
      "msrinterior.pk@gmail.com",
    features: [
      "Custom size and configuration",
      "Premium fabric and leather options",
      "L-shaped, U-shaped, and classic designs",
      "High-density foam for lasting comfort",
      "Durable hardwood frames",
    ],
  },
  {
    title: "Office Furniture",
    description:
      "Custom office furniture including desks, chairs, cabinets, and workstations. We design functional, ergonomic office spaces tailored to your business needs.",
    image: "https://plus.unsplash.com/premium_photo-1661962827359-b165dec0850f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
    badge: "Popular Service",
    whatsapp:
      "https://wa.me/923062991249?text=Hello,%20I%20want%20to%20order%20Office%20Furniture%20service.",
    email:
      "msrinterior.pk@gmail.com",
    features: [
      "Executive desks and workstations",
      "Ergonomic office chairs",
      "Filing cabinets and storage units",
      "Conference and meeting room furniture",
      "Custom reception and front desk setups",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center space-y-3">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What We Do
          </p>
          <h1 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl text-balance">
            Our Services
          </h1>
          <p className="mx-auto max-w-xl text-primary-foreground/80 leading-relaxed">
            Comprehensive interior solutions to make your home or office look
            its best.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col gap-8 lg:gap-12 lg:items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg lg:w-1/2">
                {service.badge && (
                  <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground flex items-center gap-1 px-3 py-1 text-xs font-semibold">
                    <Star className="h-3 w-3 fill-current" />
                    {service.badge}
                  </Badge>
                )}
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full space-y-5 lg:w-1/2">
                <div className="flex items-center gap-3">
                  <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                    {service.title}
                  </h2>
                  {service.badge && (
                    <Badge
                      variant="outline"
                      className="hidden border-accent text-accent sm:flex items-center gap-1"
                    >
                      <Star className="h-3 w-3 fill-accent" />
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="bg-[#25D366] text-white hover:bg-[#1ebe57]"
                  >
                    <a
                      href={service.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Order
                    </a>
                  </Button>

                  <div className="inline-flex h-10 items-center justify-center rounded-md border border-accent bg-transparent px-4 py-2 text-sm font-medium text-accent ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    <Mail className="mr-2 h-4 w-4" />
                    msrinterior.pk@gmail.com
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent"
                  >
                    <Link href="/order" className="flex items-center gap-2">
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* Bottom CTA */}
      < section className="bg-secondary py-16 md:py-20" >
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl text-balance">
            {"Can't find what you're looking for?"}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground leading-relaxed">
            We offer many more interior solutions. Contact us directly and we
            will work with you to meet your specific needs.
          </p>
          <div className="flex flex-col gap-3 justify-center sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/923062991249"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section >
    </>
  )
}
