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
  description: "Премиальный семейный курорт на побережье озера Алаколь в поселке Акши. Комфортабельные деревянные номера, просторные семейные коттеджи, комплексное трехразовое питание включено в стоимость проживания.",
  keywords: "Алаколь, Камария, Kamariya Resort, Акши, зона отдыха Алаколь, номера Алаколь, семейный отдых, Алаколь цены 2026, коттедж Алаколь",
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
