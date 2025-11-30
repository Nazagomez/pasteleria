"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToCatalog = () => {
    const element = document.getElementById("catalogo")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative w-full">
      <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
        <img
          src="/elegant-artisan-cake-with-cream-frosting-and-berri.jpg"
          alt="Queque artesanal elegante"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="relative container mx-auto px-4 h-full flex items-end pb-16 md:pb-24">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight text-balance">
              Queques y postres artesanales hechos con amor
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Calidad artesanal desde Nosara, Nicoya
            </p>
            <Button
              onClick={scrollToCatalog}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium shadow-lg"
            >
              Ver catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
