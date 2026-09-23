import ImageLightbox from "./components/ImageLightbox";

export default function Home() {
  return (
    <>
    <main>
      <header className="nav">
        <span className="nav-name">Bruno Felipe</span>
        <nav>
          <a href="#crm">CRM</a>
          <a href="#quantsense">QuantSense</a>
          <a href="#whatsapp-bot">Bot WhatsApp</a>
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
          <ImageLightbox>
            <div className="gallery">
              <img className="g-1" src="/crm/dashboard.png" alt="Dashboard financeiro do CRM" />
              <img className="g-2" src="/crm/agenda.png" alt="Agenda de atendimentos" />
              <img className="g-3" src="/crm/clientes.png" alt="Lista de clientes" />
              <img className="g-4" src="/crm/procedimentos.png" alt="Procedimentos e serviços" />
              <img className="g-5" src="/crm/extrato.png" alt="Extrato financeiro" />
            </div>
          </ImageLightbox>
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
          <ImageLightbox>
            <div className="gallery">
              <img className="g-1" src="/quantsense/overview.png" alt="Overview de risco por setor" />
              <img className="g-2" src="/quantsense/pipeline.png" alt="Pipeline de 17 módulos" />
              <img className="g-3" src="/quantsense/master-ai.png" alt="Módulo IA Mestre" />
              <img className="g-4" src="/quantsense/discipline.png" alt="Disciplina e cemitério de ideias" />
              <img className="g-5" src="/quantsense/modules.png" alt="Módulos internos do sistema" />
            </div>
          </ImageLightbox>
          <div className="case-links">
            <a href="https://github.com/brunojfelipe-alt/quantsense" target="_blank" rel="noopener">
              Ver repositório <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </div>

      <section id="whatsapp-bot" className="case case-standalone">
        <div className="case-head">
          <span className="case-tag">Estudo de caso</span>
          <h2>Bot de atendimento no WhatsApp</h2>
        </div>
        <p>
          Atendimento automatizado para WhatsApp: menu numerado, respostas por
          palavra-chave (horário, planos, endereço) e handoff transparente
          para um atendente humano quando o bot não entende a pergunta.
          Backend em FastAPI com máquina de estados própria, plugável em
          qualquer negócio via arquivo de configuração — sem tocar no código.
        </p>
        <video
          className="demo-video"
          src="/whatsapp/demo.mp4"
          controls
          playsInline
          preload="metadata"
        />
        <div className="case-links">
          <a href="https://github.com/brunojfelipe-alt/whatsapp-bot" target="_blank" rel="noopener">
            Ver repositório <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

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
