import Link from "next/link";
import type { Lang } from "../_i18n/home";

// Switches to the same page in the other language. `path` is the page path without language prefix.
export default function LangSwitch({ lang, path }: { lang: Lang; path: string }) {
  const enHref = path || "/";
  const ptHref = `/pt${path}`;
  return (
    <span className="lang-switch" role="group" aria-label="Language">
      <Link href={enHref} aria-current={lang === "en" ? "true" : undefined} lang="en">
        EN
      </Link>
      <span aria-hidden="true">|</span>
      <Link href={ptHref} aria-current={lang === "pt" ? "true" : undefined} lang="pt-BR">
        PT
      </Link>
    </span>
  );
}
