"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <section ref={ref} className="relative overflow-hidden h-[800px] flex items-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&auto=format&fit=crop&q=80"
          alt="Luxurious interior with modern false ceiling design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </motion.div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-3xl space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-medium uppercase tracking-widest text-accent"
          >
            Premium Interior Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-balance"
          >
            Transform your space with expert craftsmanship
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg leading-relaxed text-primary-foreground/80 md:text-xl max-w-2xl"
          >
            From elegant false ceilings to premium office setups, we bring your
            interior vision to life with quality materials and skilled
            craftsmanship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-3 sm:flex-row pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium h-14 px-8 text-base transition-all hover:scale-105"
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
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-14 px-8 text-base transition-all hover:scale-105"
            >
              <a href="tel:+923062991249" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call 03062991249
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

