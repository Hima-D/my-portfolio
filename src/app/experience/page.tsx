export const metadata = { title: "Experience" };

export default function Experience() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tighter">Experience</h1>
        <p className="text-gray-500">Building AI systems from research to production.</p>
      </header>

      <div className="space-y-10">
        <section className="space-y-2">
          <div className="flex justify-between gap-4">
            <h2 className="font-bold">Founder — PyFund / Enack</h2>
            <span className="text-xs font-mono text-gray-400">2021 — Present</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            EdTech + Quant. Enack serves 15k+ students across 28 institutions ($750k seed, 230% YoY growth). PyFund builds PyFundLib for
            systematic trading. Knowledge graphs, spaced repetition, and broker-grade execution.
          </p>
          <p className="text-xs font-mono text-gray-400">Lead • Python • Next.js • PostgreSQL</p>
        </section>

        <section className="space-y-2">
          <div className="flex justify-between gap-4">
            <h2 className="font-bold">Coinwave — AI Financial Advisor</h2>
            <span className="text-xs font-mono text-gray-400">2023 — Present</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lead on CoinSage — portfolio optimization and risk models serving 8.5k users. Gradient boosting, multi-chain transaction analysis,
            and NLP over 30k articles/week.
          </p>
          <p className="text-xs font-mono text-gray-400">PyTorch • FastAPI • React</p>
        </section>

        <section className="space-y-2">
          <div className="flex justify-between gap-4">
            <h2 className="font-bold">MedAnalytics & Retail Forecasting</h2>
            <span className="text-xs font-mono text-gray-400">2023 — 2024</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Healthcare ETL (50k records/day, Airflow/Postgres, Great Expectations — 87% error reduction) and pharma retail forecasting (22%
            accuracy gain, LSTM + ARIMA).
          </p>
          <p className="text-xs font-mono text-gray-400">Airflow • TensorFlow • D3.js</p>
        </section>
      </div>

      <div className="pt-8 border-t border-gray-100">
        <a href="mailto:dixithimanshu012@gmail.com" className="text-sm font-medium underline">
          Request CV →
        </a>
      </div>
    </div>
  );
}
