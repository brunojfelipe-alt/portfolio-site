export default function Home() {
  return (
    <main>
      <header className="nav">
        <span className="nav-name">Bruno Felipe</span>
        <nav>
          <a href="#crm">CRM</a>
          <a href="#quantsense">QuantSense</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section id="hero" className="hero">
        <h1>Bruno Felipe</h1>
        <p className="tagline">
          Desenvolvedor freelancer — construo sistemas sob medida (CRMs, automações)
          e uma trilha própria em dados aplicados a mercado financeiro.
        </p>
      </section>
    </main>
  );
}
