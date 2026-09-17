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

      <section id="quantsense" className="case">
        <span className="case-tag">Estudo de caso</span>
        <h2>QuantSense</h2>
        <p>
          Pipeline de 17 módulos para avaliação de risco de uma carteira multi-setor
          (energia, financeiro, gás, petróleo, tecnologia, cripto): modelos LSTM por
          setor, backtest causal walk-forward (sem look-ahead bias), classificação de
          regime de mercado e engine de personalização de carteira.
        </p>
        <p>
          Rigor documentado: 38 auditorias registradas, 9 hipóteses testadas e
          descartadas por não superarem o desenho simples, viés de sobrevivência
          medido e exposto no próprio dashboard — não só resultado, mas o processo
          que chegou até ele.
        </p>
        <div className="gallery">
          <img src="/quantsense/overview.png" alt="Overview de risco por setor" />
          <img src="/quantsense/pipeline.png" alt="Pipeline de 17 módulos" />
          <img src="/quantsense/master-ai.png" alt="Módulo IA Mestre" />
          <img src="/quantsense/discipline.png" alt="Disciplina e cemitério de ideias" />
          <img src="/quantsense/modules.png" alt="Módulos internos do sistema" />
        </div>
        <div className="case-links">
          <a href="https://github.com/brunojfelipe-alt/quantsense" target="_blank" rel="noopener">
            Ver repositório →
          </a>
        </div>
      </section>
    </main>
  );
}
