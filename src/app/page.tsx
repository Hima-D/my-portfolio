'use client';

import Image from 'next/image';
import Header from '@/components/header';
import { FaEnvelope, FaGithub, FaLinkedin, FaCode, FaBrain, FaRocket } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-white to-gray-100 font-sans">
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 sm:px-12 pt-32 pb-20 max-w-4xl mx-auto">
        <Image
          src="/my-portfolio/profile.jpg"
          alt="Himanshu Dixit"
          width={160}
          height={160}
          className="rounded-full border-4 border-indigo-600 shadow-xl hover:scale-105 transition-transform"
        />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mt-6">
          Himanshu Dixit
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl">
          I build intelligent systems that bridge data, design, and decision-making — turning complexity into clarity through AI.
        </p>

        {/* CTA */}
        <div className="flex gap-4 mt-6">
          <a
            href="mailto:dixithimanshu012@gmail.com"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm hover:bg-indigo-700 transition-all shadow-md"
          >
            <FaEnvelope className="inline-block mr-2" />
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/him-d"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-indigo-500 text-indigo-700 px-6 py-3 rounded-full text-sm hover:bg-indigo-100 transition-all shadow-md"
          >
            <FaLinkedin className="inline-block mr-2" />
            Connect
          </a>
        </div>
      </main>

      {/* Value Props */}
      <section className="bg-white py-16 px-6 sm:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <FaCode className="text-indigo-600 text-3xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Full-Stack AI</h3>
          <p className="text-gray-700 text-sm">
            From prototyping to deployment — I build end-to-end ML systems that scale.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <FaBrain className="text-indigo-600 text-3xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Generative AI</h3>
          <p className="text-gray-700 text-sm">
            I craft solutions using LLMs and transformers that go beyond chatbots — into insight.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg hover:shadow-xl transition">
          <FaRocket className="text-indigo-600 text-3xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Engineering for Impact</h3>
          <p className="text-gray-700 text-sm">
            I care about outcomes, not just outputs — with a focus on reliability and performance.
          </p>
        </div>
      </section>

      {/* Achievements / Highlights */}
      <section className="py-16 px-6 sm:px-20 bg-gradient-to-r from-indigo-50 to-white text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-10">Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-indigo-800 font-medium">
          <div>
            <span className="text-4xl font-bold text-indigo-700">5+</span>
            <p className="text-sm mt-1">Production ML Systems</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-indigo-700">10K+</span>
            <p className="text-sm mt-1">Lines of Clean Code</p>
          </div>
          <div>
            <span className="text-4xl font-bold text-indigo-700">∞</span>
            <p className="text-sm mt-1">Curiosity & Experiments</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap gap-6 justify-center items-center text-sm text-gray-600 opacity-80 py-8">
        <a
          href="https://github.com/hima-d"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
        <a
          href="mailto:dixithimanshu012@gmail.com"
          className="flex items-center gap-2 hover:underline"
        >
          <FaEnvelope className="h-4 w-4" />
          Contact
        </a>
      </footer>
    </div>
  );
}
