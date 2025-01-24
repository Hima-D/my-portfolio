"use client";
import React from 'react';
import Header from '@/components/header';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-white text-gray-900 flex items-center justify-center py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-200 to-blue-300 opacity-70"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-8 py-16 bg-white text-gray-800 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
            Let’s Chat! 🤖
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">
            Got questions? Ideas? Or just want to talk about how AI is slowly taking over the world? Well, you’re in the right place. Feel free to drop me a message, and let’s have a good conversation! 📬
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
          <h2 className="text-2xl font-semibold text-center text-gray-900 mt-12">Quick Overview 🧠</h2>
          <p className="text-lg text-gray-700 text-center mt-4 max-w-3xl mx-auto">
            I live in the world of machine learning, AI, and data science, and yes, I do try to make machines smarter than me (it’s a work in progress). I’m passionate about exploring the intersection of tech and learning, so if you have any cool ideas or just want to talk about how AI is going to run the world, I’m all ears.
          </p>

          <p className="text-lg text-gray-700 text-center mt-4">
            Whether you’re into deep learning, generative AI, or just want to argue about the superiority of coffee over tea for late-night coding, feel free to reach out. I promise I won’t ghost you... unless I’m deep in research, in which case, I’ll respond once I’m done caffeinating. ☕
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
