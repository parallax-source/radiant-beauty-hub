import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Clara",
    text: "A melhor base que já usei! Cobertura perfeita e não resseca a pele. Super recomendo!",
    rating: 5,
    product: "Base Luminous Skin",
    initials: "AC",
  },
  {
    name: "Mariana Silva",
    text: "Os batons são incríveis, cor vibrante que dura o dia todo. Amei a textura matte velvet!",
    rating: 5,
    product: "Batom Matte Velvet",
    initials: "MS",
  },
  {
    name: "Juliana Costa",
    text: "Entrega rápida e produtos de altíssima qualidade. Minha paleta de sombras favorita!",
    rating: 5,
    product: "Paleta Sunset Glow",
    initials: "JC",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
          <h2 className="section-heading mt-2">O Que Dizem Nossas Clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 md:p-8" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Sobre: {t.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
