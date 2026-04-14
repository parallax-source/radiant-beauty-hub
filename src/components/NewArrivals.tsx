import ProductCard from "./ProductCard";
import productSerum from "@/assets/product-serum.jpg";
import productMascara from "@/assets/product-mascara.jpg";
import productEyeshadow from "@/assets/product-eyeshadow.jpg";
import productFoundation from "@/assets/product-foundation.jpg";

const newProducts = [
  {
    name: "Sérum Facial Vitamina C Gold",
    price: 189.90,
    image: productSerum,
    rating: 5.0,
    reviews: 34,
    badge: "Lançamento",
    category: "Skincare",
  },
  {
    name: "Máscara Curling Definition Pro",
    price: 99.90,
    image: productMascara,
    rating: 4.8,
    reviews: 12,
    badge: "Novo",
    category: "Olhos",
  },
  {
    name: "Paleta Glam Night Edition",
    price: 199.90,
    image: productEyeshadow,
    rating: 4.9,
    reviews: 8,
    badge: "Exclusivo",
    category: "Sombras",
  },
  {
    name: "Base Hydra Glow Matte",
    price: 149.90,
    image: productFoundation,
    rating: 4.7,
    reviews: 21,
    badge: "Novo",
    category: "Bases",
  },
];

const NewArrivals = () => {
  return (
    <section id="novidades" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">🆕 Acabou de Chegar</span>
          <h2 className="section-heading mt-2">Novidades</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Os lançamentos mais esperados da temporada
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
