import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Танцевальная студия «Хип-хоп Щелчок» | Щелково",
  description:
    "Хип-хоп студия в Щелково: тренировки с удовольствием, бесплатное пробное занятие, брейкинг — олимпийский вид спорта.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Танцевальная студия «Хип-хоп Щелчок»",
    description:
      "Запишитесь на бесплатное занятие. Физподготовка, дисциплина, внимание и командный дух.",
    type: "website",
    locale: "ru_RU",
    siteName: "Хип-хоп Щелчок",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <header className="py-6 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold heading-gradient">
              Хип-хоп Щелчок
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:underline">Главная</Link>
              <Link href="/about" className="hover:underline">О нас</Link>
              <Link href="/contacts" className="hover:underline">Контакты</Link>
            </nav>
          </header>
          {children}
          <footer className="py-10 text-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} Хип-хоп Щелчок. Все права защищены.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
