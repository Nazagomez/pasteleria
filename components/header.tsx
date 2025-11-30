"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartPanel } from "@/components/cart-panel"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                <path
                  d="M50 10 L60 30 L50 35 L40 30 Z M35 35 L50 40 L65 35 L70 50 L50 95 L30 50 Z"
                  fill="currentColor"
                  className="transition-transform group-hover:scale-110"
                />
                <ellipse cx="50" cy="25" rx="3" ry="5" fill="currentColor" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-2xl font-bold text-foreground">Dulce Inés</h1>
              <p className="text-xs text-muted-foreground">Pastelería Artesanal</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("catalogo")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative bg-transparent">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <CartPanel />
              </SheetContent>
            </Sheet>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Inicio
                  </button>
                  <button
                    onClick={() => scrollToSection("catalogo")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Catálogo
                  </button>
                  <button
                    onClick={() => scrollToSection("nosotros")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Nosotros
                  </button>
                  <button
                    onClick={() => scrollToSection("contacto")}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                  >
                    Contacto
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
