'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-24">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tighter text-black mb-8">
          Full-Stack AI Engineer specializing in Transformer Architectures.
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-12">
          I build intelligent systems that bridge data, design, and decision-making. This portfolio is a live demonstration of client-side machine learning, word analytics, and predictive modeling.
        </p>
        <div className="flex gap-8 text-sm font-bold tracking-tighter">
          <a href="mailto:dixithimanshu012@gmail.com" className="text-black hover:underline">EMAIL</a>
          <a href="https://github.com/hima-d" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">GITHUB</a>
          <a href="https://linkedin.com/in/him-d" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">LINKEDIN</a>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Interactive AI Tools</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <Link href="/analytics" className="group block border-b border-gray-100 pb-12 hover:border-black transition-colors">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-2xl font-bold tracking-tighter">Word Analytics</h3>
              <span className="text-xs font-mono text-gray-400 group-hover:text-black transition-colors">01</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xl">Analyze word probability distributions and semantic importance in real-time using Universal Sentence Encoder.</p>
          </Link>

          <Link href="/prediction" className="group block border-b border-gray-100 pb-12 hover:border-black transition-colors">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-2xl font-bold tracking-tighter">Token Prediction</h3>
              <span className="text-xs font-mono text-gray-400 group-hover:text-black transition-colors">02</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xl">Use MobileBERT to predict masked tokens and explore alternative contexts directly in the browser.</p>
          </Link>

          <Link href="/semantic" className="group block border-b border-gray-100 pb-12 hover:border-black transition-colors">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-2xl font-bold tracking-tighter">Semantic Search</h3>
              <span className="text-xs font-mono text-gray-400 group-hover:text-black transition-colors">03</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xl">Explore the embedding space and find semantic relationships between concepts using high-dimensional vector similarity.</p>
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Technical Stack</h2>
        <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-mono text-gray-500">
          <span>TensorFlow.js</span>
          <span>Next.js</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>MobileBERT</span>
          <span>Universal Sentence Encoder</span>
        </div>
      </section>
    </div>
  );
}
