import heroImage from "@/assets/hero-makeup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Coleção de maquiagem premium Rosé Beauty"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-lg md:max-w-xl">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-up">
            ✨ Nova Coleção Primavera
          </span>
          <h1 className="section-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Sua beleza merece o{" "}
            <span className="text-primary">melhor</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Descubra maquiagens premium, veganas e cruelty-free.
            Realce sua beleza natural com produtos feitos para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#produtos" className="btn-primary text-center">
              Explorar Coleção
            </a>
            <a href="#novidades" className="btn-outline-rose text-center">
              Ver Novidades
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-accent border-2 border-background flex items-center justify-center text-xs font-bold text-accent-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">+12.000 clientes</p>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
                <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
