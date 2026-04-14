import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading text-2xl mb-4" style={{ color: "hsl(var(--rose-medium))" }}>Rosé Beauty</h3>
            <p className="text-sm opacity-70 mb-4">
              Beleza consciente, sofisticada e feita para você brilhar todos os dias.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                  aria-label="Rede social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Loja</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Produtos</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Categorias</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Novidades</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Promoções</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Ajuda</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Frete e Entrega</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Institucional</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Sobre Nós</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">© 2026 Rosé Beauty. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3 text-xs opacity-50">
            <span>🔒 Compra Segura</span>
            <span>•</span>
            <span>💳 Parcele em até 12x</span>
            <span>•</span>
            <span>🚚 Frete Grátis acima de R$199</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
