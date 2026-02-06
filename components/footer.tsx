import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const services = [
  "False Ceiling",
  "Custom Furniture",
  "Sofas",
  "PVC Wall Panels",
  "PVC Floor Tiles",
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/order", label: "Order Now" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="font-heading text-xl font-bold text-accent-foreground">M</span>
              </div>
              <span className="font-heading text-xl font-bold">MSR Interior</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for premium false ceilings, PVC panels, flooring, and custom furniture solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+923062991249"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  03062991249
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923062991249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:msrinterior.pk@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  msrinterior.pk@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} MSR Interior. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
