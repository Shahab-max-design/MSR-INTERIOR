"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/order", label: "Order Now" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
          >
            <span className="font-heading text-xl font-bold text-primary-foreground">M</span>
          </motion.div>
          <span className="font-heading text-xl font-bold text-primary">MSR Interior</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-3"
          >
            <Button asChild variant="outline" size="sm" className="transition-transform hover:scale-105">
              <a href="tel:+923062991249" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105">
              <a
                href="https://wa.me/923062991249"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden lg:flex transition-transform hover:scale-105">
              <a href="mailto:msrinterior.pk@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                msrinterior.pk@gmail.com
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-2 pt-3 border-t border-border">
                <Button asChild variant="outline" size="sm">
                  <a href="tel:+923062991249" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a
                    href="https://wa.me/923062991249"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href="mailto:msrinterior.pk@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    msrinterior.pk@gmail.com
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header >
  )
}

