import { useState } from "react";
import { Heart, ShoppingBag, Search, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#" },
    { label: "Produtos", href: "#produtos" },
    { label: "Categorias", href: "#categorias" },
    { label: "Novidades", href: "#novidades" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <a href="#" className="font-heading text-2xl md:text-3xl text-primary tracking-wide">
            Rosé Beauty
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors hidden md:block" aria-label="Conta">
              <User size={20} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="Favoritos">
              <Heart size={20} />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors relative" aria-label="Carrinho">
              <ShoppingBag size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-fade-up">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar produtos, marcas..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-secondary border-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2 text-foreground font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#" className="py-2 text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2">
              <User size={18} /> Minha Conta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
