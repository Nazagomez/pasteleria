"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function CartPanel() {
  const { items, removeItem, updateQuantity, getTotal } = useCart()

  const handleConfirmOrder = () => {
    const orderDetails = items
      .map((item) => `${item.quantity}x ${item.name} - ₡${(item.price * item.quantity).toLocaleString()}`)
      .join("\n")

    const message = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n${orderDetails}\n\nTotal: ₡${getTotal().toLocaleString()}`

    const whatsappUrl = `https://wa.me/50612345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12">
        <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Tu carrito está vacío</h3>
        <p className="text-sm text-muted-foreground text-center">Agrega algunos productos deliciosos</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold text-foreground">Tu Pedido</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {items.length} {items.length === 1 ? "producto" : "productos"}
        </p>
      </div>

      <ScrollArea className="flex-1 -mx-6 px-6">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-sm mb-1 truncate">{item.name}</h4>
                <p className="text-sm font-semibold text-foreground mb-2">₡{item.price.toLocaleString()}</p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 rounded-full bg-transparent"
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7 rounded-full bg-transparent"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 rounded-full ml-auto text-destructive"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-6 space-y-4">
        <Separator />
        <div className="flex items-center justify-between">
          <span className="font-semibold text-foreground">Total</span>
          <span className="font-serif text-2xl font-bold text-foreground">₡{getTotal().toLocaleString()}</span>
        </div>
        <Button
          onClick={handleConfirmOrder}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
          size="lg"
        >
          Confirmar Pedido por WhatsApp
        </Button>
      </div>
    </div>
  )
}
