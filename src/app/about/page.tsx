"use client";
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaLaptopCode } from 'react-icons/fa';
import Image from 'next/image';
import Header from '@/components/header';

export default function AboutPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-20 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start text-gray-900 max-w-screen-lg mx-auto mt-24 gap-16">
        
        {/* Profile */}
        <section className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Image
            src="/my-portfolio/profile.jpg"
            alt="Himanshu Dixit"
            width={160}
            height={160}
            className="rounded-full border-4 border-indigo-600 shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mt-6 text-indigo-900">Himanshu Dixit</h1>
        
        </section>

        {/* About Section */}
        <section className="w-full bg-white rounded-lg shadow-xl p-6 max-w-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">About Me</h2>
          <p className="text-lg text-gray-700 opacity-90">
            I engineer AI systems that make sense of complexity. With a background in computation & finance and a passion for data-driven insights, I design machine learning solutions that bridge the gap between algorithms and real-world impact.
          </p>
          <p className="text-lg text-gray-700 opacity-90 mt-4">
            My current focus is on generative AI, scalable model deployment, and building intelligent tools that empower decision-making — especially in finance and education.
          </p>
        </section>

        {/* Skills */}
        <section className="w-full bg-white rounded-lg shadow-xl p-6 max-w-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">What I Bring to the Table</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {[
              ["Machine Learning Engineering", <FaLaptopCode />],
              ["Python & Data Science Libraries", <FaCode />],
              ["Deep Learning with TensorFlow & PyTorch", <FaCode />],
              ["Time Series & NLP for Financial Data", <FaLaptopCode />],
              ["Cloud Infrastructure & MLOps", <FaLaptopCode />],
              ["Big Data & Stream Processing", <FaCode />],
            ].map(([label, icon], idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <div className="text-indigo-600 text-xl">{icon}</div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="w-full bg-white rounded-lg shadow-xl p-6 max-w-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">My Philosophy</h2>
          <p className="text-lg text-gray-700 opacity-90">
            I build for impact — blending deep technical knowledge with practical problem-solving. Whether I'm designing an ML pipeline or crafting a user-facing product, I keep the end-user, scalability, and maintainability in focus.
          </p>
          <p className="text-lg text-gray-700 opacity-90 mt-4">
            AI should be transparent, ethical, and accessible — and that's the compass I follow when writing every line of code.
          </p>
        </section>

        {/* Contact */}
        <section className="flex flex-col sm:flex-row gap-6 items-center mt-4">
          <a
            className="rounded-full bg-indigo-600 text-white hover:bg-indigo-700 h-12 px-6 sm:px-8 flex items-center justify-center shadow-lg transition-colors"
            href="mailto:dixithimanshu012@gmail.com"
          >
            <FaEnvelope className="h-5 w-5 mr-2" /> Email Me
          </a>
          <a
            className="rounded-full border border-indigo-600/[.3] text-indigo-700 hover:bg-indigo-50 h-12 px-6 sm:px-8 flex items-center justify-center shadow-lg transition-colors"
            href="https://www.linkedin.com/in/him-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 mr-2" /> Connect on LinkedIn
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap gap-6 justify-center items-center text-sm text-gray-600 opacity-80 mt-16">
        <a
          href="https://github.com/hima-d"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <FaGithub className="h-4 w-4" /> GitHub
        </a>
        <a
          href="mailto:dixithimanshu012@gmail.com"
          className="flex items-center gap-2 hover:underline"
        >
          <FaEnvelope className="h-4 w-4" /> Contact
        </a>
      </footer>
    </div>
  );
}
