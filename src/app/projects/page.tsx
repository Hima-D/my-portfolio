"use client";
import React from "react";
import Header from "@/components/header";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <section className="w-full bg-gray-100 py-16 px-6 mt-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-8 text-center">
            My Projects Portfolio
          </h2>

          <div className="space-y-12">
            {/* Sales Analysis Model */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Retail Sales Forecasting System (2024)</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TensorFlow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Scikit-learn</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Time Series</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Built a demand forecasting system for PharmaMart, a pharmacy chain with 50+ stores. The model achieved a 22% improvement in forecasting accuracy compared to their previous system.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Processed 3 years of historical sales data (1.2M+ transactions) and integrated weather patterns and seasonal disease data</li>
                <li>Deployed ensemble model combining ARIMA (for short-term trends) and LSTM networks (for long-term patterns), reducing inventory costs by 17%</li>
                <li>Implemented dashboard with D3.js visualizations allowing inventory managers to adjust forecasts based on upcoming promotions</li>
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View case study</a></li>
              </ul>
            </div>

            {/* Data Cleaning Pipelines */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Healthcare Data ETL Pipeline (2023)</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Apache Airflow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Pandas</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Great Expectations</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Created an automated pipeline for MedAnalytics Inc. that processes and standardizes EHR data from 12 different sources, handling 50,000+ daily patient records.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Designed a modular ETL architecture with 8 distinct data quality checkpoints, reducing errors by 87%</li>
                <li>Implemented Great Expectations for automated data validation, with custom rules for healthcare-specific requirements</li>
                <li>Built anomaly detection system that flags statistical outliers in patient vitals, lab results, and billing data</li>
                <li>Integrated HIPAA-compliant data masking for all PHI (Personal Health Information)</li>
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View technical documentation</a></li>
              </ul>
            </div>

            {/* Coinwave Contribution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI-Driven Financial Advisor at Coinwave (2023-Present)</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PyTorch</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">FastAPI</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Leading the development of "CoinSage", an AI-powered financial advisor that helps users optimize cryptocurrency investments. Currently serving 8,500+ active users.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Built portfolio optimization algorithm using gradient boosting that outperformed market benchmarks by 12% in back-testing</li>
                <li>Developed risk assessment model analyzing transaction patterns across 15+ blockchains</li>
                <li>Created NLP system for sentiment analysis of financial news, processing 30,000+ articles weekly</li>
                <li>Managing team of 4 engineers implementing real-time market monitoring with sub-second latency</li>
                <li><a href="https://coinwave.io/coinsage" className="text-indigo-600 hover:text-indigo-800 font-medium">Visit project site</a></li>
              </ul>
            </div>

            {/* Enack Contribution */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Enack: Adaptive Learning Platform (2021-Present)</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">MongoDB</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AWS</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Co-founded EdTech startup that serves 15,000+ students across 28 educational institutions. Raised $750K in seed funding (2022) and grew user base by 230% YoY.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Built knowledge graph system mapping 1,200+ educational concepts to create personalized learning paths</li>
                <li>Implemented spaced repetition algorithm that improved student knowledge retention by 34%</li>
                <li>Designed A/B testing framework for content delivery methods, conducting 50+ experiments</li>
                <li>Led migration from monolithic architecture to microservices, reducing deployment time by 75%</li>
                <li><a href="https://enack.edu" className="text-indigo-600 hover:text-indigo-800 font-medium">Visit Enack</a></li>
              </ul>
            </div>

            {/* Student Engagement Platform */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">EduTrack: Student Engagement Analytics (2022)</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Django</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Vue.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Docker</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Developed analytics platform for River College that tracks 70+ student engagement metrics and predicts at-risk students with 85% accuracy.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Created early warning system that identifies struggling students 3.2 weeks earlier than traditional methods</li>
                <li>Built dashboards for faculty showing real-time student progress across 6 key performance indicators</li>
                <li>Implemented recommendation engine suggesting specific interventions based on student learning patterns</li>
                <li>System helped increase student retention rate by 18% during first year of implementation</li>
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">View impact report</a></li>
              </ul>
            </div>

            {/* Research Projects */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Research: Financial Math Applications in ML (2023)</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">R</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">LaTeX</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Stochastic Calculus</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Published research paper "Applying Stochastic Differential Equations to Deep Learning Optimization" in the Journal of Computational Finance (Vol. 27, Issue 3).
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Developed novel method for neural network training using principles from stochastic calculus</li>
                <li>Created optimization algorithm that converges 31% faster than standard gradient descent</li>
                <li>Implemented model in PyTorch and published reference code on Github (480+ stars)</li>
                <li>Research cited in 8 subsequent academic papers and featured in Financial ML newsletter</li>
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Read paper</a> | <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">GitHub repo</a></li>
              </ul>
            </div>

            {/* Astrophysics Project */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">StellarNet: Deep Learning for Exoplanet Detection (2022)</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TensorFlow</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Astronomy</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Kepler Data</span>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Personal research project using 1D convolutional neural networks to detect exoplanets from Kepler space telescope light curve data.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 space-y-2">
                <li>Processed and normalized 150,000+ stellar light curves from NASA's Kepler mission</li>
                <li>Achieved 92.7% accuracy in exoplanet transit detection, improving upon baseline methods by 15%</li>
                <li>Implemented data augmentation techniques to handle class imbalance in astronomy datasets</li>
                <li>Created interactive visualization tool for exploring planetary parameters derived from light curves</li>
                <li><a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Project documentation</a> | <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Demo</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
