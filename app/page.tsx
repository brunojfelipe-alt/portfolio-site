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

      <section id="crm" className="case">
        <span className="case-tag">Estudo de caso</span>
        <h2>CRM para clínica</h2>
        <p>
          Sistema de gestão de pacientes e agendamentos construído do zero:
          Next.js, SQLite, autenticação, agenda com regras de conflito de horário.
          Pronto para qualquer negócio que precise organizar atendimento e clientes.
        </p>
        <div className="case-links">
          <a href="https://github.com/brunojfelipe-alt/crm-clinica-demo" target="_blank" rel="noopener">
            Ver repositório →
          </a>
        </div>
      </section>
    </main>
  );
}
