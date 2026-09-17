---
created: 2026-09-17
tags: [plano, freelancer, portfolio]
status: aprovado
---

# Portfolio Site — Plano de Implementação

**Objetivo:** landing page estática com dois estudos de caso (CRM clínica, QuantSense) publicada gratuitamente no Vercel.

**Arquitetura:** Next.js App Router em modo `output: 'export'` (site 100% estático, sem servidor/DB — diferente do CRM que tem backend). Uma página única com seções âncora (Hero, Case CRM, Case QuantSense, Contato). Screenshots do QuantSense copiados do artifact já capturado (5 imagens em `C:\Users\Bruno\AppData\Roaming\Hermes\composer-images\`) para dentro de `public/quantsense/`.

**Stack:** Next.js 16 (mesma versão do CRM), React 19, CSS puro (sem framework de UI — página simples não justifica dependência extra), deploy Vercel free tier.

**Spec:** `70 Documentos/portfolio-site-design-2026-09-17.md`

## Restrições globais

- Sem backend, sem banco de dados — puramente estático (`next export`).
- Sem domínio próprio nesta fase — usa `*.vercel.app`.
- Case QuantSense NÃO destaca números de retorno (CAGR/Total Return) como métrica principal — foco em metodologia/rigor técnico, para não soar como recomendação de investimento antes do disclaimer da Fase 2.
- Repo próprio, isolado (não reaproveitar histórico de `Desktop/programacao/`), git novo limpo — mesmo padrão usado no CRM.
- E-mail de contato: `brunojfelipe@usp.br`.

## Tarefa 1: Scaffold do projeto

**Arquivos:**
- Criar: `portfolio-site/package.json`
- Criar: `portfolio-site/next.config.mjs`
- Criar: `portfolio-site/app/layout.tsx`
- Criar: `portfolio-site/app/page.tsx`
- Criar: `portfolio-site/app/globals.css`
- Criar: `portfolio-site/.gitignore`

**Interfaces:**
- Produz: projeto Next.js buildável com `npm run build` gerando pasta `out/` estática.

- [ ] Passo 1: rodar `npx create-next-app@latest portfolio-site --typescript --app --no-tailwind --no-src-dir --import-alias "@/*"` (aceitar defaults restantes)
- [ ] Passo 2: em `next.config.mjs`, definir:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
export default nextConfig;
```
- [ ] Passo 3: rodar `npm run build` e confirmar que gera `out/index.html` sem erro
- [ ] Passo 4: `git init`, criar `.gitignore` com `node_modules/`, `.next/`, `out/`
- [ ] Passo 5: commit inicial `"Scaffold Next.js estático"`

## Tarefa 2: Copiar assets do QuantSense

**Arquivos:**
- Criar: `portfolio-site/public/quantsense/overview.png`
- Criar: `portfolio-site/public/quantsense/pipeline.png`
- Criar: `portfolio-site/public/quantsense/master-ai.png`
- Criar: `portfolio-site/public/quantsense/discipline.png`
- Criar: `portfolio-site/public/quantsense/modules.png`

**Interfaces:**
- Consome: as 5 imagens em `C:\Users\Bruno\AppData\Roaming\Hermes\composer-images\image_8672ef.png` (overview), `image_326ab2.png` (pipeline), `image_9f8efa.png` (master-ai), `image_ebfb59.png` (discipline), `image_7cbcb7.png` (modules).
- Produz: 5 arquivos PNG em `public/quantsense/`, prontos para referência via `<img src="/quantsense/overview.png">`.

- [ ] Passo 1: copiar cada arquivo renomeando conforme mapeamento acima:
```bash
cp "C:\Users\Bruno\AppData\Roaming\Hermes\composer-images\image_8672ef.png" portfolio-site/public/quantsense/overview.png
cp "C:\Users\Bruno\AppData\Roaming\Hermes\composer-images\image_326ab2.png" portfolio-site/public/quantsense/pipeline.png
cp "C:\Users\Bruno\AppData\Roaming\Hermes\composer-images\image_9f8efa.png" portfolio-site/public/quantsense/master-ai.png
cp "C:\Users\Bruno\AppData\Roaming\Hermes\composer-images\image_ebfb59.png" portfolio-site/public/quantsense/discipline.png
cp "C:\Users\Bruno\AppData\Roaming\Hermes\composer-images\image_7cbcb7.png" portfolio-site/public/quantsense/modules.png
```
- [ ] Passo 2: confirmar os 5 arquivos existem com `ls portfolio-site/public/quantsense/`
- [ ] Passo 3: commit `"Adiciona screenshots do QuantSense"`

## Tarefa 3: Conteúdo — Hero e navegação

**Arquivos:**
- Modificar: `portfolio-site/app/page.tsx`
- Modificar: `portfolio-site/app/globals.css`

**Interfaces:**
- Produz: seção `<header>` fixa com âncoras `#crm`, `#quantsense`, `#contato`; seção `<section id="hero">`.

- [ ] Passo 1: em `app/page.tsx`, criar componente de página com header e hero:
```tsx
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
```
- [ ] Passo 2: em `app/globals.css`, estilos base (dark theme, mono/serif mix, sem framework):
```css
:root {
  --bg: #0a0a0f;
  --fg: #e8e8ec;
  --muted: #9a9aa5;
  --accent: #ff8a3d;
  --card: #14141c;
  --border: #26262f;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background: var(--bg);
  color: var(--fg);
  font-family: -apple-system, "Segoe UI", sans-serif;
  line-height: 1.5;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 10;
}
.nav-name { font-weight: 600; }
.nav a {
  color: var(--muted);
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 0.9rem;
}
.nav a:hover { color: var(--accent); }
.hero {
  padding: 6rem 2rem 4rem;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}
.hero h1 { font-size: 2.5rem; margin-bottom: 1rem; }
.tagline { color: var(--muted); font-size: 1.1rem; }
```
- [ ] Passo 3: rodar `npm run dev`, abrir `localhost:3000`, confirmar hero renderiza
- [ ] Passo 4: commit `"Hero e navegação"`

## Tarefa 4: Case study — CRM

**Arquivos:**
- Modificar: `portfolio-site/app/page.tsx`
- Modificar: `portfolio-site/app/globals.css`

**Interfaces:**
- Consome: URL do repo `https://github.com/brunojfelipe-alt/crm-clinica-demo`.
- Produz: seção `<section id="crm">` com resumo e link.

- [ ] Passo 1: adicionar seção logo após o hero em `page.tsx`:
```tsx
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
```
- [ ] Passo 2: adicionar estilos da seção em `globals.css`:
```css
.case {
  max-width: 720px;
  margin: 0 auto;
  padding: 3rem 2rem;
  border-top: 1px solid var(--border);
}
.case-tag {
  color: var(--accent);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.case h2 { margin: 0.5rem 0 1rem; font-size: 1.8rem; }
.case p { color: var(--muted); margin-bottom: 1rem; }
.case-links a {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
}
```
- [ ] Passo 3: `npm run dev`, confirmar seção CRM renderiza com link funcional
- [ ] Passo 4: commit `"Case study CRM"`

## Tarefa 5: Case study — QuantSense

**Arquivos:**
- Modificar: `portfolio-site/app/page.tsx`
- Modificar: `portfolio-site/app/globals.css`

**Interfaces:**
- Consome: imagens de `public/quantsense/` (Tarefa 2), URL do repo `https://github.com/brunojfelipe-alt/quantsense` (repo hoje privado — link fica presente mas pode retornar 404 até Fase 2 tornar público; aceitável nesta fase).
- Produz: seção `<section id="quantsense">` com galeria de 5 imagens e resumo técnico, sem números de retorno como destaque.

- [ ] Passo 1: adicionar seção após CRM em `page.tsx`:
```tsx
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
```
- [ ] Passo 2: adicionar estilos da galeria:
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.gallery img {
  width: 100%;
  border-radius: 6px;
  border: 1px solid var(--border);
}
```
- [ ] Passo 3: `npm run dev`, confirmar galeria renderiza as 5 imagens sem quebrar layout
- [ ] Passo 4: commit `"Case study QuantSense"`

## Tarefa 6: Contato e rodapé

**Arquivos:**
- Modificar: `portfolio-site/app/page.tsx`
- Modificar: `portfolio-site/app/globals.css`

**Interfaces:**
- Produz: seção `<section id="contato">` com e-mail copiável.

- [ ] Passo 1: adicionar seção final em `page.tsx`, fechando `<main>`:
```tsx
<section id="contato" className="contato">
  <h2>Quer algo parecido?</h2>
  <p>Sistema sob medida, sério e testado, para o seu negócio.</p>
  <a className="email-btn" href="mailto:brunojfelipe@usp.br">
    brunojfelipe@usp.br
  </a>
</section>

<footer className="footer">
  <span>© {new Date().getFullYear()} Bruno Felipe</span>
</footer>
```
- [ ] Passo 2: estilos:
```css
.contato {
  max-width: 720px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  border-top: 1px solid var(--border);
}
.contato h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
.contato p { color: var(--muted); margin-bottom: 1.5rem; }
.email-btn {
  display: inline-block;
  color: var(--bg);
  background: var(--accent);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
}
.footer {
  text-align: center;
  padding: 2rem;
  color: var(--muted);
  font-size: 0.85rem;
}
```
- [ ] Passo 3: `npm run dev`, confirmar seção de contato e rodapé
- [ ] Passo 4: commit `"Contato e rodapé"`

## Tarefa 7: Metadata e build final

**Arquivos:**
- Modificar: `portfolio-site/app/layout.tsx`

**Interfaces:**
- Produz: `<title>` e `<meta description>` corretos para SEO básico.

- [ ] Passo 1: editar metadata em `layout.tsx`:
```tsx
export const metadata = {
  title: "Bruno Felipe — Desenvolvedor Freelancer",
  description:
    "Sistemas sob medida: CRMs, automações e análise de risco de dados financeiros com IA.",
};
```
- [ ] Passo 2: rodar `npm run build`, confirmar `out/index.html` gerado sem erros e sem warnings de imagem/link quebrado
- [ ] Passo 3: commit `"Metadata SEO"`

## Tarefa 8: Repositório GitHub e deploy Vercel

**Arquivos:**
- Nenhum arquivo novo — ações de infraestrutura.

- [ ] Passo 1: criar repo novo `gh repo create brunojfelipe-alt/portfolio-site --public --source=. --remote=origin` (dentro de `portfolio-site/`)
- [ ] Passo 2: `git push -u origin main`
- [ ] Passo 3: conectar repo ao Vercel (via `vercel` CLI: `npx vercel --prod`, ou painel vercel.com → Import Project → selecionar `portfolio-site`)
- [ ] Passo 4: confirmar build de produção passa no Vercel e a URL `*.vercel.app` carrega as 3 seções corretamente
- [ ] Passo 5: registrar a URL final em `10 Projetos/portfolio-site/` no vault

## Auto-revisão

- Cobertura do spec: Hero (T3), Case CRM (T4), Case QuantSense (T5), Contato (T6) — todas as seções da Fase 1 cobertas. Deploy sem custo (T8, Vercel free). Sem domínio próprio (não implementado, conforme spec). Sem números de retorno em destaque no QuantSense (T5, texto focado em metodologia).
- Sem placeholders: todos os passos de código têm bloco completo.
- Consistência: nomes de arquivo de imagem em T2 e T5 conferem (`overview.png`, `pipeline.png`, `master-ai.png`, `discipline.png`, `modules.png`).
