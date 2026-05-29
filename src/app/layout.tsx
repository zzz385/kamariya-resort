import type { Metadata } from "next";
import { Montserrat, Manrope } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kamariya Resort | Комфортный отдых у озера Алаколь, Акши",
  description:
    "Kamariya Resort — зона отдыха на озере Алаколь в поселке Акши. Деревянные номера, семейные коттеджи, трехразовое питание, пляж, цены на сезон 2026.",
  keywords:
    "Алаколь, Алакол, Акши, зона отдыха Алаколь, база отдыха Алаколь, Kamariya Resort, отдых Акши, отдых на Алаколе, семейный отдых Алаколь, цены Алаколь 2026",

  openGraph: {
    title: "Kamariya Resort | Зона отдыха на Алаколе",
    description:
      "Отдых на озере Алаколь в поселке Акши. Номера, семейные коттеджи и трехразовое питание.",
    url: "https://kamariya-resort.vercel.app",
    siteName: "Kamariya Resort",
    locale: "ru_RU",
    type: "website",
  },

  verification: {
    google: "glAIOq0hS_xJgi3jDs7aJnfcNT5luMo_rA9mnV6WJlI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-sand-50 text-ocean-900 selection:bg-sunset-500 selection:text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
