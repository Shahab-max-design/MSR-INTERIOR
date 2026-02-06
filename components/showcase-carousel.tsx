"use client"

import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Custom PVC Wall Design",
    subtitle: "Modern Feature Walls with Integrated Lighting",
    image: "https://images.unsplash.com/photo-1640434046083-0d54bb4092d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB2YyUyMHdhbGwlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Elegant Flooring Solutions",
    subtitle: "Durable Wood & Stone Finish",
    image: "https://images.unsplash.com/photo-1716315325541-776e39f9725f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVsZWdhbnQlMjBGbG9vcmluZyUyMFNvbHV0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Modern Office Furniture",
    subtitle: "Ergonomic & Stylish Workspaces",
    image: "https://media.istockphoto.com/id/2192466501/photo/modern-executive-office-interior-with-wooden-desk-shelves-computer-and-chair-in-sleek-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=xn65JI750bS--Drwf37ge3fFpyzZQNA0f-DWGLtF7UM=",
  },
  {
    id: 4,
    title: "Custom Furniture Design",
    subtitle: "Tailored to Your Luxury Space",
    image: "https://plus.unsplash.com/premium_photo-1745198321114-2906eeced83d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3VzdG9tJTIwRnVybml0dXJlJTIwRGVzaWdufGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Luxury TV Wall Backgrounds",
    subtitle: "Cinematic PVC & Lighting Designs",
    image: "https://images.unsplash.com/photo-1633604712918-6ab1173d0ecd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEx1eHVyeSUyMFRWJTIwV2FsbCUyMEJhY2tncm91bmRzfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    title: "False Ceiling",
    subtitle: "stunning ceiling designs that transform any room",
    image: "https://plus.unsplash.com/premium_photo-1680296669094-bceb08249a7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEZhbHNlJTIwQ2VpbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    title: "Executive Office Interiors",
    subtitle: "Professional & Premium Designs",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Architectural Wall Paneling",
    subtitle: "Seamless 3D & Fluted Textures",
    image: "https://images.unsplash.com/photo-1768346564825-6f90c0b89e2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEFyY2hpdGVjdHVyYWwlMjBXYWxsJTIwUGFuZWxpbmd8ZW58MHx8MHx8fDA%3D",
  },
]

export function ShowcaseCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  })

  // Track the index of the slide that is currently "in focus" (center)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)

    // Auto-scroll functionality
    let autoScroll: NodeJS.Timeout
    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext()
        } else {
          emblaApi.scrollTo(0)
        }
      }, 4000)
    }

    startAutoScroll()

    // Pause on hover (handled by clearing interval on component unmount or interaction, 
    // but for simplicity in this "view-only" style, we keep it running or add listeners if needed.
    // simpler to just let it run for now)

    return () => {
      emblaApi.off("select", onSelect)
      clearInterval(autoScroll)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative w-full overflow-hidden bg-background pb-10 md:pb-20 lg:pb-24 pt-10">
      {/* Branding & Contact Overlay */}
      <div className="absolute top-4 left-4 z-20 md:top-8 md:left-12 pointer-events-none mix-blend-difference text-white">
        <h2 className="text-xl font-bold tracking-tighter uppercase md:text-2xl font-heading">

        </h2>
      </div>

      <div className="absolute bottom-4 right-4 z-20 md:bottom-8 md:right-12 pointer-events-none mix-blend-difference text-white">
        <p className="text-sm font-medium tracking-wide md:text-base">
          msrinterior.pk@gmail.com
        </p>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 mb-8 relative z-10 text-center">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-2">Portfolio Showcase</p>
        <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Our Services
        </h1>
      </div>

      <div className="w-full relative" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4 md:-ml-8">
          {slides.map((slide, index) => {
            // Calculate distance from center index to determine scale/opacity
            // This is a simplified check: matched index is center.
            const isCenter = index === selectedIndex
            const isNear = Math.abs(index - selectedIndex) === 1 ||
              (selectedIndex === 0 && index === slides.length - 1) ||
              (selectedIndex === slides.length - 1 && index === 0)

            return (
              <div
                key={slide.id}
                className={cn(
                  "flex-[0_0_85%] min-w-0 pl-4 md:flex-[0_0_60%] lg:flex-[0_0_45%] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                  "relative"
                )}
              >
                <div
                  className={cn(
                    "relative aspect-[16/9] overflow-hidden rounded-2xl transition-all duration-700 ease-out shadow-lg",
                    isCenter
                      ? "scale-100 opacity-100 shadow-2xl ring-1 ring-white/20 z-10 translate-y-0"
                      : "scale-90 opacity-40 blur-[1px] grayscale-[30%] translate-y-4 hover:opacity-60 hover:scale-95 hover:blur-none cursor-pointer"
                  )}
                  onClick={() => emblaApi?.scrollTo(index)}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-[1.5s]",
                      isCenter ? "scale-105" : "scale-100"
                    )}
                    priority={index < 3} // Priority load first few
                  />

                  {/* Overlay Text for Center Slide */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 text-left transition-opacity duration-500 delay-100",
                    isCenter ? "opacity-100" : "opacity-0"
                  )}>
                    <h3 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl leading-tight mb-2 font-heading drop-shadow-md">
                      {slide.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-lg font-medium drop-shadow-sm max-w-md">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll Progress / Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8 md:mt-12">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-8 bg-accent"
                : "w-2 bg-muted-foreground/30 hover:bg-accent/50"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
