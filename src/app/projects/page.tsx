"use client";
import React from "react";
import Header from "@/components/header";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <section className="w-full bg-gray-100 py-16 px-6 mt-16">
        {/* The 'mt-16' ensures the content is below the fixed header */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-8 text-center">
            My Projects: A Playground of Ideas and Innovation
          </h2>

          <div className="space-y-12">
            {/* Sales Analysis Model */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Sales Analysis & Forecasting Model</h3>
              <p className="text-lg text-gray-700 mb-4">
                I built a machine learning model to forecast retail sales, similar to predicting weather patterns but for sales data. By using time-series techniques like ARIMA and LSTM, I helped clients optimize inventory, prevent overstocking, and avoid running out of popular products. Real data-powered crystal ball, if you will!
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Used EDA (Exploratory Data Analysis) to clean and prepare data for accurate forecasting.</li>
                <li>Implemented ARIMA and LSTM models to predict future sales, optimizing inventory and minimizing waste.</li>
                <li>Collaborated closely with the business team to ensure the model delivered real-world value (spoiler: it worked!).</li>
              </ul>
            </div>

            {/* Data Cleaning Pipelines */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Data Cleaning & Sanity Check Pipelines</h3>
              <p className="text-lg text-gray-700 mb-4">
                Clean, reliable data is the foundation of any solid analysis. I developed robust ETL pipelines for finance and retail, turning raw data into valuable insights. Think of it as giving your data a well-deserved cleanse before it can help you make decisions.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Designed ETL workflows to handle missing values, outliers, and duplicate entries in large datasets.</li>
                <li>Automated sanity checks and anomaly detection to maintain high data quality and consistency.</li>
                <li>Leveraged Python (Pandas, NumPy) and SQL to efficiently process and clean large-scale datasets.</li>
              </ul>
            </div>

            {/* Coinwave Contribution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI for Finance at Coinwave</h3>
              <p className="text-lg text-gray-700 mb-4">
                At Coinwave, we’re building an AI-driven platform to help individuals manage their finances and plan for future goals. As a Machine Learning Engineer, I’m focused on creating predictive models that will empower users to make smarter financial decisions. Think of it as a personal financial assistant powered by AI!
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Developing predictive models to forecast financial trends, enhancing portfolio optimization.</li>
                <li>Building a unified platform that consolidates financial data, helping users plan and track goals effectively.</li>
                <li>Collaborating with the team to turn complex financial data into easy-to-understand insights for users.</li>
              </ul>
            </div>

            {/* Enack Contribution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Co-Founder at Enack</h3>
              <p className="text-lg text-gray-700 mb-4">
                As a co-founder of Enack, an EdTech startup, I’m working on developing AI-powered tools that personalize learning experiences. We’re transitioning our platform to an online space, aiming to create a more interactive, engaging, and accessible learning environment for students worldwide.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Developed an AI-powered engine that personalizes content based on each student’s learning style and progress.</li>
                <li>Led the creation of gamification features to make learning more fun and engaging.</li>
                <li>Helping move the platform fully online to increase access for students across the globe.</li>
              </ul>
            </div>

            {/* Platform for Engagement */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI-Powered Platform for Student Engagement</h3>
              <p className="text-lg text-gray-700 mb-4">
                I contributed to an AI-driven platform that tracks student engagement, predicts academic success, and recommends personalized interventions. It's a tool that helps teachers track progress and provide timely support to students who need it most. Learning meets technology—just the way it should be.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Used machine learning to analyze student behavior and predict their academic success.</li>
                <li>Developed interactive dashboards for educators to track students' progress and intervene when necessary.</li>
                <li>Incorporated engaging features to keep students motivated and excited about learning.</li>
              </ul>
            </div>

            {/* Achievement in Finance and Mathematics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">State 2nd Topper in Finance & Mathematics</h3>
              <p className="text-lg text-gray-700 mb-4">
                A personal achievement I’m quite proud of: I was ranked as the 2nd Topper in Finance and Mathematics in my state. This reflects my passion for numbers and quantitative analysis, which fuel my work in machine learning and finance.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Excelled in state exams, showcasing deep understanding of finance and mathematics.</li>
                <li>Applied advanced mathematical techniques to real-world challenges in finance and machine learning.</li>
              </ul>
            </div>

            {/* Personal Interest in Astrophysics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Astrophysics: My Cosmic Curiosity</h3>
              <p className="text-lg text-gray-700 mb-4">
                Astrophysics has always fascinated me. Beyond stargazing, it's about understanding the fundamental laws of nature. The parallels between astrophysics and machine learning are striking—both involve developing models to understand complex, often mysterious phenomena.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Fascinated by the mathematical models that describe the universe and how they relate to our technologies.</li>
                <li>Always intrigued by the overlaps between space exploration and machine learning innovation.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full bg-indigo-800 py-12 text-white text-center">
        <p className="text-xl">
          If you’re interested in collaborating or learning more about any of my projects, feel free to reach out!
        </p>
        <a
          href="#contact"  // Placeholder for the contact section
          className="mt-4 inline-block px-6 py-3 bg-white text-indigo-800 rounded-lg shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
        >
          Let’s Connect
        </a>
      </section>
    </>
  );
};

export default ProjectsPage;
