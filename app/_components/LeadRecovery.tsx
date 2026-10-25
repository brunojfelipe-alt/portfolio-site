import Link from "next/link";
import ImageLightbox from "./ImageLightbox";
import LangSwitch from "./LangSwitch";
import { lead } from "../_i18n/lead";
import type { Lang } from "../_i18n/home";
import styles from "./LeadRecovery.module.css";

// Flip to true after the demo video and screenshots are saved in /public/lead-recovery/.
const HAS_MEDIA = false;

const shots = ["a", "b", "c"];

export default function LeadRecovery({ lang }: { lang: Lang }) {
  const t = lead[lang];
  const prefix = lang === "pt" ? "/pt" : "";

  return (
    <>
      <main>
        <header className="nav">
          <span className="nav-name">Bruno Felipe</span>
          <nav>
            <Link href={prefix || "/"}>{t.nav.portfolio}</Link>
            <a href="#problem">{t.nav.problem}</a>
            <a href="#modules">{t.nav.modules}</a>
            <a href="#math">{t.nav.math}</a>
            <a href="#contact">{t.nav.contact}</a>
            <LangSwitch lang={lang} path="/lead-recovery" />
          </nav>
        </header>

        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <span className="hero-kicker">{t.kicker}</span>
          <h1 className={styles.title}>{t.title}</h1>
          <p className="tagline">{t.tagline}</p>
        </section>

        <section id="problem" className="case case-standalone">
          <div className="case-head">
            <span className="case-tag">{t.problem.tag}</span>
            <h2>{t.problem.title}</h2>
          </div>
          <ul className={styles.list}>
            {t.problem.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        <section id="demo" className="case case-standalone">
          <div className="case-head">
            <span className="case-tag">{t.demo.tag}</span>
            <h2>{t.demo.title}</h2>
          </div>
          <p>{t.demo.text}</p>
          {HAS_MEDIA ? (
            <video className="demo-video" src="/lead-recovery/demo.mp4" controls playsInline preload="metadata" />
          ) : (
            <div className={styles.placeholder}>{t.demo.soon}</div>
          )}
        </section>

        <section id="modules" className="case case-standalone">
          <div className="case-head">
            <span className="case-tag">{t.modulesSection.tag}</span>
            <h2>{t.modulesSection.title}</h2>
          </div>
          <div className={styles.modules}>
            {t.modules.map((m, idx) => (
              <article key={m.title} className={styles.module}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                {HAS_MEDIA ? (
                  <ImageLightbox>
                    <div className={styles.shot}>
                      <img src={`/lead-recovery/canvas-${shots[idx]}.png`} alt={m.alt} />
                    </div>
                  </ImageLightbox>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="math" className="case case-standalone">
          <div className="case-head">
            <span className="case-tag">{t.math.tag}</span>
            <h2>{t.math.title}</h2>
          </div>
          <p>{t.math.text}</p>
          <table className={styles.table}>
            <tbody>
              {t.math.rows.map(([a, b]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
              <tr className={styles.total}>
                <td>{t.math.total[0]}</td>
                <td>{t.math.total[1]}</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}>{t.math.note}</p>
        </section>

        <section id="how" className="case case-standalone">
          <div className="case-head">
            <span className="case-tag">{t.how.tag}</span>
            <h2>{t.how.title}</h2>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                {t.how.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.how.rows.map((r) => (
                <tr key={r[0]}>
                  {r.map((c) => (
                    <td key={c}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.note}>{t.how.note}</p>
        </section>

        <section id="contact" className="contato">
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
