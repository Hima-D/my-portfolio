import React from 'react';
import Header from '@/components/header';

const Resume = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <section className="w-full bg-white rounded-lg shadow-md p-6 mb-8 max-w-3xl mx-auto mt-10">
        <div className="space-y-6">

          {/* Header with Contact */}
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Himanshu Dixit</h1>
            <p className="text-base text-gray-700">Co-Founder at Enack | Gurugram, Haryana, India</p>
            <div className="text-sm text-gray-600 mt-3">
              <p>dixithimanshu012@gmail.com</p>
              <p><a href="https://www.linkedin.com/in/him-d" className="text-blue-700">linkedin.com/in/him-d</a></p>
            </div>
          </div>

          {/* Summary Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1">Professional Summary</h2>
            <p className="text-base text-gray-700 mt-3">
              Technology specialist focusing on AI and machine learning applications for EdTech and FinTech sectors. Experience spans both development of data-driven platforms and implementation of research concepts into practical solutions.
            </p>
            <p className="text-base text-gray-700 mt-2">
              Core focus areas include predictive model design, AI system deployment, and personalized technology solutions that deliver measurable business outcomes.
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1">Professional Experience</h2>

            {/* Job Experience 1 - Coinwave */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Founder & CEO, Coinwave</h3>
              <p className="text-sm text-gray-600">March 2023 - Present | Remote</p>
              <p className="text-base text-gray-700 mt-2">
                Leading development of an AI-powered financial management platform that provides customized financial strategies and predictive insights for investment optimization.
              </p>
              <ul className="list-disc text-base text-gray-700 pl-5 mt-2">
                <li>Developed integrated financial management system connecting multiple account types</li>
                <li>Implemented AI-driven tools for goal-oriented financial planning</li>
                <li>Secured funding and established strategic partnerships</li>
              </ul>
            </div>

            {/* Job Experience 2 - Enack */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Co-Founder, Enack</h3>
              <p className="text-sm text-gray-600">August 2024 - Present | Gurugram, Haryana, India</p>
              <p className="text-base text-gray-700 mt-2">
                Managing transition from offline to online platform with integration of AI technologies for personalized learning experiences.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Trainer & Developer, Enack</h3>
              <p className="text-sm text-gray-600">August 2024 - Present | Gurugram, Haryana, India</p>
              <p className="text-base text-gray-700 mt-2">
                Developing AI-driven educational solutions while training users on effective implementation.
              </p>
              <ul className="list-disc text-base text-gray-700 pl-5 mt-2">
                <li>Created AI learning tools with demonstrated improvement in educational outcomes</li>
                <li>Conducted training sessions for educators on platform optimization</li>
                <li>Led technical implementation of scalable online platform architecture</li>
              </ul>
            </div>

            {/* Job Experience 3 - Indag Rubber Ltd */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Machine Learning Engineer, Indag Rubber Ltd</h3>
              <p className="text-sm text-gray-600">January 2024 - March 2024 | Chennai, Tamil Nadu, India</p>
              <p className="text-base text-gray-700 mt-2">
                Implemented production optimization models and inventory management systems.
              </p>
              <ul className="list-disc text-base text-gray-700 pl-5 mt-2">
                <li>Developed predictive models for production forecasting</li>
                <li>Optimized data integration workflows for manufacturing processes</li>
              </ul>
            </div>

            {/* Job Experience 4 - SUN Renewables */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Data Analyst, SUN Renewables WH Pvt. Ltd.</h3>
              <p className="text-sm text-gray-600">July 2023 - October 2023 | Gurugram, Haryana, India</p>
              <p className="text-base text-gray-700 mt-2">
                Analyzed data for the Helm Initiative to facilitate collaboration among high-net-worth individuals on innovation projects.
              </p>
              <ul className="list-disc text-base text-gray-700 pl-5 mt-2">
                <li>Developed data-driven collaboration strategies for specialized network</li>
                <li>Created analytics-based engagement systems for participant interactions</li>
                <li>Applied quantitative methods to measure program effectiveness</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1">Education</h2>
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-800">Indian Institute of Technology, Madras</h3>
              <p className="text-base text-gray-700">Bachelor of Technology (BTech), Computer Science</p>
              <p className="text-sm text-gray-600">October 2021 - May 2025 (Expected)</p>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-1">Technical Competencies</h2>
            <ul className="list-disc text-base text-gray-700 pl-5 mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li><strong>Business Analytics:</strong> KPI tracking, dashboard development, market research</li>
              <li><strong>Machine Learning:</strong> Model development, deployment, feature engineering</li>
              <li><strong>Finance Analysis:</strong> Financial modeling, risk assessment, predictive analytics</li>
              <li><strong>Data Engineering:</strong> ETL pipelines, database optimization, SQL</li>
              <li><strong>Leadership:</strong> Team management, project coordination, stakeholder communication</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
