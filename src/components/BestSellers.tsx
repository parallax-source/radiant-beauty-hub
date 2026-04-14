import ProductCard from "./ProductCard";
import productLipstick from "@/assets/product-lipstick.jpg";
import productEyeshadow from "@/assets/product-eyeshadow.jpg";
import productFoundation from "@/assets/product-foundation.jpg";
import productMascara from "@/assets/product-mascara.jpg";

const products = [
  {
    name: "Batom Matte Velvet Rose",
    price: 89.90,
    originalPrice: 119.90,
    image: productLipstick,
    rating: 4.8,
    reviews: 342,
    badge: "-25%",
    category: "Batons",
  },
  {
    name: "Paleta de Sombras Sunset Glow",
    price: 159.90,
    image: productEyeshadow,
    rating: 4.9,
    reviews: 218,
    badge: "Favorito",
    category: "Sombras",
  },
  {
    name: "Base Luminous Skin HD",
    price: 129.90,
    image: productFoundation,
    rating: 4.7,
    reviews: 456,
    category: "Bases",
  },
  {
    name: "Máscara Volume Extreme",
    price: 79.90,
    image: productMascara,
    rating: 4.6,
    reviews: 189,
    badge: "Novo",
    category: "Olhos",
  },
];

const BestSellers = () => {
  return (
    <section id="produtos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">⭐ Favoritos</span>
          <h2 className="section-heading mt-2">Mais Vendidos</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Os produtos que nossas clientes mais amam
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="btn-outline-rose inline-block">
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
