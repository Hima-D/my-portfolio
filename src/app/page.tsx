'use client';

import Image from 'next/image';
import Header from '@/components/header';
import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaBrain, FaRocket, FaDatabase, FaMicrochip, FaTerminal } from 'react-icons/fa';
import TransformerEngine from '@/components/TransformerEngine';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent -z-10"></div>
        
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for AI/ML Engineering
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight">
              Himanshu <span className="text-indigo-600">Dixit</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Full-Stack AI Engineer specializing in <span className="font-bold text-slate-900">Transformer Architectures</span>, Large Language Models, and Scalable Intelligent Systems. I bridge the gap between cutting-edge research and production-ready code.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a href="mailto:dixithimanshu012@gmail.com" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
                <FaEnvelope /> Hire Me
              </a>
              <a href="https://github.com/hima-d" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                <FaGithub /> View Research
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <Image
              src="/my-portfolio/profile.jpg"
              alt="Himanshu Dixit"
              width={320}
              height={320}
              className="relative rounded-3xl border-8 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* Interactive AI Engine Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-black text-slate-900">Interactive Inference Engine</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              This portfolio is powered by client-side machine learning. Interact with the Transformer models below to see how I process semantic information and predict tokens in real-time.
            </p>
          </div>
          
          <TransformerEngine />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600"><FaMicrochip /></div>
              <div>
                <h4 className="font-bold text-slate-900">Edge Computing</h4>
                <p className="text-sm text-slate-500">Models run entirely in your browser using WebGL acceleration via TensorFlow.js.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600"><FaBrain /></div>
              <div>
                <h4 className="font-bold text-slate-900">Multi-Model Fusion</h4>
                <p className="text-sm text-slate-500">Switch between Universal Sentence Encoder and MobileBERT for different NLP tasks.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600"><FaTerminal /></div>
              <div>
                <h4 className="font-bold text-slate-900">Real-time Softmax</h4>
                <p className="text-sm text-slate-500">Adjust temperature parameters to see how probability distributions shift dynamically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-900 leading-tight">Engineering Systems for the <span className="text-indigo-600">AI-First</span> Era</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <FaDatabase className="text-indigo-500" /> Data Engineering
                  </h3>
                  <p className="text-slate-600">Architecting robust pipelines for high-throughput ML training and real-time inference at scale.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <FaCode className="text-indigo-500" /> Full-Stack Deployment
                  </h3>
                  <p className="text-slate-600">Building seamless integrations between complex backend models and intuitive frontend interfaces.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <FaRocket className="text-indigo-500" /> MLOps & Scaling
                  </h3>
                  <p className="text-slate-600">Optimizing model performance and infrastructure costs for production-grade AI applications.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 text-indigo-400 font-mono text-sm shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
              <div className="space-y-2">
                <p><span className="text-pink-500">class</span> <span className="text-yellow-400">AIEngineer</span>:</p>
                <p className="pl-4"><span className="text-pink-500">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                <p className="pl-8">self.name = <span className="text-green-400">"Himanshu Dixit"</span></p>
                <p className="pl-8">self.focus = [<span className="text-green-400">"Transformers"</span>, <span className="text-green-400">"LLMs"</span>, <span className="text-green-400">"Scalability"</span>]</p>
                <p className="pl-4"><span className="text-pink-500">def</span> <span className="text-blue-400">solve_complexity</span>(self, problem):</p>
                <p className="pl-8"><span className="text-pink-500">return</span> self.transformer_model.process(problem)</p>
                <p className="pt-4 text-slate-500"># Output: Turning complexity into clarity...</p>
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <div className="flex justify-between mb-2">
                    <span>PyTorch / TensorFlow</span>
                    <span className="text-white">95%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full">
                    <div className="bg-indigo-500 h-full w-[95%] rounded-full"></div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between mb-2">
                    <span>Next.js / TypeScript</span>
                    <span className="text-white">90%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full">
                    <div className="bg-indigo-500 h-full w-[90%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-400 text-sm">
            © 2026 Himanshu Dixit. Built with TensorFlow.js & Next.js.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/hima-d" className="text-slate-400 hover:text-indigo-600 transition-colors"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/in/him-d" className="text-slate-400 hover:text-indigo-600 transition-colors"><FaLinkedin size={24} /></a>
            <a href="mailto:dixithimanshu012@gmail.com" className="text-slate-400 hover:text-indigo-600 transition-colors"><FaEnvelope size={24} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
