import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const siteUrl = "https://hima-d.github.io/my-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Himanshu Dixit — AI Engineer | PyFund",
    template: "%s — Himanshu Dixit",
  },
  description:
    "AI Engineer building PyFundLib and production ML systems. Founder at PyFund (Chennai) — quantitative finance, RAG platforms, and LLM systems. Open to AI/ML roles.",
  keywords: ["AI Engineer", "Machine Learning", "Quantitative Finance", "PyFundLib", "Next.js", "RAG", "LLM"],
  authors: [{ name: "Himanshu Dixit", url: siteUrl }],
  creator: "Himanshu Dixit",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Himanshu Dixit — AI Engineer | PyFund",
    description: "AI Engineer building PyFundLib (Institutional-Grade Quant Framework) and RAG systems. Chennai.",
    siteName: "Himanshu Dixit",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Himanshu Dixit — AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Dixit — AI Engineer | PyFund",
    description: "Building PyFundLib and production ML systems. Chennai.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
  verification: { google: "aldkpVz1UJxcASd7W76roNr-anxr8iXLBlDbSCtnMIk" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-white text-black antialiased`}>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <nav className="flex items-center justify-between mb-16">
            <Link href="/" className="font-bold text-lg tracking-tighter">
              HIMANSHU DIXIT
            </Link>
            <div className="flex gap-6 text-sm font-medium text-gray-500">
              <Link href="/projects" className="hover:text-black transition-colors">
                Projects
              </Link>
              <Link href="/experience" className="hover:text-black transition-colors">
                Experience
              </Link>
              <Link href="/about" className="hover:text-black transition-colors">
                About
              </Link>
            </div>
          </nav>
          <main>{children}</main>
          <footer className="mt-32 pt-12 border-t border-gray-100 flex flex-col gap-4">
            <div className="flex gap-6 text-xs font-mono text-gray-400">
              <a href="https://github.com/Hima-D" className="hover:text-black">GitHub</a>
              <a href="https://linkedin.com/in/him-d" className="hover:text-black">LinkedIn</a>
              <a href="mailto:dixithimanshu012@gmail.com" className="hover:text-black">Email</a>
              <a href="https://www.pyfund.tech" className="hover:text-black">PyFund</a>
              <span className="ml-auto">Chennai, India</span>
            </div>
            <div className="text-xs font-mono text-gray-300">© 2026 Himanshu Dixit. Next.js • Tailwind • GitHub Pages.</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
