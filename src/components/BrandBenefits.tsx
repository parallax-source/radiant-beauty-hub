import { Leaf, Heart, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Vegano",
    description: "Produtos feitos sem nenhum ingrediente de origem animal",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Nunca testamos em animais. Beleza com consciência",
  },
  {
    icon: Clock,
    title: "Longa Duração",
    description: "Fórmulas que duram o dia inteiro sem retoque",
  },
  {
    icon: Shield,
    title: "Dermatologicamente Testado",
    description: "Seguro para todos os tipos de pele",
  },
];

const BrandBenefits = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Por que nos escolher</span>
          <h2 className="section-heading mt-2">Nossos Diferenciais</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                <benefit.icon size={28} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBenefits;
