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
  {
    id: 9,
    title: "Vertical Blinds",
    subtitle: "Modern, stylish, and light-control vertical blinds for offices and homes.",
    image: "data:image/jpeg;base64,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",
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
