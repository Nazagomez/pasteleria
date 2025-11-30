import { MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react"

export function InfoSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Visítanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos ubicados en el corazón de Nosara, Nicoya
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Ubicación</h3>
            <p className="text-muted-foreground leading-relaxed">
              Centro de Nosara
              <br />
              Nicoya, Guanacaste, Costa Rica
              <br />
              Frente a Playa Guiones
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Horarios</h3>
            <p className="text-muted-foreground leading-relaxed">
              Lunes a Viernes: 8:00 AM - 6:00 PM
              <br />
              Sábados: 8:00 AM - 5:00 PM
              <br />
              Domingos: Cerrado
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">Redes Sociales</h3>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
