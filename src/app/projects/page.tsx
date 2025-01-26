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
                I developed a machine learning model to predict future sales trends for a retail client. Think of it like forecasting the weather, but for sales. I used time-series techniques like ARIMA and LSTM, which helped the client avoid overstocking and running out of popular products. It’s kind of like having a crystal ball, but with real data backing it up!
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Cleaned and prepared data using EDA (Exploratory Data Analysis) to ensure accurate predictions.</li>
                <li>Applied ARIMA and LSTM models to forecast sales, helping optimize inventory and reduce waste.</li>
                <li>Worked closely with the business team to make sure the model actually helped them hit their goals. Spoiler alert: it did!</li>
              </ul>
            </div>

            {/* Data Cleaning Pipelines */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Data Cleaning & Sanity Check Pipelines</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                This one’s all about making sure your data is nice and tidy before you do anything with it. I built robust pipelines to clean and process large datasets in finance and retail. Imagine giving your data a spa day—getting rid of all the messy bits so it’s ready to work for you.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Designed ETL workflows to handle missing values, outliers, and duplicates in financial data.</li>
                <li>Automated sanity checks and anomaly detection to ensure the data remained high quality.</li>
                <li>Leveraged Python (Pandas, NumPy) and SQL to streamline the whole process and handle large-scale data efficiently.</li>
              </ul>
            </div>

            {/* Coinwave Contribution */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI for Finance at Coinwave</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                At Coinwave, we’re still in the early stages of building an AI-driven platform for managing financial accounts and helping people plan for their future goals. My job as a Machine Learning Engineer is to develop predictive models that will eventually help clients make smarter financial decisions—whether it’s investments, savings, or long-term financial planning. It’s like we’re creating a personal financial assistant, but powered by AI.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Building predictive models to forecast financial trends, helping clients optimize their portfolios.</li>
                <li>Developing a unified platform that brings all accounts together, helping people plan and track their financial goals.</li>
                <li>Collaborating with a talented team to turn complex financial data into easy-to-understand insights for users.</li>
              </ul>
            </div>

            {/* Enack Contribution */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Co-Founder at Enack</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                I co-founded Enack, an EdTech startup focused on building AI-powered tools to personalize learning experiences. At Enack, we’re working on transitioning our platform from offline to fully online. Our goal is to create an interactive learning environment that’s tailored to each student’s needs—whether that’s through personalized content recommendations or gamified learning experiences. The shift online will help us reach a lot more students and expand our impact.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Developed an AI-powered personalized learning engine that tailors content based on student interaction.</li>
                <li>Led the development of gamification features to make learning more engaging and fun.</li>
                <li>Transitioning the platform from offline to online to provide greater accessibility for students everywhere.</li>
              </ul>
            </div>

            {/* Platform for Engagement */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">AI-Powered Platform for Student Engagement</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                I helped build an AI-powered platform to track student engagement, predict academic success, and suggest personalized interventions. It’s like having a dashboard that alerts teachers when students might need extra help, or even when they’re about to zone out in class. In short, it’s a tool that helps make education more responsive to student needs.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Used machine learning to analyze student interaction data and predict future academic engagement.</li>
                <li>Created dashboards for educators to track students’ progress and intervene when necessary.</li>
                <li>Incorporated interactive, engaging features to make the learning experience as fun as it is educational.</li>
              </ul>
            </div>

            {/* Achievement in Finance and Mathematics */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">State 2nd Topper in Finance & Mathematics</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                A little personal achievement I’m pretty proud of: I was ranked as the State 2nd Topper in both Finance and Mathematics. I’m a bit of a numbers nerd (who isn’t, right?) and this recognition reflects my deep love for analytical thinking. And yes, it was all achieved with a generous amount of coffee.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Excelled in state exams, proving my skills in finance and quantitative analysis.</li>
                <li>Used advanced math to solve real-world challenges in both finance and machine learning.</li>
              </ul>
            </div>

            {/* Personal Interest in Astrophysics */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-4">Astrophysics: My Cosmic Curiosity</h3>
              <p className="text-lg text-gray-700 opacity-80 mb-4">
                On a more personal note, I’ve always been fascinated by the universe. My interest in astrophysics isn’t just limited to stargazing—it’s more about understanding the fundamental laws of nature and how they apply to both the cosmos and the technology we develop. In many ways, the complexity of machine learning reminds me of astrophysics—both require us to build models to understand a vast, often unknowable universe.
              </p>
              <ul className="list-inside list-disc text-lg text-gray-700 opacity-80 space-y-2">
                <li>Love exploring the mysteries of space and the mathematical models that describe it.</li>
                <li>Always amazed by the parallels between space exploration and the cutting-edge technologies we’re building.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
