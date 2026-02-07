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
  {
    title: "Vertical Blinds",
    description:
      "Stylish and adjustable vertical blinds for offices and modern interiors.",
    image: "data:image/jpeg;base64,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",
    badge: null,
    whatsapp:
      "https://wa.me/923062991249?text=Hello,%20I%20want%20to%20order%20Vertical%20Blinds%20service.",
    email:
      "msrinterior.pk@gmail.com",
    features: [
      "Precise light control",
      "Modern and sleek design",
      "Durable and easy to clean",
      "Wide range of colors and textures",
      "Perfect for large windows and sliding doors",
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
