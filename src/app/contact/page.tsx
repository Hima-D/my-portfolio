"use client";
import React from "react";
import Header from "@/components/header";

const Contact = () => {
  // Email encoding (obfuscated email address)
  const email = "dixithimanshu012" + "@" + "gmail" + ".com";

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-white text-gray-900 flex items-center justify-center py-16">
        <div className="relative z-10 max-w-3xl mx-auto px-8 py-16 bg-white text-gray-800 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
            Let’s Connect! 🌟
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Whether you're exploring AI, diving into cutting-edge research, or simply want to chat about technology, I’m here for it. No unsolicited machine learning lectures, I promise—unless you ask for one. 😉
          </p>

          <div className="space-y-10">
            {/* Email Section */}
            <div className="flex items-center space-x-4 hover:scale-105 transform transition-all duration-300">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 shadow-md hover:bg-gray-300 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2v-5" />
                </svg>
              </div>
              <div>
                <strong className="block text-lg font-medium text-gray-800">Email:</strong>
                <p className="text-lg text-blue-600 hover:underline">
                  {/* Displaying email as an obfuscated string */}
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>

            {/* LinkedIn Section */}
            <div className="flex items-center space-x-4 hover:scale-105 transform transition-all duration-300">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 shadow-md hover:bg-gray-300 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div>
                <strong className="block text-lg font-medium text-gray-800">LinkedIn:</strong>
                <p className="text-lg text-blue-600 hover:underline">
                  <a href="https://www.linkedin.com/in/him-d" target="_blank" rel="noopener noreferrer">
                    www.linkedin.com/in/him-d
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Summary Section */}
          <h2 className="text-2xl font-semibold text-center text-gray-900 mt-12">A Glimpse Into My Work 🧑‍💻</h2>
          <p className="text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
            I spend most of my time immersed in the dynamic worlds of machine learning, AI, and data science—fields that are both intellectually thrilling and full of infinite possibilities. The work is akin to solving an evolving optimization problem—always challenging, but incredibly rewarding. I don’t always have all the answers, but I’m continuously learning and adapting. 😅
          </p>

          <p className="text-lg text-gray-700 text-center mt-4">
            Here are a few research areas that particularly excite me:
          </p>

          <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 mt-4 space-y-2">
            <li><strong>AI Ethics:</strong> Ensuring that AI doesn’t just get smarter, but also remains ethical, transparent, and fair. Let’s give AI a moral compass, shall we? 🤖</li>
            <li><strong>Reinforcement Learning:</strong> Teaching machines to learn from their actions. Ideally, they don’t try to optimize everything in sight (including world economies). 💡</li>
            <li><strong>Generative AI:</strong> Enabling AI to create fresh, meaningful content—whether it’s text, art, or music. Imagine giving AI a paintbrush and hoping it doesn't paint abstract chaos. 🎨</li>
          </ul>

          <p className="text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
            These are just a few of the exciting topics I’m exploring. If you share a passion for AI ethics, generative models, or reinforcement learning, let’s discuss! After all, every breakthrough is shaped by new ideas and diverse perspectives.
          </p>

          <p className="text-lg text-gray-700 text-center mt-4">
            So, let's connect—exchange ideas, explore potential collaborations, and maybe even figure out how we can use AI to make the world a little bit better. 💡
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
