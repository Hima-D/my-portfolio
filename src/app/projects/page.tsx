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
            My Projects: Innovations in Action
          </h2>

          <div className="space-y-12">
            {/* Sales Analysis Model */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Sales Analysis & Forecasting Model</h3>
              <p className="text-lg text-gray-700 mb-4">
                I developed a machine learning model that forecasts retail sales, using advanced time-series techniques such as ARIMA and LSTM. This model helps businesses optimize inventory levels, ensuring they never overstock or run out of popular products.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Used EDA (Exploratory Data Analysis) to prepare data for accurate forecasting.</li>
                <li>Implemented ARIMA and LSTM models to predict sales trends, optimizing inventory and minimizing waste.</li>
                <li>Collaborated with business teams to ensure the model provided actionable, real-world insights.</li>
              </ul>
            </div>

            {/* Data Cleaning Pipelines */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Data Cleaning & Sanity Check Pipelines</h3>
              <p className="text-lg text-gray-700 mb-4">
                Clean and reliable data forms the backbone of any meaningful analysis. I built efficient ETL pipelines to process and cleanse raw data, making it ready for high-quality analysis and decision-making.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Designed ETL workflows to handle missing data, outliers, and duplicates in large datasets.</li>
                <li>Automated sanity checks and anomaly detection to ensure data consistency and quality.</li>
                <li>Utilized Python (Pandas, NumPy) and SQL for scalable data cleaning solutions.</li>
              </ul>
            </div>

            {/* Coinwave Contribution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI for Finance at Coinwave</h3>
              <p className="text-lg text-gray-700 mb-4">
                As a Machine Learning Engineer at Coinwave, I’m building an AI-driven platform designed to help individuals optimize their financial decisions. Our models provide predictive insights, helping users navigate their financial journeys more effectively.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Developing predictive models to forecast financial trends and assist with portfolio optimization.</li>
                <li>Consolidating financial data into a unified platform for better goal tracking and decision-making.</li>
                <li>Collaborating with cross-functional teams to translate complex financial data into actionable insights.</li>
              </ul>
            </div>

            {/* Enack Contribution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Co-Founder at Enack</h3>
              <p className="text-lg text-gray-700 mb-4">
                As the co-founder of Enack, an EdTech startup, I lead the development of AI-powered tools designed to personalize the learning experience. Our platform is transitioning to an online environment to make learning more interactive and accessible.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Developed an AI engine to personalize educational content based on individual student needs.</li>
                <li>Led the creation of gamification features to enhance engagement and motivation among students.</li>
                <li>Oversaw the transition of our platform to an online model, expanding access to learners worldwide.</li>
              </ul>
            </div>

            {/* Platform for Engagement */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI-Powered Student Engagement Platform</h3>
              <p className="text-lg text-gray-700 mb-4">
                I helped develop an AI-driven platform that tracks student engagement, predicts academic outcomes, and recommends personalized interventions. This tool enables educators to monitor student progress and provide targeted support when needed.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Built machine learning models to analyze student behavior and predict academic success.</li>
                <li>Created interactive dashboards for educators to track student performance and deliver personalized support.</li>
                <li>Designed engaging features that keep students motivated and excited about their academic journey.</li>
              </ul>
            </div>

            {/* Achievement in Finance and Mathematics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">State 2nd Topper in Finance & Mathematics</h3>
              <p className="text-lg text-gray-700 mb-4">
                I earned recognition as the 2nd Topper in Finance and Mathematics in my state, an achievement that reflects my strong analytical skills and deep understanding of quantitative subjects, which form the foundation of my work in machine learning and finance.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Ranked as one of the top performers in state exams, demonstrating proficiency in finance and mathematics.</li>
                <li>Applied advanced mathematical techniques to solve real-world problems in finance and technology.</li>
              </ul>
            </div>

            {/* Personal Interest in Astrophysics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Astrophysics: Exploring the Cosmos</h3>
              <p className="text-lg text-gray-700 mb-4">
                Astrophysics has long fascinated me, particularly the mathematical models that describe the universe. I find parallels between astrophysics and machine learning—both involve constructing models to understand complex, often unseen phenomena.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Exploring the mathematical foundations of astrophysics and their connection to modern technologies.</li>
                <li>Studying the intersection of space exploration and machine learning to push the boundaries of both fields.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
