import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "Танцевальная студия «Хип-хоп Щелчок» | Новопеределкино",
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
    <html lang="ru" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex-1 flex flex-col">
          <header className="py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Логотип"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">
                Хип-хоп Щелчок
              </span>
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:underline">Главная</Link>
              <Link href="/about" className="hover:underline">О нас</Link>
              <Link href="/contacts" className="hover:underline">Контакты</Link>
            </nav>
          </header>
          <div className="flex-1">
            {children}
          </div>
          <footer className="py-10 text-center text-sm text-white/70 mt-auto">
            <p>© {new Date().getFullYear()} Хип-хоп Щелчок. Все права защищены.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
