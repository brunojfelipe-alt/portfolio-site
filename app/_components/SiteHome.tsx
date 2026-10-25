import Link from "next/link";
import ImageLightbox from "./ImageLightbox";
import LangSwitch from "./LangSwitch";
import { home, type Lang } from "../_i18n/home";

export default function SiteHome({ lang }: { lang: Lang }) {
  const t = home[lang];
  const prefix = lang === "pt" ? "/pt" : "";
  const crmImgs = ["dashboard", "agenda", "clientes", "procedimentos", "extrato"];
  const quantImgs = ["overview", "pipeline", "master-ai", "discipline", "modules"];

  return (
    <>
      <main>
        <header className="nav">
          <span className="nav-name">Bruno Felipe</span>
          <nav>
            <a href="#crm">{t.nav.crm}</a>
            <a href="#quantsense">{t.nav.quantsense}</a>
            <a href="#whatsapp-bot">{t.nav.bot}</a>
            <a href="#lead-recovery">{t.nav.lead}</a>
            <a href="#contato">{t.nav.contact}</a>
            <LangSwitch lang={lang} path="" />
          </nav>
        </header>

        <section id="hero" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <span className="hero-kicker">{t.heroKicker}</span>
          <h1>Bruno Felipe</h1>
          <p className="tagline">{t.tagline}</p>
        </section>

        <div className="cases-grid">
          <section id="crm" className="case">
            <div className="case-head">
              <span className="case-tag">{t.caseTag}</span>
              <h2>{t.crm.title}</h2>
            </div>
            <p>{t.crm.text}</p>
            <ImageLightbox>
              <div className="gallery">
                {crmImgs.map((n, i) => (
                  <img key={n} className={`g-${i + 1}`} src={`/crm/${n}.png`} alt={t.crm.alts[i]} />
                ))}
              </div>
            </ImageLightbox>
            <div className="case-links">
              <a href="https://github.com/brunojfelipe-alt/crm-clinica-demo" target="_blank" rel="noopener">
                {t.repo} <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          <section id="quantsense" className="case case-featured">
            <div className="case-head">
              <span className="case-tag">{t.caseTag}</span>
              <h2>{t.quant.title}</h2>
            </div>
            <p>{t.quant.text1}</p>
            <p>{t.quant.text2}</p>
            <ImageLightbox>
              <div className="gallery">
                {quantImgs.map((n, i) => (
                  <img key={n} className={`g-${i + 1}`} src={`/quantsense/${n}.png`} alt={t.quant.alts[i]} />
                ))}
              </div>
            </ImageLightbox>
            <div className="case-links">
              <span className="case-link-disabled" title={t.repoPrivateTitle}>
                <span className="case-link-state case-link-state--default" aria-hidden="true">
                  {t.repo} <span>→</span>
                </span>
                <span className="case-link-state case-link-state--locked" aria-hidden="true">
                  {t.repoPrivate} <span>🔒</span>
                </span>
                <span className="visually-hidden">{t.repoPrivateTitle}</span>
              </span>
            </div>
          </section>
        </div>

        <section id="whatsapp-bot" className="case case-standalone">
          <div className="case-head">
            <span className="case-tag">{t.caseTag}</span>
            <h2>{t.bot.title}</h2>
          </div>
          <p>{t.bot.text}</p>
          <video className="demo-video" src="/whatsapp/demo.mp4" controls playsInline preload="metadata" />
          <div className="case-links">
            <a href="https://github.com/brunojfelipe-alt/whatsapp-bot" target="_blank" rel="noopener">
              {t.repo} <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section id="lead-recovery" className="case case-standalone">
          <div className="case-head">
            <span className="case-tag">{t.lead.tag}</span>
            <h2>{t.lead.title}</h2>
          </div>
          <p>{t.lead.text}</p>
          <div className="case-links">
            <Link href={`${prefix}/lead-recovery`}>
              {t.lead.link} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section id="contato" className="contato">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <a className="email-btn" href="mailto:brunojfelipe.dev@gmail.com">
            brunojfelipe.dev@gmail.com
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Bruno Felipe</span>
      </footer>
    </>
  );
}
