export default function Home() {
  return (
    <>
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
        <div className="hero-glow" aria-hidden="true" />
        <span className="hero-kicker">Desenvolvedor freelancer</span>
        <h1>Bruno Felipe</h1>
        <p className="tagline">
          Desenvolvedor freelancer — construo sistemas sob medida (CRMs, automações)
          e uma trilha própria em dados aplicados a mercado financeiro.
        </p>
      </section>

      <div className="cases-grid">
        <section id="crm" className="case">
          <div className="case-head">
            <span className="case-tag">Estudo de caso</span>
            <h2>CRM para clínica</h2>
          </div>
          <p>
            Sistema de gestão de pacientes e agendamentos construído do zero:
            Next.js, SQLite, autenticação, agenda com regras de conflito de horário.
            Pronto para qualquer negócio que precise organizar atendimento e clientes.
          </p>
          <div className="case-links">
            <a href="https://github.com/brunojfelipe-alt/crm-clinica-demo" target="_blank" rel="noopener">
              Ver repositório <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section id="quantsense" className="case case-featured">
          <div className="case-head">
            <span className="case-tag">Estudo de caso</span>
            <h2>QuantSense</h2>
          </div>
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
            <img className="g-1" src="/quantsense/overview.png" alt="Overview de risco por setor" />
            <img className="g-2" src="/quantsense/pipeline.png" alt="Pipeline de 17 módulos" />
            <img className="g-3" src="/quantsense/master-ai.png" alt="Módulo IA Mestre" />
            <img className="g-4" src="/quantsense/discipline.png" alt="Disciplina e cemitério de ideias" />
            <img className="g-5" src="/quantsense/modules.png" alt="Módulos internos do sistema" />
          </div>
          <div className="case-links">
            <a href="https://github.com/brunojfelipe-alt/quantsense" target="_blank" rel="noopener">
              Ver repositório <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </div>

      <section id="contato" className="contato">
        <h2>Quer algo parecido?</h2>
        <p>Sistema sob medida, sério e testado, para o seu negócio.</p>
        <a className="email-btn" href="mailto:brunojfelipe@usp.br">
          brunojfelipe@usp.br
        </a>
      </section>
    </main>

    <footer className="footer">
      <span>© {new Date().getFullYear()} Bruno Felipe</span>
    </footer>
    </>
  );
}
