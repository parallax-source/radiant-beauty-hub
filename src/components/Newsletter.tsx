const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 gradient-rose">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="section-heading mb-4">Fique por Dentro</h2>
          <p className="text-muted-foreground mb-8">
            Receba novidades, dicas de beleza e ofertas exclusivas diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-3 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Inscrever-se
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            🔒 Seus dados estão seguros conosco. Sem spam, prometemos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
