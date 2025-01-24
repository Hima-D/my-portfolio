"use client";
import React from "react";
import Header from "@/components/header";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <section className="w-full bg-gray-100 py-12 px-4 md:px-6 mt-16">
        {/* The 'mt-16' ensures the content is below the fixed header */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-indigo-900 mb-8 text-center">
            My Projects (aka My Digital Playground)
          </h2>

          <div className="space-y-8">
            {/* Sales Analysis Model */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Sales Analysis & Forecasting Model</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                Developed a machine learning model to predict future sales trends for a retail client. I used time-series forecasting techniques like ARIMA and LSTM. Basically, I made sure the client doesn’t overstock *and* doesn't run out of popular products. It's like having a crystal ball, but cooler and way more accurate.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Applied exploratory data analysis (EDA) to clean and prepare data for accurate predictions.</li>
                <li>Used ARIMA and LSTM models to forecast future sales, optimizing inventory management.</li>
                <li>Collaborated with the business team to align the model with key business goals. Spoiler: They liked it!</li>
              </ul>
            </div>

            {/* Data Cleaning Pipelines */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Data Cleaning & Sanity Check Pipelines</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                Built robust data pipelines to clean and process large datasets in the finance and retail sectors. Think of it like giving your data a nice spa treatment—clean, refreshed, and ready to go!
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Designed ETL workflows to handle missing values, outliers, and duplicates in financial data.</li>
                <li>Automated sanity checks and anomaly detection to ensure high-quality datasets.</li>
                <li>Used Python (Pandas, NumPy) and SQL for efficient data processing on a large scale.</li>
              </ul>
            </div>

            {/* Coinwave Contribution */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI for Finance at Coinwave</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                As a Machine Learning Engineer at Coinwave, I build predictive models to forecast stock market trends, analyze customer data, and even detect fraud. The models I work on use cutting-edge algorithms, so you could say I’m basically trying to predict the future. (No pressure, right?)
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Built predictive models using time-series analysis and reinforcement learning to forecast stock market trends.</li>
                <li>Collaborated with data scientists and analysts to integrate AI tools into the company’s financial platform.</li>
                <li>Applied NLP techniques to extract insights from unstructured financial data (news, reports, etc.).</li>
              </ul>
            </div>

            {/* Enack Contribution */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Co-Founder at Enack</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                Co-founded Enack, an EdTech startup, to build AI-driven tools that personalize learning experiences for students. The highlight? A recommendation engine that tailors content based on student engagement. It’s like Netflix for learning (minus the popcorn).
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Developed an AI-powered personalized learning system using NLP and collaborative filtering.</li>
                <li>Integrated gamification features into the platform, turning learning into an engaging experience (without all the tests!).</li>
                <li>Worked closely with educators to improve learning outcomes using AI-based insights.</li>
              </ul>
            </div>

            {/* Platform for Engagement */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI-Powered Platform for Student Engagement</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                Built an AI-powered platform that tracks student engagement, predicts academic success, and suggests personalized interventions. Basically, it’s a dashboard that tells teachers when their students are about to zone out in class.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Used machine learning to analyze student interaction data and predict future engagement.</li>
                <li>Created a dashboard to help educators monitor progress and predict which students might need extra attention.</li>
                <li>Incorporated interactive features to make learning fun and engaging—because who says education can’t be exciting?</li>
              </ul>
            </div>

            {/* Achievement in Finance and Mathematics */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">State 2nd Topper in Finance & Mathematics</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                During my academic journey, I earned the title of **State 2nd Topper** in both **Finance** and **Mathematics**. A pretty cool accomplishment that speaks to my strong analytical and mathematical abilities, and yes—I did it all while drinking way too much coffee.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Achieved top rankings in state exams, demonstrating exceptional skills in finance and quantitative analysis.</li>
                <li>Applied advanced math and statistics to solve real-world problems in finance and machine learning.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
