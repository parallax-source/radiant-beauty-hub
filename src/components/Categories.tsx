import productLipstick from "@/assets/product-lipstick.jpg";
import productEyeshadow from "@/assets/product-eyeshadow.jpg";
import productFoundation from "@/assets/product-foundation.jpg";
import productSerum from "@/assets/product-serum.jpg";

const categories = [
  { name: "Batons", count: 48, image: productLipstick },
  { name: "Sombras", count: 36, image: productEyeshadow },
  { name: "Bases", count: 24, image: productFoundation },
  { name: "Skincare", count: 32, image: productSerum },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-16 md:py-24 gradient-rose">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Explore</span>
          <h2 className="section-heading mt-2">Categorias</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-primary-foreground font-heading text-xl md:text-2xl">{cat.name}</h3>
                <p className="text-primary-foreground/70 text-sm">{cat.count} produtos</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
