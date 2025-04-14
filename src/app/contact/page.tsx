"use client";
import React from "react";
import Header from "@/components/header";

const Contact = () => {
  const email = "dixithimanshu012" + "@" + "gmail" + ".com";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-6 py-12 bg-white text-gray-800 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Contact Information
          </h1>
          <p className="text-base text-gray-600 text-center mb-8">
            Available for discussions on machine learning implementation, AI research, and technical collaborations.
          </p>

          <div className="space-y-8">
            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <div>
                <strong className="block text-base font-medium text-gray-800">Email:</strong>
                <a href={`mailto:${email}`} className="text-base text-blue-700">
                  {email}
                </a>
              </div>
            </div>

            {/* LinkedIn Section */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <strong className="block text-base font-medium text-gray-800">LinkedIn:</strong>
                <a 
                  href="https://www.linkedin.com/in/him-d" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base text-blue-700"
                >
                  linkedin.com/in/him-d
                </a>
              </div>
            </div>
          </div>

          {/* Research Focus Section */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Research Focus</h2>
            <p className="text-base text-gray-700 mb-4">
              Current work concentrates on practical implementations in these technical domains:
            </p>

            <ul className="space-y-3 text-base text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>AI Ethics and Governance:</strong> Developing frameworks for responsible AI deployment with emphasis on transparency and accountability in algorithmic systems.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Reinforcement Learning:</strong> Implementing stable learning algorithms for sequential decision processes with applications in optimization and control systems.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Generative Models:</strong> Engineering solutions for text and image synthesis with focus on computational efficiency and output quality assessment.</span>
              </li>
            </ul>

            <p className="text-base text-gray-700 mt-4">
              Open to technical discussions and research collaborations in these areas, with particular interest in practical applications that address real-world constraints.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
