import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCatalog } from "@/components/product-catalog"
import { AboutSection } from "@/components/about-section"
import { InfoSection } from "@/components/info-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCatalog />
      <AboutSection />
      <InfoSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
