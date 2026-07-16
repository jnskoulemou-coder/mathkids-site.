import type { Metadata } from "next";
import Link from "next/link";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

export const metadata: Metadata = {
  title: "Réussite Plus",
  description:
    "App de maths gratuite pour tous les niveaux (primaire, collège, lycée), ebooks pratiques, et ressources BAC pour les francophones du monde entier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/" className="font-bold text-lg text-indigo-600">
              Réussite Plus
            </Link>
            <div className="flex gap-5 text-sm font-medium">
              <Link href="/" className="hover:text-indigo-600">
                Accueil
              </Link>
              <Link href="/exercices" className="hover:text-indigo-600">
                Exercices
              </Link>
              <Link href="/ebooks" className="hover:text-indigo-600">
                Ebooks
              </Link>
              <Link href="/bac" className="hover:text-indigo-600">
                BAC
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Réussite Plus — Tous droits réservés
        </footer>
        <ChatWidget />
      </body>
    </html>
  );
}
