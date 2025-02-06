import React from 'react';
import Header from '@/components/header'; // Assuming you already have a Header component

const Resume = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header /> {/* Separate header */}
      <section className="w-full bg-white rounded-lg shadow-xl p-8 mb-8 max-w-3xl mx-auto mt-12">
        <div className="space-y-8">

          {/* Header with Contact */}
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-800">Himanshu Dixit</h1>
            <p className="text-lg text-gray-700 opacity-80">Co-Founder at Enack | Gurugram, Haryana, India</p>
            <div className="text-sm text-gray-600 mt-4">
              <p><strong>Email:</strong> dixithimanshu012@gmail.com</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/him-d" className="text-indigo-600">linkedin.com/in/him-d</a></p>
            </div>
          </div>

          {/* Summary Section */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-900">Professional Summary</h2>
            <p className="text-lg text-gray-700 opacity-80 mt-4">
              I am a technology enthusiast with a focus on applying AI and machine learning to address real-world challenges, particularly in the EdTech and FinTech sectors. With extensive experience in both developing innovative platforms and conducting research, I am committed to driving the adoption of data-driven solutions that empower businesses and individuals alike.
            </p>
            <p className="text-lg text-gray-700 opacity-80 mt-4">
              My expertise spans the design and deployment of predictive models, AI-powered systems, and personalized solutions. I aim to contribute to the advancement of technology in key industries, ensuring tangible and measurable outcomes that create value and foster sustainable growth.
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-900">Professional Experience</h2>

            {/* Job Experience 1 - Coinwave */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Founder & CEO at Coinwave</h3>
              <p className="text-lg text-gray-700 opacity-80">March 2023 - Present | Remote</p>
              <p className="text-lg text-gray-700 opacity-80">
                As the Founder and CEO, I am responsible for leading the strategic development of Coinwave, a platform designed to streamline financial management for individuals and businesses. The platform leverages advanced AI to offer customized financial strategies and predictive insights, helping users optimize their investments, savings, and risk management approaches.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Developed a comprehensive financial management system that integrates various financial accounts and provides tailored solutions.</li>
                <li>Designed and implemented AI-driven tools to assist users in aligning their financial strategies with long-term goals.</li>
                <li>Secured funding and established partnerships to scale the platform’s capabilities and market reach.</li>
              </ul>
            </div>

            {/* Job Experience 2 - Enack */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Co-Founder at Enack</h3>
              <p className="text-lg text-gray-700 opacity-80">August 2024 - Present | Gurugram, Haryana, India</p>
              <p className="text-lg text-gray-700 opacity-80">
                I am leading Enack’s transition from an offline to an online platform, overseeing the integration of cutting-edge AI technologies to enhance the learning experience. My focus is on driving the development of personalized learning tools that cater to the individual needs of students and educators.
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Trainer & Developer at Enack</h3>
              <p className="text-lg text-gray-700 opacity-80">August 2024 - Present | Gurugram, Haryana, India</p>
              <p className="text-lg text-gray-700 opacity-80">
                In my dual role as both a trainer and developer, I create AI-driven solutions that personalize the learning experience, while also training students and educators on how to leverage these tools for maximum educational impact.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Developed and refined AI-based learning tools that enhance engagement and educational outcomes.</li>
                <li>Provided training sessions and workshops to educators and students on optimizing the platform’s use.</li>
                <li>Led the transition to an online platform, ensuring scalability and increased accessibility for users.</li>
              </ul>
            </div>

            {/* Job Experience 3 - Indag Rubber Ltd */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Machine Learning Engineer at Indag Rubber Ltd</h3>
              <p className="text-lg text-gray-700 opacity-80">January 2024 - March 2024 (3 months) | Chennai, Tamil Nadu, India</p>
              <p className="text-lg text-gray-700 opacity-80">
                I implemented machine learning models to optimize production processes and improve inventory management systems, resulting in more efficient operations and cost savings.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Developed predictive models for forecasting production needs, improving resource allocation.</li>
                <li>Optimized data integration workflows, streamlining processes and enhancing overall efficiency.</li>
              </ul>
            </div>

            {/* Job Experience 4 - SUN Renewables WH Pvt. Ltd. */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Data Analyst at SUN Renewables WH Pvt. Ltd.</h3>
              <p className="text-lg text-gray-700 opacity-80">July 2023 - October 2023 (4 months) | Gurugram, Haryana, India</p>
              <p className="text-lg text-gray-700 opacity-80">
                As a Data Analyst for the Helm Initiative by Sun Group, I analyzed data to facilitate high-net-worth individuals’ collaboration on innovative projects. My contributions helped foster a dynamic and interactive environment for entrepreneurs to connect and exchange ideas.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Developed data-driven strategies to foster collaboration and innovation within a high-net-worth community.</li>
                <li>Assisted in creating tailored networking opportunities and personalized experiences for participants.</li>
                <li>Utilized advanced data analytics to refine engagement strategies and improve program effectiveness.</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-900">Education</h2>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Indian Institute of Technology, Madras</h3>
              <p className="text-lg text-gray-700 opacity-80">Bachelor of Technology (BTech), Computer Science</p>
              <p className="text-lg text-gray-700 opacity-80">October 2021 - May 2025 (Expected)</p>
            </div>
          </div>

          {/* Top Skills Section */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-900">Core Competencies</h2>
            <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6 mt-8">
              <li><strong>Business Analytics:</strong> KPI tracking, dashboard development, market research, and strategic decision-making.</li>
              <li><strong>Machine Learning & AI:</strong> Model development, deployment, data preprocessing, and advanced feature engineering.</li>
              <li><strong>Finance & Quantitative Analysis:</strong> Financial modeling, risk analysis, and predictive analytics for investment strategies.</li>
              <li><strong>Data Engineering & SQL:</strong> Building robust ETL pipelines, optimizing databases, and executing complex queries.</li>
              <li><strong>Leadership & Communication:</strong> Strong leadership abilities, effective communication, and time management in cross-functional teams.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
