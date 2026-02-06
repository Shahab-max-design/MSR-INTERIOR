import { ShowcaseCarousel } from "@/components/showcase-carousel"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"

export default function Page() {
  return (
    <>
      <HeroSection />
      <div className="-mt-12 md:-mt-20 relative z-10">
        <ShowcaseCarousel />
      </div>
      {/* <ServicesOverview />  (Removed as requested) */}
      <StatsSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}
