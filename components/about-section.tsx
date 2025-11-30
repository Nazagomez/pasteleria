export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Dulce Inés</strong> nació del amor por la repostería artesanal y el
                deseo de compartir dulces momentos con nuestra comunidad en Nosara, Nicoya.
              </p>
              <p>
                Cada queque y postre que elaboramos es una obra de arte comestible, creada con ingredientes de la más
                alta calidad y técnicas tradicionales perfeccionadas a través de los años.
              </p>
              <p>
                <strong className="text-foreground">Nuestra misión</strong> es simple: ofrecer productos de repostería
                que no solo deleiten el paladar, sino que también cuiden de tu salud. Por eso ofrecemos opciones sin
                gluten, veganas y bajas en azúcar, sin comprometer el sabor ni la calidad.
              </p>
              <p>
                Creemos que todos merecen disfrutar de un postre delicioso, independientemente de sus necesidades
                dietéticas. La frescura es nuestra prioridad: horneamos diariamente para garantizar que cada producto
                llegue a ti en su mejor momento.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/artisan-bakery-kitchen-elegant.jpg"
                  alt="Taller de pastelería"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/fresh-baked-pastries-elegant.jpg"
                  alt="Productos frescos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/cake-decoration-process-elegant.jpg"
                  alt="Decoración artesanal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/elegant-cake-display.jpg"
                  alt="Exhibición de queques"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
