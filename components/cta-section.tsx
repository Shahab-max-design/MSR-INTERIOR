import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/animation-wrapper"

export function CTASection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4">
        <FadeIn className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Ready to transform your space?
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Get in touch today for a free consultation and quote. We will help
            you bring your interior vision to life.
          </p>
          <div className="flex flex-col gap-3 justify-center sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              <Link href="/order" className="flex items-center gap-2">
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <a
                href="https://wa.me/923062991249"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
