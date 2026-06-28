import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { StoreHydration } from "@/components/StoreHydration";

export const metadata: Metadata = {
  title: {
    default: "JapanEasy — Learn Japanese the natural way",
    template: "%s · JapanEasy",
  },
  description:
    "A calm, structured path to reading and understanding Japanese — kana, grammar, spaced-repetition flashcards, quizzes and audio, built on a Japanese-first approach.",
  applicationName: "JapanEasy",
  keywords: [
    "learn Japanese",
    "hiragana",
    "katakana",
    "kanji",
    "Japanese grammar",
    "JLPT",
    "flashcards",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0c" },
  ],
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('japaneasy-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&family=Shippori+Mincho+B1:wght@500;600;700;800&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <Script
          id="je-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <StoreHydration />
        <a
          href="#main"
          className="sr-only z-[200] rounded-full bg-shu px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
