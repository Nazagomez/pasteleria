import { Instagram, Facebook, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                  <path
                    d="M50 10 L60 30 L50 35 L40 30 Z M35 35 L50 40 L65 35 L70 50 L50 95 L30 50 Z"
                    fill="currentColor"
                  />
                  <ellipse cx="50" cy="25" rx="3" ry="5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">Dulce Inés</h3>
                <p className="text-xs text-muted-foreground">Pastelería Artesanal</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Queques y postres artesanales elaborados con amor en Nosara, Nicoya.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-primary transition-colors">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-3 mb-4">
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
              <a
                href="mailto:info@dulceines.com"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              info@dulceines.com
              <br />
              +506 1234-5678
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Dulce Inés. Todos los derechos reservados.</p>
          <p className="mt-2">Nosara, Nicoya, Guanacaste, Costa Rica</p>
        </div>
      </div>
    </footer>
  )
}
