export const metadata = { title: "Projects" };

const projects = [
  {
    name: "PyFundLib",
    href: "https://github.com/Hima-D/pyfundlib",
    desc: "Institutional-Grade Quantitative Finance Framework. Backtesting, ML (LSTM, XGBoost, RF), walk-forward, DSR/PBO, zstd-parquet cache, multi-broker live trading (Alpaca, Zerodha, IBKR, Binance), CLI + scheduler.",
    stack: ["Python", "src layout", "MLflow", "Parquet"],
    highlight: "pip install pyfundlib • Active Sep 2026",
  },
  {
    name: "PortaBot",
    href: "https://github.com/Hima-D/portabot",
    desc: "RAG Chatbot Platform — PostgreSQL + Universal Sentence Encoder embeddings + React dashboard. Document ingest → embed → retrieve → chat.",
    stack: ["PostgreSQL", "USE", "React", "RAG"],
    highlight: "Full-stack RAG",
  },
  {
    name: "Lawgical",
    href: "https://lawyer-portal.vercel.app",
    desc: "Lawyer portal for client intake and case workflow. Next.js on Vercel.",
    stack: ["Next.js", "Vercel"],
    highlight: "Live on Vercel",
  },
  {
    name: "Recommendation Engine",
    href: "https://github.com/Hima-D/recommendation-engine",
    desc: "Python recommendation system — collaborative + content-based filtering.",
    stack: ["Python", "ML"],
    highlight: "Python",
  },
];

export default function Projects() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tighter">Projects</h1>
        <p className="text-gray-500">Real code, not demos. All open source on GitHub.</p>
      </header>
      <div className="space-y-8">
        {projects.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="block border border-gray-100 rounded-2xl p-6 hover:border-gray-200 transition-colors">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h2 className="text-lg font-bold tracking-tighter">{p.name}</h2>
              <span className="text-xs font-mono text-gray-400">{p.highlight}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs font-mono px-2 py-1 bg-gray-50 rounded-full text-gray-500">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      <p className="text-xs font-mono text-gray-400">
        More on <a href="https://github.com/Hima-D" className="underline">GitHub — Hima-D</a> (19 repos)
      </p>
    </div>
  );
}
