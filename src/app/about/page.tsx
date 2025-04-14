"use client";
import React from 'react';
import { FaEnvelope, FaLinkedin, FaCode, FaLaptopCode } from 'react-icons/fa';
import Header from '@/components/header';

// Skill items
const skillItems = [
  { label: "Machine Learning Engineering", Icon: FaLaptopCode },
  { label: "Python & Data Science Libraries", Icon: FaCode },
  { label: "Deep Learning with TensorFlow & PyTorch", Icon: FaCode },
  { label: "Time Series & NLP for Financial Data", Icon: FaLaptopCode },
  { label: "Cloud Infrastructure & MLOps", Icon: FaLaptopCode },
  { label: "Big Data & Stream Processing", Icon: FaCode },
];

export default function AboutPage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-20 font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col items-center sm:items-start text-gray-900 max-w-screen-lg mx-auto mt-24 gap-16">

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
            {skillItems.map(({ label, Icon }, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <Icon className="text-indigo-600 text-xl" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="w-full bg-white rounded-lg shadow-xl p-6 max-w-2xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-900">My Philosophy</h2>
          <p className="text-lg text-gray-700 opacity-90">
            I build for impact — blending deep technical knowledge with practical problem-solving. Whether I'm designing an ML pipeline or crafting a user-facing product, I keep the end-user, scalability, and maintainability in focus.
          </p>
          <p className="text-lg text-gray-700 opacity-90 mt-4">
            AI should be transparent, ethical, and accessible — and that's the compass I follow when writing every line of code.
          </p>
        </section>

        {/* Contact Buttons */}
        <section className="flex flex-col sm:flex-row gap-6 items-center mt-8">
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

    
    </div>
  );
}
