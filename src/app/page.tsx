import Link from "next/link";

const projects = [
  {
    name: "PyFundLib",
    href: "https://github.com/Hima-D/pyfundlib",
    tag: "Quant • Python",
    desc: "Institutional-grade quantitative finance framework — backtesting, ML (LSTM/XGBoost), multi-broker execution (Alpaca, Zerodha, IBKR, Binance), zstd-parquet cache, DSR/PBO validation. pip install pyfundlib.",
    meta: "2025 • Python • 1.2k commits",
  },
  {
    name: "PortaBot",
    href: "https://github.com/Hima-D/portabot",
    tag: "RAG • PostgreSQL",
    desc: "RAG chatbot platform with PostgreSQL + USE embeddings and React dashboard. Ingest, embed, retrieve, chat — end-to-end.",
    meta: "2026 • TypeScript • RAG",
  },
  {
    name: "Lawgical",
    href: "https://lawyer-portal.vercel.app",
    tag: "Next.js • Vercel",
    desc: "Lawyer portal — client intake, case tracking, and document workflow. Deployed on Vercel.",
    meta: "2026 • Next.js • Live",
  },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">Himanshu Dixit — Chennai, India</p>
        <h1 className="text-4xl font-bold tracking-tighter leading-tight">
          AI Engineer building <span className="underline decoration-gray-200 underline-offset-4">PyFundLib</span> and production ML systems.
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
          Founder at <a href="https://www.pyfund.tech" className="underline decoration-gray-200">PyFund</a> — transforming finance and education with AI. I ship
          typed Python, Next.js, and RAG pipelines that go from research to production. Previously Enack (15k+ students), Coinwave, MedAnalytics.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="mailto:dixithimanshu012@gmail.com" className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors">
            Email me
          </a>
          <a href="https://github.com/Hima-D" className="px-4 py-2 border border-gray-200 text-sm font-medium rounded-full hover:border-black transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/him-d" className="px-4 py-2 border border-gray-200 text-sm font-medium rounded-full hover:border-black transition-colors">
            LinkedIn
          </a>
          <a href="/projects" className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black">
            View work →
          </a>
        </div>
        <p className="text-xs font-mono text-gray-400">
          Open to AI/ML Engineer roles • Python • TypeScript • PyTorch • TensorFlow
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Selected Work</h2>
          <Link href="/projects" className="text-xs font-mono text-gray-400 hover:text-black">
            View all →
          </Link>
        </div>
        <div className="divide-y divide-gray-100 border-y border-gray-100">
          {projects.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-2 py-6 hover:bg-gray-50 -mx-3 px-3 transition-colors">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-bold tracking-tighter group-hover:tracking-tight transition-all">{p.name}</h3>
                <span className="text-xs font-mono text-gray-400 shrink-0">{p.tag}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{p.desc}</p>
              <span className="text-xs font-mono text-gray-400">{p.meta}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Experience</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between gap-4">
            <span>
              <span className="font-semibold">Founder, PyFund</span> <span className="text-gray-500">— Quant + EdTech</span>
            </span>
            <span className="font-mono text-xs text-gray-400">2023 – Present</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>
              <span className="font-semibold">Coinwave</span> <span className="text-gray-500">— AI Financial Advisor (8.5k users)</span>
            </span>
            <span className="font-mono text-xs text-gray-400">2023 – Present</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>
              <span className="font-semibold">Enack</span> <span className="text-gray-500">— Co-founder, 15k students, $750k seed</span>
            </span>
            <span className="font-mono text-xs text-gray-400">2021 – Present</span>
          </div>
          <Link href="/experience" className="inline-block text-xs font-mono text-gray-500 hover:text-black pt-2">
            Full experience →
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Stack</h2>
        <p className="text-sm font-mono text-gray-500 leading-relaxed">
          Python • TypeScript • Next.js • PyTorch • TensorFlow • PostgreSQL • USE Embeddings • Tailwind • Vercel • GitHub Pages
        </p>
      </section>
    </div>
  );
}
