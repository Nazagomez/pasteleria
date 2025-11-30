"use client"

import { ProductCard } from "@/components/product-card"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Queque de Vainilla Clásico",
    description: "Suave y esponjoso, decorado con crema de mantequilla artesanal",
    price: 18000,
    image: "/elegant-vanilla-cake-with-cream-frosting.jpg",
    category: "Queques",
  },
  {
    id: "2",
    name: "Queque de Chocolate Premium",
    description: "Chocolate belga con ganache sedoso y decoración elegante",
    price: 22000,
    image: "/luxury-chocolate-cake-with-ganache.jpg",
    category: "Queques",
  },
  {
    id: "3",
    name: "Queque de Zanahoria",
    description: "Con nueces y frosting de queso crema, opción saludable",
    price: 19000,
    image: "/carrot-cake-cream-cheese.png",
    category: "Queques",
  },
  {
    id: "4",
    name: "Queque Red Velvet",
    description: "Terciopelo rojo con crema de queso, elegancia pura",
    price: 24000,
    image: "/red-velvet-cake-elegant.jpg",
    category: "Queques",
  },
  {
    id: "5",
    name: "Tres Leches Artesanal",
    description: "Receta tradicional con toque gourmet, ultra cremoso",
    price: 16000,
    image: "/tres-leches-cake-elegant-presentation.jpg",
    category: "Postres",
  },
  {
    id: "6",
    name: "Cheesecake de Maracuyá",
    description: "Base de galleta, cremoso relleno con maracuyá fresco",
    price: 20000,
    image: "/passion-fruit-cheesecake-elegant.jpg",
    category: "Postres",
  },
  {
    id: "7",
    name: "Queque Vegano de Chocolate",
    description: "Sin productos animales, 100% delicioso y saludable",
    price: 21000,
    image: "/vegan-chocolate-cake.png",
    category: "Saludables",
  },
  {
    id: "8",
    name: "Brownie Sin Gluten",
    description: "Intenso sabor a chocolate, apto para celíacos",
    price: 15000,
    image: "/gluten-free-brownie-elegant.jpg",
    category: "Saludables",
  },
  {
    id: "9",
    name: "Queque Bajo en Azúcar",
    description: "Endulzado con stevia, sin sacrificar el sabor",
    price: 19000,
    image: "/low-sugar-cake-healthy.jpg",
    category: "Saludables",
  },
]

export function ProductCatalog() {
  return (
    <section id="catalogo" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Catálogo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada producto es elaborado con ingredientes de primera calidad y mucho amor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
