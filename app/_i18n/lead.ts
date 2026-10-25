const en = {
  metaTitle: "Lead Recovery for Roofing Companies — Bruno Felipe",
  metaDescription:
    "AI-assisted follow-up for roofing companies: answer missed calls, chase silent quotes, and ask for Google reviews automatically.",
  nav: { portfolio: "Portfolio", problem: "Problem", modules: "Modules", math: "The math", contact: "Contact" },
  kicker: "Case study · Roofing",
  title: "Never lose a roofing lead to a missed call",
  tagline:
    "Three small automations for a roofing company: answer every inquiry, chase quotes that go quiet, and ask for reviews. Built with n8n and an AI model, shown here on a fictional company, Summit Ridge Roofing.",
  problem: {
    tag: "The problem",
    title: "Where roofing leads leak",
    items: [
      "Calls and forms that arrive after hours or on a roof get an answer a day later, or never.",
      "Quotes are sent and then forgotten, because follow-up is nobody's job.",
      "Finished jobs rarely turn into Google reviews, because nobody asks at the right time.",
    ],
  },
  demo: {
    tag: "Demo",
    title: "One full cycle",
    text:
      "Lead in, reply out, quote follow-up, review request. Waiting times are compressed in the recording (days become minutes).",
    soon: "Demo video coming soon",
  },
  modulesSection: { tag: "What it does", title: "Three modules" },
  modules: [
    {
      title: "1. Lead recovery",
      text:
        "A missed call or web form becomes a reply within seconds. An AI assistant introduces itself as a virtual assistant, answers only what the owner configured, asks for the property address, and proposes two inspection slots marked pending owner confirmation. An active roof leak or storm damage alerts the owner immediately.",
      alt: "n8n workflow: lead recovery",
    },
    {
      title: "2. Quote follow-up",
      text:
        "Quotes go silent. After a quote is sent, three short follow-ups go out on days 2, 5 and 10. The sequence stops the moment the customer replies or the quote is closed, so nobody gets nagged.",
      alt: "n8n workflow: quote follow-up",
    },
    {
      title: "3. Review requests",
      text:
        "After a job is done, the customer gets a request with your Google review link, and one reminder if they have not left a review. Happy customers are asked while the job is fresh.",
      alt: "n8n workflow: review request",
    },
  ],
  math: {
    tag: "Illustrative example",
    title: "What one recovered lead is worth",
    text:
      "Assumptions, not a promise: a company receives 40 inbound leads a month, 20% are missed, the automation recovers 70% of those, 30% of the recovered leads become jobs, and the average job is $9,000.",
    rows: [
      ["Inbound leads per month", "40"],
      ["Missed (20%)", "8"],
      ["Recovered by the automation (70%)", "5.6"],
      ["Recovered leads that convert (30%)", "1.68 jobs"],
      ["Average job", "$9,000"],
    ],
    total: ["Revenue recovered per month", "about $15,100"],
    note:
      "Illustrative example, not a guarantee. Your numbers will differ; plug in your own lead volume and job value.",
  },
  how: {
    tag: "How it works",
    title: "Under the hood",
    head: ["Flow", "Trigger", "What happens"],
    rows: [
      ["Lead recovery", "Form, missed call, chat or email", "AI reply, qualification, owner alert if urgent"],
      ["Quote follow-up", "Quote sent", "3 follow-ups; stops on reply"],
      ["Review request", "Job marked done", "Review link plus one reminder"],
    ],
    note:
      "In this demo, every email is held in a queue and released only to a test address, so no real customer is ever contacted. On a client project, sending uses the client's own Gmail, Outlook or SMTP account. If a step fails, the owner gets an alert.",
  },
  contact: {
    title: "Want this for your roofing company?",
    text: "Launch pricing is available for the first few clients.",
  },
};

export type LeadContent = typeof en;

