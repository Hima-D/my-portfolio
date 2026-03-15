import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Himanshu Dixit | AI Engineer",
  description: "A minimalist AI-first portfolio showcasing Transformer-based word analytics and predictions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-white text-black antialiased`}>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <nav className="flex items-center justify-between mb-24">
            <Link href="/" className="font-bold text-lg tracking-tighter">HIMANSHU DIXIT</Link>
            <div className="flex gap-8 text-sm font-medium text-gray-500">
              <Link href="/analytics" className="hover:text-black transition-colors">Analytics</Link>
              <Link href="/prediction" className="hover:text-black transition-colors">Prediction</Link>
              <Link href="/semantic" className="hover:text-black transition-colors">Semantic</Link>
            </div>
          </nav>
          <main>
            {children}
          </main>
          <footer className="mt-32 pt-12 border-t border-gray-100 text-gray-400 text-xs font-mono">
            © 2026 Himanshu Dixit. Built with TensorFlow.js.
          </footer>
        </div>
      </body>
    </html>
  );
}
