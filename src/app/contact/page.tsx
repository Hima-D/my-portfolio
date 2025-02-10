"use client";
import React from "react";
import Header from "@/components/header";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-white text-gray-900 flex items-center justify-center py-16">
        <div className="relative z-10 max-w-3xl mx-auto px-8 py-16 bg-white text-gray-800 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
            Let's Connect! 🌟
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Whether you're exploring new AI paradigms, looking for research collaboration, or simply want to chat about the latest in tech—I’m all ears. I promise I won’t start an unsolicited lecture on machine learning (unless, of course, you’re asking for one). 😉
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
                  <a href="mailto:dixithimanshu012@gmail.com">dixithimanshu012@gmail.com</a>
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
            My daily grind revolves around the realms of machine learning, AI, and data science—fields that are as exciting as they are complex. It’s like solving a complex optimization problem, where the objective is to stay one step ahead of technology’s exponential growth. I don’t always succeed, but I’m pretty proud of my progress. 😅
          </p>

          <p className="text-lg text-gray-700 text-center mt-4">
            I’m particularly intrigued by the following research areas:
          </p>

          <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 mt-4 space-y-2">
            <li><strong>AI Ethics:</strong> Ensuring AI doesn’t just become "intelligent," but also fair, transparent, and, dare I say, ethical. Who said AI couldn’t have a moral compass? 🤖</li>
            <li><strong>Reinforcement Learning:</strong> Teaching machines to learn from their mistakes... and hoping they don’t start trying to optimize the entire economy. 💡</li>
            <li><strong>Generative AI:</strong> Using AI to create new, original content—whether it’s art, music, or text. It's like giving AI a canvas and asking it to paint... let's just hope it's not all abstract. 🎨</li>
          </ul>

          <p className="text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
            These are just a few of the areas where I’m actively diving deep. If you’re equally passionate about AI’s ethical challenges, generative models, or reinforcement learning, I’d love to have a discussion. After all, every algorithm’s solution is only as good as the data (and the ideas) behind it.
          </p>

          <p className="text-lg text-gray-700 text-center mt-4">
            So, let’s engage in meaningful dialogue, share insights, and maybe even explore ways to use technology to make the world a better place—one model at a time. 💡
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