const pt: LeadContent = {
  metaTitle: "Lead Recovery para Empresas de Telhado — Bruno Felipe",
  metaDescription:
    "Acompanhamento com IA para empresas de telhado: responde ligações perdidas, cobra orçamentos parados e pede avaliações no Google automaticamente.",
  nav: { portfolio: "Portfólio", problem: "Problema", modules: "Módulos", math: "A conta", contact: "Contato" },
  kicker: "Estudo de caso · Telhados",
  title: "Nunca perca um lead de telhado por uma ligação perdida",
  tagline:
    "Três pequenas automações para uma empresa de telhados: responder todo contato, cobrar orçamentos que esfriam e pedir avaliações. Feito com n8n e um modelo de IA, mostrado aqui em uma empresa fictícia, a Summit Ridge Roofing.",
  problem: {
    tag: "O problema",
    title: "Onde os leads de telhado se perdem",
    items: [
      "Ligações e formulários que chegam fora do horário, ou com o time em cima de um telhado, são respondidos um dia depois, ou nunca.",
      "Orçamentos são enviados e esquecidos, porque o acompanhamento não é tarefa de ninguém.",
      "Serviços concluídos raramente viram avaliações no Google, porque ninguém pede na hora certa.",
    ],
  },
  demo: {
    tag: "Demo",
    title: "Um ciclo completo",
    text:
      "Lead entra, resposta sai, follow-up do orçamento, pedido de avaliação. Os tempos de espera estão comprimidos na gravação (dias viram minutos).",
    soon: "Vídeo de demonstração em breve",
  },
  modulesSection: { tag: "O que faz", title: "Três módulos" },
  modules: [
    {
      title: "1. Recuperação de leads",
      text:
        "Uma ligação perdida ou formulário do site vira uma resposta em segundos. Um assistente de IA se apresenta como assistente virtual, responde só o que o dono configurou, pede o endereço do imóvel e propõe dois horários de inspeção marcados como pendentes de confirmação do dono. Vazamento ativo ou dano de tempestade alerta o dono na hora.",
      alt: "Workflow n8n: recuperação de leads",
    },
    {
      title: "2. Follow-up de orçamento",
      text:
        "Orçamentos ficam em silêncio. Depois que um orçamento é enviado, três follow-ups curtos saem nos dias 2, 5 e 10. A sequência para assim que o cliente responde ou o orçamento é fechado, então ninguém é incomodado à toa.",
      alt: "Workflow n8n: follow-up de orçamento",
    },
    {
      title: "3. Pedido de avaliação",
      text:
        "Depois que o serviço é concluído, o cliente recebe um pedido com o seu link de avaliação do Google e um lembrete se ainda não avaliou. Clientes satisfeitos são abordados com o serviço ainda fresco na memória.",
      alt: "Workflow n8n: pedido de avaliação",
    },
  ],
  math: {
    tag: "Exemplo ilustrativo",
    title: "Quanto vale um lead recuperado",
    text:
      "Premissas, não promessa: uma empresa recebe 40 leads por mês, 20% são perdidos, a automação recupera 70% deles, 30% dos recuperados viram serviço e o serviço médio custa US$ 9.000.",
    rows: [
      ["Leads recebidos por mês", "40"],
      ["Perdidos (20%)", "8"],
      ["Recuperados pela automação (70%)", "5,6"],
      ["Recuperados que fecham (30%)", "1,68 serviços"],
      ["Serviço médio", "US$ 9.000"],
    ],
    total: ["Receita recuperada por mês", "cerca de US$ 15.100"],
    note:
      "Exemplo ilustrativo, não garantia. Seus números serão diferentes; use o seu volume de leads e o valor do seu serviço.",
  },
  how: {
    tag: "Como funciona",
    title: "Por dentro",
    head: ["Fluxo", "Gatilho", "O que acontece"],
    rows: [
      ["Recuperação de leads", "Formulário, ligação perdida, chat ou e-mail", "Resposta da IA, qualificação, alerta ao dono se urgente"],
      ["Follow-up de orçamento", "Orçamento enviado", "3 follow-ups; para se o cliente responder"],
      ["Pedido de avaliação", "Serviço marcado como concluído", "Link de avaliação mais um lembrete"],
    ],
    note:
      "Nesta demo, todo e-mail fica em uma fila e só é liberado para um endereço de teste, então nenhum cliente real é contatado. Em um projeto de cliente, o envio usa o Gmail, Outlook ou SMTP do próprio cliente. Se uma etapa falhar, o dono recebe um alerta.",
  },
  contact: {
    title: "Quer isso para a sua empresa de telhados?",
    text: "Há preço de lançamento para os primeiros clientes.",
  },
};

export const lead = { en, pt };
