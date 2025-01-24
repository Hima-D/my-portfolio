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
            <p className="text-lg text-gray-700 opacity-80">Building Enack | Gurugram, Haryana, India</p>
            <div className="text-sm text-gray-600 mt-4">
              <p><strong>Contact:</strong> dixithimanshu012@gmail.com</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/him-d" className="text-indigo-600">linkedin.com/in/him-d</a></p>
            </div>
          </div>

          {/* Summary Section */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-900">Summary</h2>
            <p className="text-lg text-gray-700 opacity-80 mt-4">
              Hi, I’m Himanshu, a tech enthusiast passionate about leveraging AI and machine learning to drive impactful changes in education and finance. Currently, I’m channeling my expertise into transforming the EdTech and FinTech landscapes with personalized, data-driven solutions.
            </p>
            <p className="text-lg text-gray-700 opacity-80 mt-4">
              With a background in computer science and hands-on experience in AI development, I’ve led initiatives that range from building predictive models to scaling innovative platforms. My journey is driven by curiosity, resilience, and a commitment to pushing the boundaries of technology for real-world impact.
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-semibold text-indigo-900">Experience</h2>

            {/* Job Experience 1 - Coinwave */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Founder & CEO at Coinwave</h3>
              <p className="text-lg text-gray-700 opacity-80">March 2023 - Present | Remote</p>
              <p className="text-lg text-gray-700 opacity-80">
                Leading Coinwave to integrate machine learning into financial strategies, optimizing investments, detecting fraud, and forecasting trends to redefine the finance sector.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Developed advanced stock market prediction models using ARIMA, LSTM, and reinforcement learning.</li>
                <li>Improved fraud detection accuracy by 15% through robust algorithmic enhancements.</li>
                <li>Secured seed funding and forged strategic partnerships to drive product innovation.</li>
              </ul>
            </div>

            {/* Job Experience 2 - Enack */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Co-Founder at Enack</h3>
              <p className="text-lg text-gray-700 opacity-80">August 2024 - Present | Gurugram, Haryana, India</p>
              <p className="text-lg text-gray-700 opacity-80">
                Spearheading technological innovations to deliver personalized learning experiences through AI-powered tools and scalable platforms.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Designed an AI-driven recommendation engine to tailor educational content for individual learners.</li>
                <li>Managed a team of engineers and educators to create a seamless user experience.</li>
                <li>Secured seed funding and partnerships to expand the platform’s reach and impact.</li>
              </ul>
            </div>

            {/* Job Experience 3 - Indag Rubber Ltd */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Machine Learning Engineer at Indag Rubber Ltd</h3>
              <p className="text-lg text-gray-700 opacity-80">January 2024 - March 2024 (3 months) | Chennai, Tamil Nadu, India</p>
              <p className="text-lg text-gray-700 opacity-80">
                Implemented predictive models to optimize rubber production and streamline inventory management processes.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Developed forecasting models to anticipate production needs effectively.</li>
                <li>Streamlined data pipelines for seamless data integration and analysis.</li>
              </ul>
            </div>

            {/* Job Experience 4 - SUN Renewables WH Pvt. Ltd. */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-bold text-indigo-800">Data Analyst at SUN Renewables WH Pvt. Ltd.</h3>
              <p className="text-lg text-gray-700 opacity-80">July 2023 - October 2023 (4 months) | Gurugram, Haryana, India</p>
              <p className="text-lg text-gray-700 opacity-80">
                Analyzed renewable energy data to aid decision-making and improve operational efficiency.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6">
                <li>Processed and visualized energy consumption data to support strategic planning.</li>
                <li>Prepared detailed reports to help stakeholders optimize energy usage.</li>
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
            <h2 className="text-3xl font-semibold text-indigo-900">Top Skills</h2>
            <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 pl-6 mt-8">
              <li><strong>Business Analytics:</strong> KPI tracking, dashboard creation, and market research.</li>
              <li><strong>Machine Learning & AI:</strong> Model development and deployment, data preprocessing, and feature engineering.</li>
              <li><strong>Finance & Quantitative Analysis:</strong> Financial modeling, risk management, and stock market forecasting.</li>
              <li><strong>SQL & Data Engineering:</strong> Building ETL pipelines, database optimization, and advanced query handling.</li>
              <li><strong>Soft Skills:</strong> Leadership, effective communication, and time management.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
