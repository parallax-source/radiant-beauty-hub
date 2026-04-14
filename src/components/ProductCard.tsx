import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
}

const ProductCard = ({ name, price, originalPrice, image, rating, reviews, badge, category }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="card-product group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isLiked ? "bg-primary text-primary-foreground" : "bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
            aria-label="Favoritar"
          >
            <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <button
            className="w-9 h-9 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingBag size={16} />
          </button>
        </div>

        {/* Mobile add to cart */}
        <button className="md:hidden absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
          <ShoppingBag size={18} />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{category}</p>
        <h3 className="font-semibold text-foreground text-sm mb-2 line-clamp-2">{name}</h3>

        <div className="flex items-center gap-1 mb-2">
          <Star size={12} className="text-gold fill-current" />
          <span className="text-xs font-medium text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">R$ {price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              R$ {originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
