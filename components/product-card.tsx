"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Product } from "@/components/product-catalog"
import { useCart } from "@/hooks/use-cart"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <Card className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <span className="text-xs font-medium text-primary uppercase tracking-wide">{product.category}</span>
          <h3 className="font-serif text-xl font-bold text-foreground mt-1 mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-serif text-2xl font-bold text-foreground">₡{product.price.toLocaleString()}</p>
          <Button
            onClick={handleAddToCart}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Agregar
          </Button>
        </div>
      </div>
    </Card>
  )
}
