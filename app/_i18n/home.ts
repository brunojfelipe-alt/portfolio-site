export type Lang = "en" | "pt";

export const en = {
  htmlLang: "en",
  metaTitle: "Bruno Felipe — Freelance Developer",
  metaDescription:
    "Custom systems: CRMs, AI automations and financial data risk analysis.",
  nav: { crm: "CRM", quantsense: "QuantSense", bot: "WhatsApp Bot", lead: "Lead Recovery", contact: "Contact" },
  heroKicker: "Freelance developer",
  tagline:
    "Freelance developer — I build custom systems (CRMs, automations) and my own track in data applied to financial markets.",
  caseTag: "Case study",
  repo: "View repository",
  repoPrivate: "Private repository",
  repoPrivateTitle: "Private repository — no public access",
  crm: {
    title: "Clinic CRM",
    text:
      "Patient and appointment management system built from scratch: Next.js, SQLite, authentication, and a schedule with time-conflict rules. Ready for any business that needs to organize appointments and customers.",
    alts: [
      "CRM financial dashboard",
      "Appointment schedule",
      "Client list",
      "Procedures and services",
      "Financial statement",
    ],
  },
  quant: {
    title: "QuantSense",
    text1:
      "A 17-module pipeline for assessing the risk of a multi-sector portfolio (energy, financials, gas, oil, technology, crypto): per-sector LSTM models, causal walk-forward backtesting (no look-ahead bias), market regime classification and a portfolio personalization engine.",
    text2:
      "Documented rigor: 38 recorded audits, 9 hypotheses tested and discarded for failing to beat the simple design, and survivorship bias measured and shown on the dashboard itself — not just the result, but the process that led to it.",
    alts: [
      "Risk overview by sector",
      "17-module pipeline",
      "Master AI module",
      "Discipline and idea graveyard",
      "System internals",
    ],
  },
  bot: {
    title: "WhatsApp support bot",
    text:
      "Automated WhatsApp support: numbered menu, keyword answers (hours, plans, address) and a transparent handoff to a human agent when the bot does not understand. FastAPI backend with its own state machine, pluggable into any business through a config file — no code changes.",
  },
  lead: {
    tag: "Case study",
    title: "Lead Recovery for roofing companies",
    text:
      "Three n8n and AI automations for a service business: reply to missed calls and forms, follow up on stalled quotes, and ask for Google reviews. Aimed at small businesses in the US.",
    link: "View the case",
  },
  contact: {
    title: "Want something similar?",
    text: "A custom, serious, tested system for your business.",
  },
};

export type HomeContent = typeof en;

export const pt: HomeContent = {
  htmlLang: "pt-BR",
  metaTitle: "Bruno Felipe — Desenvolvedor Freelancer",
  metaDescription:
    "Sistemas sob medida: CRMs, automações e análise de risco de dados financeiros com IA.",
  nav: { crm: "CRM", quantsense: "QuantSense", bot: "Bot WhatsApp", lead: "Lead Recovery", contact: "Contato" },
  heroKicker: "Desenvolvedor freelancer",
  tagline:
    "Desenvolvedor freelancer — construo sistemas sob medida (CRMs, automações) e uma trilha própria em dados aplicados a mercado financeiro.",
  caseTag: "Estudo de caso",
  repo: "Ver repositório",
  repoPrivate: "Repositório privado",
  repoPrivateTitle: "Repositório privado — sem acesso público",
  crm: {
    title: "CRM para clínica",
    text:
      "Sistema de gestão de pacientes e agendamentos construído do zero: Next.js, SQLite, autenticação, agenda com regras de conflito de horário. Pronto para qualquer negócio que precise organizar atendimento e clientes.",
    alts: [
      "Dashboard financeiro do CRM",
      "Agenda de atendimentos",
      "Lista de clientes",
      "Procedimentos e serviços",
      "Extrato financeiro",
    ],
  },
  quant: {
    title: "QuantSense",
    text1:
      "Pipeline de 17 módulos para avaliação de risco de uma carteira multi-setor (energia, financeiro, gás, petróleo, tecnologia, cripto): modelos LSTM por setor, backtest causal walk-forward (sem look-ahead bias), classificação de regime de mercado e engine de personalização de carteira.",
    text2:
      "Rigor documentado: 38 auditorias registradas, 9 hipóteses testadas e descartadas por não superarem o desenho simples, viés de sobrevivência medido e exposto no próprio dashboard — não só resultado, mas o processo que chegou até ele.",
    alts: [
      "Overview de risco por setor",
      "Pipeline de 17 módulos",
      "Módulo IA Mestre",
      "Disciplina e cemitério de ideias",
      "Módulos internos do sistema",
    ],
  },
  bot: {
    title: "Bot de atendimento no WhatsApp",
    text:
      "Atendimento automatizado para WhatsApp: menu numerado, respostas por palavra-chave (horário, planos, endereço) e handoff transparente para um atendente humano quando o bot não entende a pergunta. Backend em FastAPI com máquina de estados própria, plugável em qualquer negócio via arquivo de configuração — sem tocar no código.",
  },
  lead: {
    tag: "Estudo de caso",
    title: "Lead Recovery para empresas de telhado",
    text:
      "Três automações com n8n e IA para uma empresa de serviços: responde ligações e formulários perdidos, faz follow-up de orçamentos parados e pede avaliação no Google. Direcionado a pequenas empresas nos EUA.",
    link: "Ver o case",
  },
  contact: {
    title: "Quer algo parecido?",
    text: "Sistema sob medida, sério e testado, para o seu negócio.",
  },
};

export const home = { en, pt };
