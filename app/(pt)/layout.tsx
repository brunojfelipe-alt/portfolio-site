import type { Metadata } from "next";
import "../globals.css";
import { fontClasses } from "../_components/fonts";
import { home } from "../_i18n/home";

export const metadata: Metadata = {
  title: home.pt.metaTitle,
  description: home.pt.metaDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={home.pt.htmlLang} className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
