"use client";
import React from 'react';
import Header from '@/components/header';

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
            Have any questions, ideas, or thoughts on AI? Or maybe you just want to talk about the future of technology? I’m always happy to connect and have a friendly chat. Feel free to drop me a message! 📬
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
                <strong className="block text-lg font-medium text-gray-800">Email Me:</strong>
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
                <strong className="block text-lg font-medium text-gray-800">Find Me on LinkedIn:</strong>
                <p className="text-lg text-blue-600 hover:underline">
                  <a href="https://www.linkedin.com/in/him-d" target="_blank" rel="noopener noreferrer">
                    www.linkedin.com/in/him-d
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Summary Section */}
          <h2 className="text-2xl font-semibold text-center text-gray-900 mt-12">A Little About My Work 🧑‍💻</h2>
          <p className="text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
            I spend a lot of my time exploring the exciting world of machine learning, AI, and data science. It’s a fascinating field, and I feel fortunate to be able to contribute to its growth. I’m always learning, adapting, and trying to improve, and I would love to share ideas and learn from others in the field.
          </p>

          <p className="text-lg text-gray-700 text-center mt-4">
            My current focus is on a few research areas that I find interesting and impactful:
          </p>

          <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 mt-4 space-y-2">
            <li><strong>AI Ethics:</strong> Understanding how we can ensure AI is developed in a responsible and fair way for everyone.</li>
            <li><strong>Reinforcement Learning:</strong> Looking at how machines can learn through trial and error to solve real-world problems.</li>
            <li><strong>Generative AI:</strong> Exploring how we can use AI to create new and useful content, such as images or even music.</li>
          </ul>

          <p className="text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
            These are just a few topics that I find exciting. If you’re interested in any of them or just want to talk about technology in general, feel free to reach out. I look forward to connecting and learning from each other.
          </p>

          <p className="text-lg text-gray-700 text-center mt-4">
            Let’s chat, share ideas, and explore how we can make the most of the technology we have today. 😊
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
