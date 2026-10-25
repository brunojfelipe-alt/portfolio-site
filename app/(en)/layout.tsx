import type { Metadata } from "next";
import "../globals.css";
import { fontClasses } from "../_components/fonts";
import { home } from "../_i18n/home";

export const metadata: Metadata = {
  title: home.en.metaTitle,
  description: home.en.metaDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={home.en.htmlLang} className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
